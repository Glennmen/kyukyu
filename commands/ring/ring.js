const GLOBAL = require('../../global');

const {
  STRINGS, SCENARIO_TYPE, RESOLUTION_TYPE, diceRoll, pause, wait,
} = require('./src/en.common');

const {literal} = require('../../helpers/literal');
const {normalize} = require('../../helpers/normalize');

const enroll = require('./src/en.enroll');
// const enroll = require('./src/en.enroll.rlgl');

const SCENARIOS =
  require('./src/en.chance')
      .concat(require('./src/en.danger'));

const GAME_CHANNELS = [GLOBAL.RING_CHANNEL, GLOBAL.RING_TEST_CHANNEL];

const GAME_SETTINGS = {
  RESPONSE_TIME: 25,
  PAUSE_AFTER_DAY_ENDS: 10,
  PAUSE_BEFORE_GAME_START: 15, // 5
  ENTRY_TIME_LIMIT: 60, // 15
  PLAYER_LIMIT: 50,
  WINNER_LIMIT: 2,
  SPECIAL_TRIGGER: 5,
};

// const BLUE = 0x3170a6; // (49, 112, 166)
// const RED = 0xb83a34; // (184, 58, 52)
// const GREEN = 0x77993c; // (119, 153, 60)

const RING_MASTER_REVIVE_RATE = 0.08;

const MAX_MEDAL = 5; // maximum number of medals a player can have.

/*
TRAP

You saw a small trial leading to the woods. This could be a short cut.
- Take the small trial
- Stay on the main road

The road is getting roacky

There was a heavy shower, and the road became very muddy.

*/

const SPECIAL_SCENARIOS = [
  require('./src/en.special.lamp'),
  require('./src/en.special.trapA'),
  require('./src/en.special.triggerA'),
  require('./src/en.special.trapB'),
];


const DUEL_SCENARIOS = [
  // require('./src/en.special.duel'),
  require('./src/en.special.marble'),
];

/** RiNG player */
class Player {
  /**
   * @param {RiNGMaster} master
   * @param {Interaction} i First interaction
   */
  constructor(master, i) {
    const playerName = normalize(i.member.nickname??i.member.user.username);
    this.master = master;
    this.member = i.member;
    this.playerName = playerName.normalize();
    this.alive = true;
    this.medal = 0;
    this.lastInteraction = i;

    this.collector = null;
    this.defaultChoice = 0;
    this.scenario = null;
    this.messages = [];
    this.noReactionCount = 1;
  }

  /**
   * Start a new day
   * @param {object} scenario
   */
  startDay(scenario) {
    this.scenario = scenario;

    const buttons = [];
    let choices;
    let story;
    if ((scenario.type == SCENARIO_TYPE.SPECIAL)||
      (scenario.type == SCENARIO_TYPE.PVP_DUEL)
    ) {
      const s = scenario.getScenario(this);
      choices = s.choices;
      story = s.story;
    } else {
      choices = scenario.choices;
      story = scenario.story;
    }
    this.defaultChoice = diceRoll(choices.length);

    this.messages.push(`**Day ${this.master.days}**\n${story}`);

    for (let bIdx = 0; bIdx < choices.length; bIdx++) {
      buttons.push({
        type: 2, label: choices[bIdx],
        style: 1, custom_id: bIdx.toString(),
      });
    }
    const content = {
      content: this.messages.join('\n'),
      ephemeral: true,
      components: [{type: 1, components: buttons}],
    };

    const handler = (msg) => {
      this.collector = msg.createMessageComponentCollector({
        max: 1, time: GAME_SETTINGS.RESPONSE_TIME * 1000,
      });
      this.collector.on('collect', (i) => this.onReaction(i));
      this.collector.on('end', (i, reason) => this.onNoReaction(i, reason));
    };

    if (this.lastInteraction.replied) {
      this.lastInteraction.editReply(content).then(handler);
    } else {
      this.lastInteraction.reply(content).then(handler);
    }
  }

  /**
   * Process interaction
   * @param {Interaction} i Interaction
   */
  onReaction(i) {
    this.processChoice(parseInt(i.customId));
    this.noReactionCount = 0;
    this.lastInteraction = i;
    this.messages = [];
    i.reply({
      content: 'wait....',
      ephemeral: true,
    });
    // i.deferReply();
  }

  /**
   * Automatic interaction
   * @param {Interaction} i Interaction
   * @param {String} reason Reason for
   */
  onNoReaction(i, reason) {
    if (reason == 'time') {
      this.processChoice(undefined);
      this.noReactionCount++;
    }
  }

  /**
   * Send last message
   * @return {Promise}
   */
  // sendLastMessage() {
  //   if (this.queuedMessage.length) {
  //     return this.lastInteraction.followUp({
  //       content: this.queuedMessage,
  //       ephemeral: true,
  //     });
  //   }
  // }

