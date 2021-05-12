/* eslint-disable max-len */

const fs = require('fs');
const path = require('path');

const SPLASH = fs.readFileSync(path.resolve(__dirname, 'splash.md'), 'utf8');
const GREETING = fs.readFileSync(path.resolve(__dirname, 'greeting.md'), 'utf8');

module.exports = {
  SPLASH: SPLASH,
  GREETING: GREETING,
  EMBED_FOOTER: 'Information contributed by AoW players.',

  COMMAND_STATS_DESC: 'Show stats of a troops.',
  COMMAND_STATS_USAGE: '<troops name 1> [level] <troops name 2> <level>...',
  COMMAND_STATS_USAGE_EXAMPLE: 'archers 9 \'frost archers\' 8',
  COMMAND_STATS_ALIASES: ['stat'],
  COMMAND_STATS_HEADER: 'Level-{LEVEL} {TROOPS}',
  COMMAND_STATS_BASIC_HEADER: 'Basic',
  COMMAND_STATS_SKILL_HEADER: 'Skill',
  COMMAND_STATS_DM: 'Troops stats sent by DM',
  COMMAND_STATS_LABELS: {
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

  NO_INFO: 'I have no information for “{TEXT}”',
  NO_COMMENT: 'I have no comment!',

  TROOPS_ALIASES: [
    // first item is the correct spelling, the rest alternate spellings
    ['meta'],
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
    'meta': 'meta',
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

  COMMAND_RELOAD_DESC: 'Reloads a command.',
  COMMAND_RELOAD_NOT_FOUND: 'There is no command with name or alias of "{TEXT}"',
  COMMAND_CLEAR_DESC: '(DM-only) Delete bot\'s own messages (max 10).',
  COMMAND_CLEAR_ALIASES: [],
  COMMAND_HELP_DESC: 'Show help for a specified command..',
  COMMAND_HELP_USAGE: '[command name]',
  COMMAND_HELP_ALIASES: ['h', 'commands'],
  COMMAND_HELP_HELP: 'Type \`{PREFIX}help <command>\` to get more information about a specific command.\n\n**Commands available:**\n{COMMANDS}',
  COMMAND_HELP_LABEL_ALIASES: 'Aliases',
  COMMAND_HELP_LABEL_DESC: 'Description',
  COMMAND_HELP_LABEL_USAGE: 'Usage',
  COMMAND_HELP_LABEL_EXAMPLE: 'Example',
  COMMAND_HELP_NOT_FOUND: 'This command does not exist.',

  COMMAND_BUILDING_DESC: 'Tips for building your barrack.',
  COMMAND_BUILDING_ALIASES: [],
  COMMAND_BUILDING_FILES: [
    path.resolve(__dirname, 'building', 'building1.json'),
    path.resolve(__dirname, 'building', 'building2.json'),
    path.resolve(__dirname, 'building', 'building3.json'),
  ],

  COMMAND_FORMATION_DESC: 'Tips for army formation',
  COMMAND_FORMATION_USAGE: 'beginner|leveling|farming',
  COMMAND_FORMATION_ALIASES: ['form'],
  COMMAND_FORMATION_MAP: {
    'beginner': path.resolve(__dirname, 'formation', 'beginner.json'),
    'basic': path.resolve(__dirname, 'formation', 'beginner.json'),
    'level': path.resolve(__dirname, 'formation', 'leveling.json'),
    'leveling': path.resolve(__dirname, 'formation', 'leveling.json'),
    '8k': path.resolve(__dirname, 'formation', '8k.json'),
    '8000': path.resolve(__dirname, 'formation', '8k.json'),
    'farming': path.resolve(__dirname, 'formation', '8k.json'),
  },

  COMMAND_HH_DESC: 'Tips for honor hunting',
  COMMAND_HH_USAGE: 'beginner|cerberus|cyclops|\'spider queen\'',
  COMMAND_HH_ALIASES: ['honor hunting'],
  COMMAND_HH_MAP: {
    'beginner': path.resolve(__dirname, 'formation', 'hh_beginner.json'),
    'beginners': path.resolve(__dirname, 'formation', 'hh_beginner.json'),
    'basic': path.resolve(__dirname, 'formation', 'hh_beginner.json'),
    'cyclops': path.resolve(__dirname, 'formation', 'hh_cyclops.json'),
    'cerberus': path.resolve(__dirname, 'formation', 'hh_cerberus.json'),
  },

  COMMAND_WOF_ALIASES: ['wheel'],
  COMMAND_WOF_PLUS: 'The probability of getting {HIT_RANGE} or more {UNIT} in {SPIN_COUNT} spins is {PROB}%.',
  COMMAND_WOF_RANGE: 'The probability of getting {HIT_RANGE_1} to {HIT_RANGE_2} {UNIT} in {SPIN_COUNT} spins is {PROB}%.',
  COMMAND_WOF_EXACT: 'The probability of getting exactly {HIT_RANGE} {UNIT} in {SPIN_COUNT} spins is {PROB}%.\n{LOG}',
  COMMAND_WOF_EXACT_LOG: '{PROB}% probability of {HIT_1}×{QTY_1} + {HIT_2}×{QTY_2} {UNIT}\n',
  COMMAND_WOF_MODE: 'With {SPIN_COUNT} spins, the __mode__ is {TOTAL_QTY} {UNIT} ({PROB}% probability).',
  COMMAND_WOF_VOUCHERS: ['voucher', 'vouchers'],
  COMMAND_WOF_SHARDS: ['hero', 'shards', 'shard'],
  COMMAND_WOF_UNIT_VOUCHERS: 'vouchers',
  COMMAND_WOF_UNIT_SHARDS: 'shards',

  COMMAND_HERO_DESC: 'Information about heroes.',
  COMMAND_HERO_USAGE: 'aly|selene',
  COMMAND_HERO_ALIASES: [],
  COMMAND_HERO_MAP: {
    'meta': path.resolve(__dirname, 'heroes', 'meta.json'),
    'aly': path.resolve(__dirname, 'heroes', 'aly.json'),
    'selene': path.resolve(__dirname, 'heroes', 'selene.json'),
  },

  COMMAND_TROOPS_DESC: 'Information about troops.\n(meta, paladin, pilgrims, peltasts, brawlers, nun, voodoo dolls)',
  COMMAND_TROOPS_USAGE: '<troops name>',
  COMMAND_TROOPS_ALIASES: ['troop'],
  COMMAND_TROOPS_BLACKLIST: 'infantry,iron guards,hell jailers,fire mage,viking warrior,scholar,templar knight',
  COMMAND_TROOPS_FILES: {
    'meta': path.resolve(__dirname, 'troops', 'meta.json'),
    'paladin': path.resolve(__dirname, 'troops', 'paladin.json'),
    'pilgrims': path.resolve(__dirname, 'troops', 'pilgrims.json'),
    'peltasts': path.resolve(__dirname, 'troops', 'peltasts.json'),
    'brawlers': path.resolve(__dirname, 'troops', 'brawlers.json'),
    'nun': path.resolve(__dirname, 'troops', 'nun.json'),
    'voodoo dolls': path.resolve(__dirname, 'troops', 'voodoo dolls.json'),
  },

  COMMAND_CURSE_DESC: 'Calculate the effect of curse on troops.',
  COMMAND_CURSE_USAGE: '<target> <target level> [curser] [curser level]',
  COMMAND_CURSE_USAGE_EXAMPLE: '\'stone golem\' 9 voodoo 8',
  COMMAND_CURSE_ALIASES: [],
  COMMAND_CURSE_VOODOO_CANNOT_BE_CURSED: 'A Voodoo Dolls unit cannot curse another Voodoo Dolls unit.',
  COMMAND_CURSE_VOODOO: 'Curser: Voodoo Dolls (Level {VOODOO LEVEL})\nTarget: {TARGET} (Level {TARGET LEVEL})\nCurse Success Rate: {RATE}%\nMaximum Damage to Target: {DAMAGE} ({HEALTH PERCENTAGE}% of total health)',

  COMMAND_PLUS_SEONDEOK_DESC: 'Calculate the effect of Seondeok on troops.',
  COMMAND_PLUS_SEONDEOK_USAGE: '[hero level] <troops name> [troops level]',
  COMMAND_PLUS_SEONDEOK_USAGE_EXAMPLE: '15 \'undead soldier\' 9',
  COMMAND_PLUS_SEONDEOK_ALIASES: ['+seon'],
  COMMAND_PLUS_SEONDEOK_INTRO: 'When a level {TROOPS LEVEL} {TROOPS} is used with level {HERO LEVEL} Seondeok, the effect is as followed.\n\n',
  COMMAND_PLUS_SEONDEOK_OPENING: '**8-Second Opening Buff**\n',
  COMMAND_PLUS_SEONDEOK_OPENING_DMG: 'Damage = ({ATTACK} - *enemy unit\'s defense*) + {ADD DAMAGE}\n  *(about {EQUIV INCREASE}% attack increase)*\n',
  COMMAND_PLUS_SEONDEOK_OPENING_AOE: 'AoE Radius: {AOE RADIUS} (Area: {AOE AREA})\nAoE Attack: {AOE ATTACK}\n',
  COMMAND_PLUS_SEONDEOK_NORMAL: '\n**Basic Attack** (original)\n',
  COMMAND_PLUS_SEONDEOK_NORMAL_ATTACK: 'Attack: {ATTACK}\n',
  COMMAND_PLUS_SEONDEOK_NORMAL_CIRCLE: 'AoE Radius: {AOE RADIUS} (Area: {AOE AREA})\n',
  COMMAND_PLUS_SEONDEOK_NORMAL_RECT: 'AoE Range: {AOE W}×{AOE L} (Area: {AOE AREA})\n',

  COMMAND_PLUS_SELENE_DESC: 'Calculate the effect of Selene on troops.',
  COMMAND_PLUS_SELENE_USAGE: '[hero level] <troops name> [troops level]',
  COMMAND_PLUS_SELENE_USAGE_EXAMPLE: '15 \'undead soldier\' 9',
  COMMAND_PLUS_SELENE_ALIASES: [],
  COMMAND_PLUS_SELENE_INTRO: 'When a level {TROOPS LEVEL} {TROOPS} is used with level {HERO LEVEL} Selene, the effect is as followed.\n\n',
  COMMAND_PLUS_SELENE_OPENING: '**{DURATION}-Second Opening Buff**\n',
  COMMAND_PLUS_SELENE_OPENING_ATK: 'Attack: {ATTACK} ({INCREASE}% increase)\n',
  COMMAND_PLUS_SELENE_OPENING_CURSED: 'Maximum damage from a level 9 Voodoo Dolls: {DAMAGE} ({HEALTH PERCENTAGE}% of max health)\n',

  COMMAND_PLUS_ARTHUR_DESC: 'Calculate the effect of Arthur on troops.',
  COMMAND_PLUS_ARTHUR_USAGE: '[hero level] <troops name> [troops level]',
  COMMAND_PLUS_ARTHUR_USAGE_EXAMPLE: '15 \'peltasts\' 9',
  COMMAND_PLUS_ARTHUR_ALIASES: [],
  COMMAND_PLUS_ARTHUR_INTRO: 'When a level {TROOPS LEVEL} {TROOPS} is used with level {HERO LEVEL} Arthur, the effect is as followed.\n\n',
  COMMAND_PLUS_ARTHUR_PASSIVE: 'Damage Immunity: {IMMUNITY PERCENTAGE}%\nHealth Regen: {HEALTH REGEN} per second\n',
  COMMAND_PLUS_ARTHUR_OPENING_CURSED: 'Maximum damage from a level 9 Voodoo Dolls: {DAMAGE} ({HEALTH PERCENTAGE}% of max health)\n',
  COMMAND_PLUS_ARTHUR_NOT_HUMAN: 'No effect. Arthur\'s abilities only apply to Human troops.\n',
};
