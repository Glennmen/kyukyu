/* eslint-disable max-len */

const fs = require('fs');
const path = require('path');

const GREETING = fs.readFileSync(path.resolve(__dirname, 'greeting.md'), 'utf8');

module.exports = {
  GREETING: GREETING,

  commands: [
    // kyukyu
    {
      name: 'kyukyu',
      aliases: ['kyukyu'],
    },

    // greet
    {
      name: 'greet',
      aliases: ['greet', 'greeting', 'hello', 'hi'],
    },

    // reload
    {
      name: 'reload',
      aliases: ['reload'],
      desc: 'Reloads a command.',
      commandNotFound: 'There is no command with name or alias of "{TEXT}"',
    },

    // help
    {
      name: 'help',
      aliases: ['help', 'h', 'commands'],
      desc: 'Show help for a specified command..',
      usage: '[command name]',
      response: 'Type \`{PREFIX}help <command>\` to get more information about a specific command.\n\n**Commands available:**\n{COMMANDS}',
      labelName: 'Name: ',
      labelAliases: '**Aliases: **',
      labelDesc: '**Description: **',
      labelUsae: '**Usage: **',
      labelExample: '**Example: **',
      commandNotFound: 'This command does not exist.',
    },

    // clear
    {
      name: 'clear',
      aliases: ['clear'],
      desc: '(DM-only) Delete bot\'s own messages (max 10).',
    },

    // aoe
    {
      name: 'aoe',
      aliases: ['aoe'],
      desc: 'Show reference graphic of hero and troops\' AoE range',
      usage: '<troops name|hero name>',
      usage_example: 'chione',
    },

    // curser
    {
      name: 'curse',
      aliases: ['curse'],
      desc: 'Calculate the effect of curse on troops.',
      usage: '<target> [target level] [curser] [curser level]',
      usage_example: '\'stone golem\' 9 voodoo 8',
      responseVoodooCannotBeCurse: 'A Voodoo Dolls unit cannot curse another Voodoo Dolls unit.',
      responseVoodoo: 'Curser: Voodoo Dolls (Level {VOODOO LEVEL})\nTarget: {TARGET} (Level {TARGET LEVEL})\nCurse Success Rate: {RATE}%\nMaximum Damage to Target: {DAMAGE} ({HEALTH PERCENTAGE}% of total health)',
    },

    // stats
    {
      name: 'stats',
      aliases: ['stats', 'stat'],
      desc: 'Show stats of a troops.',
      usage: '<troops name 1> [level] <troops name 2> <level>...',
      usage_example: 'archers 9 \'frost archers\' 8',
      header: 'Level-{LEVEL} {TROOPS}',
      basicHeader: 'Basic',
      skillHeader: 'Skill',
      sentByDM: 'Troops stats sent by DM',
      labels: {
        'race': 'Race',
        'human': 'Human',
        'dark': 'Dark',
        'wild': 'Wild',
        'sacred': 'Sacred',
        'count': 'Count',
        'health': 'Health',
        'attack': 'Attack',
        'defense': 'Defense',
        'speed': 'Speed',
        'attack_speed': 'Attack Speed',
        'attack_distance': 'Attack Distance',
        'shooting_range': 'Shooting Range',
        'attack_type': 'Attack Type',
        'damage_type': 'Damage Type',
        'damage_shape': 'Damage Shape',
        'damage_range': 'Damage Range',
        // speed
        'very slow': 'Very Slow',
        'slow': 'Slow',
        'medium': 'Medium',
        'fast': 'Fast',
        'very fast': 'Very Fast',
        // attack/shooting range
        'short': 'Short',
        'long': 'Long',
        'infinity': 'Infinity',
        // attack type
        'ranged': 'Ranged',
        'melee': 'Melee',
        // damage type
        'physical': 'Physical',
        'magical': 'Magical',
        // damage shape
        'single': 'Single Target',
        'puncture': 'Puncture',
        'rounded': 'Rounded',
        'rectangular': 'Rectangular',
        'range': 'Range',
        'trigger_number': 'Trigger Number',
        'duration': 'Duration',
        'duration_2': 'Duration',
        'damage': 'Damage',
        'lasting_damage': 'Lasting Damage',
        'attack_increase': 'Attack Increase',
        'attack_reduction': 'Attack Reduction',
        'attack_speed_increase': 'Attack Speed Increase',
        'attack_speed_reduction': 'Attack Speed Reduction',
        'movement_speed_increase': 'Movement Speed Increase',
        'movement_speed_reduction': 'Movement Speed Reduction',
        'knockback_distance': 'Knockback distacne',
        'heal': 'Heal',
        'number_of_fireballs': 'Number of Fireballs',
        'life_steal_percentage': 'Life Steal Percentage',
        'damage_resistance': 'Damage Resistance',
        'critical_rate': 'Critical Rate',
        'critical_damage_rate': 'Critical Damage Rate',
        'damage_reflection': 'Damage Reflection',
      },
    },

    // troops
    {
      name: 'troops',
      aliases: ['troops', 'troop'],
      desc: 'Information about troops.\n(paladin, pilgrims, peltasts, brawlers, nun, voodoo dolls)',
      usage: '<troops name>',
      blackList: 'infantry,iron guards,hell jailers,fire mage,viking warrior,scholar,templar knight',
      files: {
        'paladin': path.resolve(__dirname, 'troops', 'paladin.json'),
        'pilgrims': path.resolve(__dirname, 'troops', 'pilgrims.json'),
        'peltasts': path.resolve(__dirname, 'troops', 'peltasts.json'),
        'brawlers': path.resolve(__dirname, 'troops', 'brawlers.json'),
        'nun': path.resolve(__dirname, 'troops', 'nun.json'),
        'voodoo dolls': path.resolve(__dirname, 'troops', 'voodoo dolls.json'),
      },
    },

    // formation
    {
      name: 'formation',
      aliases: ['formation', 'form'],
      desc: 'Tips for army formation',
      usage: 'beginner|leveling|farming',
      files: {
        'beginner': path.resolve(__dirname, 'formation', 'beginner.json'),
        'basic': path.resolve(__dirname, 'formation', 'beginner.json'),
        'level': path.resolve(__dirname, 'formation', 'leveling.json'),
        'leveling': path.resolve(__dirname, 'formation', 'leveling.json'),
        '8k': path.resolve(__dirname, 'formation', '8k.json'),
        '8000': path.resolve(__dirname, 'formation', '8k.json'),
        'farming': path.resolve(__dirname, 'formation', '8k.json'),
      },
    },

    // hh
    {
      name: 'hh',
      aliases: ['hh', 'honor hunting'],
      desc: 'Tips for honor hunting',
      usage: 'beginner|cerberus|cyclops|\'spider queen\'',
      files: {
        'beginner': path.resolve(__dirname, 'formation', 'hh_beginner.json'),
        'beginners': path.resolve(__dirname, 'formation', 'hh_beginner.json'),
        'basic': path.resolve(__dirname, 'formation', 'hh_beginner.json'),
        'cyclops': path.resolve(__dirname, 'formation', 'hh_cyclops.json'),
        'spider queen': path.resolve(__dirname, 'formation', 'hh_spider.json'),
        'spider': path.resolve(__dirname, 'formation', 'hh_spider.json'),
        'cerberus': path.resolve(__dirname, 'formation', 'hh_cerberus.json'),
      },
    },

    // faq
    {
      name: 'info',
      aliases: ['info', 'faq'],
      desc: 'Information/tips on various subjects.',
      response: 'Type \`{PREFIX}info <topic>\` to get information on a specific topic.\n\n**Topics available:**\n',
      items: [
        {
          aliases: ['building', 'barrack'],
          desc: 'Tips for building your barrack',
          files: [
            path.resolve(__dirname, 'faq', 'building1.json'),
            path.resolve(__dirname, 'faq', 'building2.json'),
            path.resolve(__dirname, 'faq', 'building3.json'),
          ],
        },
        {
          aliases: ['purchase', 'purchases', 'purchasing'],
          desc: 'Help with purchasing problems',
          files: [path.resolve(__dirname, 'faq', 'purchase.json')],
        },
        {
          aliases: ['gem', 'gems'],
          desc: 'Help with gems',
          files: [path.resolve(__dirname, 'faq', 'gem.json')],
        },
        {
          aliases: ['gem-purchase', 'gems-purchase', 'gem-purchases', 'gems-purchases'],
          desc: 'Information about gem purchase',
          files: [path.resolve(__dirname, 'faq', 'gem-purchase.json')],
        },
        {
          aliases: ['arena-battle', 'arena-battles'],
          desc: 'Information about arena arena battles',
          files: [path.resolve(__dirname, 'faq', 'arena-battle.json')],
        },
        {
          aliases: ['arena-reward', 'arena-rewards'],
          desc: 'Information about arena rewards',
          files: [path.resolve(__dirname, 'faq', 'arena-rewards.md')],
        },
        {
          aliases: ['power-rating', 'power', 'fist'],
          desc: 'Information about power rating',
          files: [path.resolve(__dirname, 'faq', 'arena-power.json')],
        },
        {
          aliases: ['arena-point', 'arena-points', 'arena-score', 'arena-scores'],
          desc: 'Information about clan point',
          files: [path.resolve(__dirname, 'faq', 'arena-point.json')],
        },
        {
          aliases: ['clan-point', 'honor-point', 'clan-points', 'honor-points'],
          desc: 'Information about clan point',
          files: [path.resolve(__dirname, 'faq', 'clan-point.json')],
        },
        {
          aliases: ['hero-sale', 'hero-sales'],
          desc: 'Information about hero sales',
          files: [path.resolve(__dirname, 'faq', 'hero-sale.md')],
        },
        {
          aliases: ['hero-upgrade', 'hero-upgrades', 'hero-level', 'hero-levels', 'hero-leveling'],
          desc: 'Information about hero upgrades',
          files: [path.resolve(__dirname, 'faq', 'hero-upgrade.json')],
        },
        {
          aliases: ['hero-event', 'hero-events', 'cm', 'wof', 'wheel', 'card-master', 'wheel-of-fortune'],
          desc: 'Information about hero events',
          files: [path.resolve(__dirname, 'faq', 'hero-event.json')],
        },
        {
          aliases: ['hero-class', 'hero-classes', 'hero-race', 'hero-races'],
          desc: 'Reference graphic of hero races and classes',
          files: [path.resolve(__dirname, 'faq', 'hero-class.json')],
        },
        {
          aliases: ['troops', 'troop', 'troops-meta'],
          desc: 'Current meta troops',
          files: [path.resolve(__dirname, 'faq', 'troops.json')],
        },
        {
          aliases: ['troops-class', 'troops-classes', 'troops-race', 'troops-races'],
          desc: 'Reference graphic of troops races',
          files: [path.resolve(__dirname, 'faq', 'troops-class.json')],
        },
        {
          aliases: ['exp-point', 'exp-points', 'xp-point', 'xp-points', 'exp', 'xp'],
          desc: 'Information on Exp points',
          files: [path.resolve(__dirname, 'faq', 'exp-point.json')],
        },
        {
          aliases: ['exp-level', 'exp-levels', 'xp-level', 'xp-levels'],
          desc: 'Information on Exp levels',
          files: [path.resolve(__dirname, 'faq', 'exp-level.json')],
        },
        {
          aliases: ['troops-draw', 'troops-draws', 'troop-draw', 'troop-draws', 'lucky-draws', 'lucky-draw'],
          desc: 'Information on 4-star troops draws',
          files: [path.resolve(__dirname, 'faq', 'troops-draw.json')],
        },
      ],
    },

    // troophies
    {
      name: 'trophies',
      aliases: ['trophies', 'trophy', 'score', 'scores'],
      desc: 'Calculate expected trophy gain/loss from a battle',
      usage: '<your trophy count> <opponent\'s trophy count>',
      usage_example: '3600 3800',
      response: '```Attacker: Win {MY GAIN} , Loss {MY LOSS}\nDefender: Win {OPP GAIN} , Loss {OPP LOSS}```',
    },

    // wof
    {
      name: 'wof',
      aliases: ['wof', 'wheel'],
      mode: ['mode', 'm'],
      responsePlus: 'The probability of getting {HIT_RANGE} or more {UNIT} in {SPIN_COUNT} spins is {PROB}%.',
      responseRange: 'The probability of getting {HIT_RANGE_1} to {HIT_RANGE_2} {UNIT} in {SPIN_COUNT} spins is {PROB}%.',
      responseExact: 'The probability of getting exactly {HIT_RANGE} {UNIT} in {SPIN_COUNT} spins is {PROB}%.\n{LOG}',
      responseExactDetail: '{PROB}% probability of {HIT_1}×{QTY_1} + {HIT_2}×{QTY_2} {UNIT}\n',
      responseMode: 'With {SPIN_COUNT} spins, the __mode__ is {TOTAL_QTY} {UNIT} ({PROB}% probability).',
      vouchers: ['voucher', 'vouchers'],
      shards: ['hero', 'shards', 'shard'],
      voucherUnit: 'vouchers',
      shardUnit: 'shards',
    },

    // hero
    {
      name: 'hero',
      aliases: ['hero'],
      desc: 'Information about heroes.',
      usage: 'aly|selene|chione|seondeok|harrison|mephisto',
      files: {
        'meta': path.resolve(__dirname, 'heroes', 'meta.json'),
        'aly': path.resolve(__dirname, 'heroes', 'aly.json'),
        'chione': path.resolve(__dirname, 'heroes', 'chione.json'),
        'selene': path.resolve(__dirname, 'heroes', 'selene.json'),
        'seondeok': path.resolve(__dirname, 'heroes', 'seondeok.json'),
        'harrison': path.resolve(__dirname, 'heroes', 'harrison.json'),
        'mephisto': path.resolve(__dirname, 'heroes', 'mephisto.json'),
      },
    },

    // +arthur
    {
      name: '+arthur',
      aliases: ['+arthur'],
      desc: 'Calculate the effect of Arthur on troops.',
      usage: '[hero level] <troops name> [troops level]',
      usge_example: '15 \'peltasts\' 9',
      responseIntro: 'When a level {TROOPS LEVEL} {TROOPS} is used with level {HERO LEVEL} Arthur, the effect is as followed.\n\n',
      responsePassive: 'Damage Immunity: {IMMUNITY PERCENTAGE}%\nHealth Regen: {HEALTH REGEN} per second\n',
      responseCursed: 'Maximum damage from a level 9 Voodoo Dolls: {DAMAGE} ({HEALTH PERCENTAGE}% of max health)\n',
      responseTroopsNotHuman: 'No effect. Arthur\'s abilities only apply to Human troops.\n',
    },

    // +selene
    {
      name: '+selene',
      aliases: ['+selene'],
      desc: 'Calculate the effect of Selene on troops.',
      usage: '[hero level] <troops name> [troops level]',
      usage_example: '15 \'undead soldier\' 9',
      responseIntro: 'When a level {TROOPS LEVEL} {TROOPS} is used with level {HERO LEVEL} Selene, the effect is as followed.\n\n',
      responseOpening: '**{DURATION}-Second Opening Buff**\n',
      responseOpeningAttack: 'Attack: {ATTACK} ({INCREASE}% increase)\n',
      responseCursed: 'Maximum damage from a level 9 Voodoo Dolls: {DAMAGE} ({HEALTH PERCENTAGE}% of max health)\n',
    },

    // +seondeok
    {
      name: '+seondeok',
      aliases: ['+seondeok', '+seon'],
      desc: 'Calculate the effect of Seondeok on troops.',
      usage: '[hero level] <troops name> [troops level]',
      usage_example: '15 \'undead soldier\' 9',
      responseIntro: 'When a level {TROOPS LEVEL} {TROOPS} is used with level {HERO LEVEL} Seondeok, the effect is as followed.\n\n',
      responseOpening: '**8-Second Opening Buff**\n',
      responseOpeningDamage: 'Damage = ({ATTACK} - *enemy unit\'s defense*) + {ADD DAMAGE}\n  *(about {EQUIV INCREASE}% attack increase)*\n',
      responseOpeningAoE: 'AoE Radius: {AOE RADIUS} (Area: {AOE AREA})\nAoE Attack: {AOE ATTACK}\n',
      responseNormal: '\n**Basic Attack** (original)\n',
      responseNormalAttack: 'Attack: {ATTACK}\n',
      responseNormalCircle: 'AoE Radius: {AOE RADIUS} (Area: {AOE AREA})\n',
      responseNormalRect: 'AoE Range: {AOE W}×{AOE L} (Area: {AOE AREA})\n',
    },
  ],

  EMBED_FOOTER: 'Information contributed by AoW players.',
  NO_INFO: 'I have no information for “{TEXT}”',
  NO_COMMENT: 'I have no comment!',

  TROOPS_ALIASES: [
    // first item is the correct spelling, the rest alternate spellings
    ['infantry'],
    ['archers', 'archer'],
    ['iron guards', 'iron guard'],
    ['hell jailers', 'hell jailer'],
    ['bomber'],
    ['catapult', 'cat'],
    ['fire mage', 'fm'],
    ['bandits', 'bandit'],
    ['ogre warrior', 'ogre'],
    ['ghost assassins', 'ghost assassin', 'ga'],
    ['magic apprentice', 'apprentice', 'ma'],
    ['viking warrior', 'viking'],
    ['ice mage', 'im'],
    ['scholar'],
    ['inquisitor', 'inquisitors', 'inq'],
    ['undead soldier', 'undead soldiers', 'undead'],
    ['harbinger of fire', 'harbingers of fire', 'hof'],
    ['paladin', 'paladins'],
    ['ballista'],
    ['goblikazes', 'goblikaze', 'kazes'],
    ['cactuses', 'cactus', 'cacti'],
    ['necromancer', 'necro'],
    ['skeleton'],
    ['pilgrims', 'pilgrim'],
    ['yasha'],
    ['priest mage', 'pm'],
    ['soul hunter', 'sh'],
    ['templar knight', 'tk'],
    ['peltasts', 'peltast', 'pelts', 'pelt'],
    ['brawlers', 'brawler'],
    ['taurus witcher', 'taurus witchers', 'tw'],
    ['voodoo dolls', 'voodoo doll', 'voodoo'],
    ['pumpkin guard', 'pg'],
    ['dark witch', 'dw'],
    ['nun', 'nuns'],
    ['pirate ship', 'ps'],
    ['pirate', 'pirates'],
    ['demon'],
    ['beast master', 'bm'],
    ['the beast partner', 'beast partner', 'bear'],
    ['witchcraft totem', 'wt'],
    ['meteor golem', 'mg'],
    ['frost archers', 'frost archer', 'fa', 'fas'],
    ['sacred swordsman', 'ss', 'swordsman'],
    ['rhino knight', 'rk'],
    ['pharaoh'],
    ['stone golem', 'sg'],
  ],

  TROOPS_DISPLAY_NAMES: {
    'infantry': 'Infantry',
    'archers': 'Archers',
    'iron guards': 'Iron Guards',
    'bomber': 'Bomber',
    'catapult': 'Catapult',
    'hell jailers': 'Hell Jailers',
    'fire mage': 'Fire Mage',
    'bandits': 'Bandits',
    'ogre warrior': 'Ogre Warrior',
    'ghost assassins': 'Ghost Assassins',
    'magic apprentice': 'Magic Apprentice',
    'viking warrior': 'Viking Warrior',
    'ice mage': 'Ice Mage',
    'scholar': 'Scholar',
    'inquisitor': 'inquisitor',
    'undead soldier': 'Undead Soldier',
    'harbinger of fire': 'Harbinger of Fire',
    'paladin': 'Paladin',
    'ballista': 'Ballista',
    'goblikazes': 'goblikazes',
    'cactuses': 'Cactuses',
    'necromancer': 'Necromancer',
    'skeleton': 'Skeleton',
    'pilgrims': 'Pilgrims',
    'yasha': 'Yasha',
    'priest mage': 'Priest Mage',
    'soul hunter': 'Soul Hunter',
    'templar knight': 'Templar Knight',
    'peltasts': 'Peltasts',
    'brawlers': 'Brawlers',
    'taurus witcher': 'Taurus Witcher',
    'voodoo dolls': 'Voodoo Dolls',
    'pumpkin guard': 'Pumpkin Guard',
    'dark witch': 'Dark Witch',
    'nun': 'Nun',
    'pirate ship': 'Pirate Ship',
    'pirate': 'Pirate',
    'demon': 'Demon',
    'beast master': 'Beast Master',
    'the beast partner': 'The Beast Partner',
    'witchcraft totem': 'Witchcraft Totem',
    'meteor golem': 'Meteor Golem',
    'frost archers': 'Frost Archers',
    'sacred swordsman': 'Sacred Swordsman',
    'rhino knight': 'Rhino Knight',
    'pharaoh': 'Pharaoh',
    'stone golem': 'Stone Golem',
  },

  HERO_ALIASES: [
    // first item is the correct spelling, the rest alternate spellings
    ['meta'],
    ['kelvins'],
    ['illum'],
    ['moshe'],
    ['hohenheim', 'hoh'],
    ['planck'],
    ['drake'],
    ['edward', 'black beard'],
    ['ivan'],
    ['harrison', 'clockman'],
    ['kriss', 'santa'],
    ['ainz'],
    ['robin hood', 'robin', 'hood'],
    ['apollo'],
    ['poseidon', 'pos'],
    ['azrael', 'grim reaper', 'reaper'],
    ['dante'],
    ['selene'],
    ['wukong', 'monkey king'],
    ['davison', 'davi'],
    ['minotaur'],
    ['green'],
    ['diana'],
    ['cassandra'],
    ['miller'],
    ['genichiro', 'sakura blade'],
    ['zeus'],
    ['dracula', 'drac'],
    ['chione'],
    ['nezha'],
    ['mephisto', 'meph'],
    ['horus'],
    ['arthur'],
    ['beowulf'],
    ['athena'],
    ['odin'],
    ['aly', 'nine-tail'],
    ['kraken'],
    ['jinn'],
    ['seondeok', 'seon'],
  ],
};