  /**
   * End of the new day
   * @return {Boolean}
   */
  endDay() {
    if (this.scenario.type == SCENARIO_TYPE.PVP_DUEL) {
      const result = this.scenario.resolveDuel(this);
      let response = result.message;

      if (result.type == RESOLUTION_TYPE.ELIMINATED) {
        if (this.medal) {
          this.medal--;
          response += STRINGS.REVIVE_MSG;
        } else if (Math.random() < RING_MASTER_REVIVE_RATE) {
          response += STRINGS.MASTER_REVIVE_MSG;
        } else {
          this.alive = false;
          response += STRINGS.DEATH_MSG;
        }
      }
      this.messages.push(response);
      const reply = {
        content: this.messages.join('\n\n'),
        ephemeral: true,
        components: [],
      };
      if (this.lastInteraction.replied) {
        this.lastInteraction.editReply(reply);
      } else {
        this.lastInteraction.reply(reply);
      }
    }
    return this.alive;
  }

  /**
   * Live or die?
   * @param {Integer} choice
  */
  processChoice(choice) {
    let result;
    const scenario = this.scenario;
    const CHOICE = (choice == undefined)?this.defaultChoice:choice;

    if (
      (scenario.type == SCENARIO_TYPE.PVP_DUEL)||
      (scenario.type == SCENARIO_TYPE.SPECIAL)
    ) {
      result = this.scenario.resolveChoice(CHOICE, this);
    } else {
      const __result = this.scenario.results[CHOICE];
      result = __result[diceRoll(__result.length)];
    }

    let response = result.message;

    switch (result.type) {
      case RESOLUTION_TYPE.MEDAL_X1:
        if (this.medal < MAX_MEDAL) this.medal++;
        break;
      case RESOLUTION_TYPE.MEDAL_X2:
        this.medal += 2;
        if (this.medal > MAX_MEDAL) this.medal = MAX_MEDAL;
        break;
      case RESOLUTION_TYPE.MEDAL_X3:
        this.medal += 3;
        if (this.medal > MAX_MEDAL) this.medal = MAX_MEDAL;
        break;
      case RESOLUTION_TYPE.ELIMINATED:
        if (this.medal) {
          this.medal--;
          response += STRINGS.REVIVE_MSG;
        } else if (Math.random() < RING_MASTER_REVIVE_RATE) {
          response += STRINGS.MASTER_REVIVE_MSG;
        } else {
          this.alive = false;
          response += STRINGS.DEATH_MSG;
        }
        break;
      case RESOLUTION_TYPE.SURVIVED:
      case RESOLUTION_TYPE.PENDING:
      default:
    }

    let log = `${this.master.days}: ${this.playerName} `;
    if (choice == undefined) {
      log += 'timed out.';
    } else if (scenario.choices) {
      log += `chose "${scenario.choices[choice]}".`;
    } else {
      log += `chose "${choice}".`;
    }
    this.master.log(log);

    this.messages.push(response);
    const reply = {
      content: this.messages.join('\n\n'),
      ephemeral: true,
      components: [],
    };
    if (this.lastInteraction.replied) {
      this.lastInteraction.editReply(reply);
    } else {
      this.lastInteraction.reply(reply);
    }
  }
}

/** RiNG Master */
class RiNGMaster {
  /**
   * @param {TextChannel} channel
   */
  constructor(channel) {
    this.players = [];
    this.channel = channel;
    this.days = 0;
    this.gameSummary = [];
    this.gameLog = '';
  }

  /** @param {string} text */
  log(text) {
    try {
      console.log(text);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * @param {Interaction} i
   * @return {PLayer}
   */
  addPlayer(i) {
    const newPlayer = new Player(this, i);
    this.players.push(newPlayer);
    return newPlayer;
  }

  /** Start a day */
  startDay() {
    let scenario;
    this.days++;
    this.players.forEach((p)=>p.scenario = undefined);

    this.playerAIdx = -1;
    this.playerBIdx = -1;

    if (this.players.length >= GAME_SETTINGS.SPECIAL_TRIGGER) {
      const DUEL_IDX = diceRoll(DUEL_SCENARIOS.length + 2);
      if (DUEL_IDX < DUEL_SCENARIOS.length) {
        const AIdx = diceRoll(this.players.length);
        let BIdx = diceRoll(this.players.length);
        if (AIdx == BIdx) BIdx = diceRoll(this.players.length);
        if (AIdx !== BIdx) {
          const DUEL = DUEL_SCENARIOS[DUEL_IDX];
          scenario = new DUEL(this, this.players[AIdx], this.players[BIdx]);
          this.players[AIdx].startDay(scenario);
          this.players[BIdx].startDay(scenario);
        }
      }

      const SPECIAL_IDX = diceRoll(SPECIAL_SCENARIOS.length + 4);
      if (SPECIAL_IDX < SPECIAL_SCENARIOS.length) {
        scenario = SPECIAL_SCENARIOS[SPECIAL_IDX];
        const player = this.players[diceRoll(this.players.length)];
        if (player.scenario == undefined) player.startDay(scenario);
      }
    }
    for (let pIdx=0; pIdx < this.players.length; pIdx++) {
      const player = this.players[pIdx];
      if (player.scenario == undefined) {
        player.startDay(SCENARIOS[diceRoll(SCENARIOS.length)]);
      }
    }
    pause(GAME_SETTINGS.RESPONSE_TIME+0.5).then(() => this.endDay());
  }

  /** End a day */
  endDay() {
    const survivors = [];
    const eliminatedNames = [];
    this.players.forEach((p) => {
      if (p.endDay()) {
        survivors.push(p);
      } else {
        eliminatedNames.push(p.playerName);
      }
    });

    let SUMMARY = literal(STRINGS.SUMMARY_HEADING, '{DAY}', this.days);
    if (eliminatedNames.length == 0) {
      SUMMARY += STRINGS.SUMMARY_NO_ELIMINATION;
    } else if (eliminatedNames.length == 1) {
      SUMMARY += literal(
          STRINGS.SUMMARY_ONE_ELIMINATION,
          '{PLAYER}', eliminatedNames[0],
      );
    } else {
      SUMMARY += literal(
          STRINGS.SUMMARY_MANY_ELIMINATIONS,
          '{COUNT}', eliminatedNames.length,
          '{PLAYERS}', eliminatedNames.join(', '),
      );
    }
    this.gameSummary.push(SUMMARY);

    this.players = survivors;

    let gameEnded = false;
    if (survivors.length == 0) {
      gameEnded = true;
      this.gameSummary.push(STRINGS.SUMMARY_NO_WINNER);
    } else if (survivors.length <= GAME_SETTINGS.WINNER_LIMIT) {
      gameEnded = true;
      if (survivors.length == 1) {
        this.gameSummary.push(
            literal(
                STRINGS.SUMMARY_ONE_WINNER,
                '{WINNER}', `<@${survivors[0].member.id}>`,
            ),
        );
      } else {
        this.gameSummary.push(
            literal(
                STRINGS.SUMMARY_MANY_WINNERS,
                '{COUNT}', survivors.length,
                '{WINNERS}', survivors.map((p)=>`<@${p.member.id}>`).join(', '),
            ),
        );
      }

      if (this.channel.id == GLOBAL.RING_CHANNEL) {
        const role = this.channel.guild
            .roles.cache.get(GLOBAL.LORD_OF_RING_ROLE_ID);
        role.members.forEach((member)=> member.roles.remove(role));
        survivors.forEach((survivor)=> survivor.member.roles.add(role));
      }
    }

    if (gameEnded) {
      // survivors.forEach(async (p) => await p.sendLastMessage());
      wait(GAME_SETTINGS.PAUSE_AFTER_DAY_ENDS);
      this.channel.send(this.gameSummary.join('\n\n'));
      this.gameSummary = [];
      this.players = [];
      SPECIAL_SCENARIOS.forEach((s)=>s.init());
      return;
    }

    if (this.gameSummary.length >= 5) {
      this.channel.send(
          this.gameSummary.join('\n\n') +
          literal(STRINGS.SUMMARY_SURVIVOR_COUNT, '{COUNT}', survivors.length),
      );
      this.gameSummary = [];
    }
    pause(GAME_SETTINGS.PAUSE_AFTER_DAY_ENDS)
        .then(() => this.startDay());
  }
};

const lotr = {
  name: 'ring',
  async execute(cmdRes, settings, msg, args) {
    if (GAME_CHANNELS.includes(msg.channelId)) {
      if (msg.channelId == GLOBAL.RING_CHANNEL) {
        const CB = msg.client.AOW_CB;
        CB.send(literal(
            STRINGS.PREANNOUNCEMENT,
            '{SECONDS}', GAME_SETTINGS.PAUSE_BEFORE_GAME_START),
        );
        master = new RiNGMaster(msg.channel);
        enroll.announce(GAME_SETTINGS, master);
        pause(GAME_SETTINGS.PAUSE_BEFORE_GAME_START).then(()=> {
          CB.send(STRINGS.LETSGO);
          enroll.start(GAME_SETTINGS, master);
          pause(GAME_SETTINGS.ENTRY_TIME_LIMIT).then(()=> {
            enroll.stop(GAME_SETTINGS, master);
            pause(GAME_SETTINGS.PAUSE_AFTER_DAY_ENDS)
                .then(() => master.startDay());
          });
        });
      } else {
        master = new RiNGMaster(msg.channel);
        enroll.announce(GAME_SETTINGS, master);
        pause(GAME_SETTINGS.PAUSE_BEFORE_GAME_START).then(()=> {
          enroll.start(GAME_SETTINGS, master);
          pause(GAME_SETTINGS.ENTRY_TIME_LIMIT).then(()=> {
            enroll.stop(GAME_SETTINGS, master);
            pause(GAME_SETTINGS.PAUSE_AFTER_DAY_ENDS)
                .then(() => master.startDay());
          });
        });
      }
    }
  },
};

module.exports = lotr;
