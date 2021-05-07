/* eslint-disable max-len */

const fs = require('fs');
const path = require('path');

const SPLASH = fs.readFileSync(path.resolve(__dirname, 'splash.md'), 'utf8');
const GREETING = fs.readFileSync(path.resolve(__dirname, 'greeting.md'), 'utf8');

module.exports = {
  SPLASH: SPLASH,
  GREETING: GREETING,
  EMBED_FOOTER: '資訊由AoW玩家提供。',

  NO_INFO: '我沒有關於「{TEXT}」的訊息。',
  NO_COMMENT: '我不予置評！',

  TROOPS_ALIASES: [
    // first item is the correct spelling, the rest alternate spellings
    ['meta'],
    ['infantry', '步兵'],
    ['archers', 'archer'],
    ['iron guards', 'iron guard', '鐵衛'],
    ['hell jailers', 'hell jailer', '獄卒'],
    ['bomber'],
    ['catapult'],
    ['fire mage', 'fm', '火法師'],
    ['bandits', 'bandit'],
    ['ogre warrior', 'ogre'],
    ['ghost assassins', 'ghost assassin', 'ga'],
    ['magic apprentice', 'apprentice', 'ma'],
    ['viking warrior'],
    ['ice mage', 'im', '寒冰法師'],
    ['scholar'],
    ['inquisitor', 'inquisitors'],
    ['undead soldier', 'undead soldiers', 'undead', '夜魔衛兵', '夜魔'],
    ['harbinger of fire', 'harbingers of fire', 'hof', '聖火法師'],
    ['paladin', 'paladins', '神盾兵'],
    ['ballista'],
    ['goblikazes', 'goblikaze', 'kazes'],
    ['cactuses', 'cactus', 'cacti'],
    ['necromancer', 'necro'],
    ['pilgrims', 'pilgrim', '巡禮者'],
    ['yasha'],
    ['priest mage', 'pm'],
    ['soul hunter', 'sh'],
    ['templar knight', 'tk'],
    ['peltasts', 'peltast', 'pelts', 'pelt', '投茅者'],
    ['brawlers', 'brawler', '爭鬥者'],
    ['taurus witcher', 'taurus witchers', 'tw'],
    ['voodoo dolls', 'voodoo doll', 'voodoo', '巫毒娃娃', '巫毒'],
    ['pumpkin guard', 'pg', '南瓜守衛'],
    ['dark witch', 'dw', '黑魔女'],
    ['nun', 'nuns', '修女'],
    ['pirate ship', 'ps', '海盜船'],
    ['pirate', '海盜'],
    ['demon'],
    ['beast master', 'bm'],
    ['beast partner'],
    ['witchcraft totem', 'wt'],
    ['meteor golem', 'mg', '幽靈隕石', '隕石'],
    ['frost archers', 'frost archer', 'fa', 'fas'],
    ['sacred swordsman', 'ss', 'swordsman'],
    ['rhino knight', 'rk'],
    ['pharoah'],
    ['stone golem', 'sg', '岩石巨人', '岩石'],
  ],

  TROOPS_DISPLAY_NAMES: {
    'meta': 'meta',
    'infantry': '步兵',
    'infantry': 'Infantry',
    'archers': 'Archers',
    'iron guards': '鐵衛',
    'bomber': 'Bomber',
    'catapult': 'Catapult',
    'hell jailers': '獄卒',
    'fire mage': '火法師',
    'bandits': 'Bandits',
    'ogre warrior': 'Ogre Warrior',
    'ghost assassins': 'Ghost Assassins',
    'magic apprentice': 'Magic Apprentice',
    'viking warrior': 'Viking Warrior',
    'ice mage': '寒冰法師',
    'scholar': 'Scholar',
    'inquisitor': 'inquisitor',
    'undead soldier': '夜魔衛兵',
    'harbinger of fire': '聖火法師',
    'paladin': '神盾兵',
    'ballista': 'Ballista',
    'goblikazes': '自爆哥布林',
    'cactuses': 'Cactuses',
    'necromancer': 'Necromancer',
    'skeleton': 'Skeleton',
    'pilgrims': '巡禮者',
    'yasha': 'Yasha',
    'priest mage': '聖術士',
    'soul hunter': 'Soul Hunter',
    'templar knight': 'Templar Knight',
    'peltasts': '投茅者',
    'brawlers': '爭鬥者',
    'taurus witcher': '牛角巫師',
    'voodoo dolls': '巫毒娃娃',
    'pumpkin guard': '南瓜守衛',
    'dark witch': '黑魔女',
    'nun': '修女',
    'pirate ship': '海盜船',
    'pirate': '海盜',
    'demon': 'Demon',
    'beast master': 'Beast Master',
    'beast partner': 'The Beast Partner',
    'witchcraft totem': '巫術圖騰',
    'meteor golem': '幽靈隕石',
    'frost archers': '冰霜弓箭手',
    'sacred swordsman': 'Sacred Swordsman',
    'rhino knight': 'Rhino Knight',
    'pharoah': 'Pharoah',
    'stone golem': '岩石巨人',
  },

  COMMAND_RELOAD_DESC: '重載指令。',
  COMMAND_RELOAD_NOT_FOUND: '沒有名稱或別名是「{TEXT}」的指令',

  COMMAND_HELP_DESC: '顯示某特定指令的協助訊息。',
  COMMAND_HELP_USAGE: '[指令名稱]',
  COMMAND_HELP_ALIASES: ['h', 'commands', '幫助'],
  COMMAND_HELP_HELP: '鍵入\`{PREFIX}help <指令名稱>\`以取得某指令的相關訊息。\n\n**指令名稱；**\n{COMMANDS}',
  COMMAND_HELP_LABEL_ALIASES: '別名',
  COMMAND_HELP_LABEL_DESC: '敘述',
  COMMAND_HELP_LABEL_USAGE: '使用方法',
  COMMAND_HELP_LABEL_EXAMPLE: '範例',
  COMMAND_HELP_NOT_FOUND: '此指令不存在。',

  COMMAND_BUILDING_DESC: '關於軍營建設的秘訣',
  COMMAND_BUILDING_ALIASES: ['軍營'],
  COMMAND_BUILDING_FILES: [
    path.resolve(__dirname, 'building', 'building1.json'),
    path.resolve(__dirname, 'building', 'building2.json'),
    path.resolve(__dirname, 'building', 'building3.json'),
  ],

  COMMAND_FORMATION_DESC: '軍隊陣形的技巧',
  COMMAND_FORMATION_USAGE: '基本|破關|刷金',
  COMMAND_FORMATION_ALIASES: ['form', '陣形'],
  COMMAND_FORMATION_MAP: {
    // 'beginner': path.resolve(__dirname, 'formation', 'beginner.json'),
    // 'basic': path.resolve(__dirname, 'formation', 'beginner.json'),
    // '基本': path.resolve(__dirname, 'formation', 'beginner.json'),
    // 'level': path.resolve(__dirname, 'formation', 'leveling.json'),
    // 'leveling': path.resolve(__dirname, 'formation', 'leveling.json'),
    // '破關': path.resolve(__dirname, 'formation', 'leveling.json'),
    '8k': path.resolve(__dirname, 'formation', '8k.json'),
    '8000': path.resolve(__dirname, 'formation', '8k.json'),
    'farming': path.resolve(__dirname, 'formation', '8k.json'),
    '刷金': path.resolve(__dirname, 'formation', '8k.json'),
  },

  COMMAND_WOF_ALIASES: ['wheel', '轉盤'],
  COMMAND_WOF_PLUS: '輪盤共轉{SPIN_COUNT}次時，得到{HIT_RANGE}{UNIT}或以上的的機率是{PROB}%。',
  COMMAND_WOF_RANGE: '輪盤共轉{SPIN_COUNT}次時，得到{HIT_RANGE_1}到{HIT_RANGE_2}{UNIT}的機率是{PROB}%。',
  COMMAND_WOF_EXACT: '輪盤共轉{SPIN_COUNT}次時，得到正好{HIT_RANGE}{UNIT}的機率是{PROB}%。\n{LOG}',
  COMMAND_WOF_EXACT_LOG: '{PROB}%機率得到{HIT_1}×{QTY_1}+{HIT_2}×{QTY_2}{UNIT}\n',
  COMMAND_WOF_MODE: '輪盤共轉{SPIN_COUNT}次時的__眾數__是{TOTAL_QTY}{UNIT}({PROB}% 機率)。',
  COMMAND_WOF_VOUCHERS: ['voucher', 'vouchers'],
  COMMAND_WOF_SHARDS: ['hero', 'shards', 'shard', '碎片'],
  COMMAND_WOF_UNIT_VOUCHERS: '張兌換卷',
  COMMAND_WOF_UNIT_SHARDS: '個碎片',

  COMMAND_HERO_DESC: '顯示英雄的相關資訊。',
  COMMAND_HERO_USAGE: '阿狸|賽勒涅',
  COMMAND_HERO_ALIASES: ['英雄'],
  COMMAND_HERO_MAP: {
    'meta': path.resolve(__dirname, 'heroes', 'meta.json'),
    'aly': path.resolve(__dirname, 'heroes', 'aly.json'),
    '阿狸': path.resolve(__dirname, 'heroes', 'aly.json'),
    'selene': path.resolve(__dirname, 'heroes', 'selene.json'),
    '月神': path.resolve(__dirname, 'heroes', 'selene.json'),
    '賽勒涅': path.resolve(__dirname, 'heroes', 'selene.json'),
  },

  COMMAND_TROOPS_DESC: '顯示部隊的相關資訊。',
  COMMAND_TROOPS_USAGE: '<部隊名稱>',
  COMMAND_TROOPS_ALIASES: ['士兵', '部隊'],
  COMMAND_TROOPS_BLACKLIST: 'infantry,iron guards,hell jailers,fire mage,viking warrior,scholar,templar knight',
  COMMAND_TROOPS_FILES: {
    'paladin': path.resolve(__dirname, 'troops', 'paladin.json'),
    'pilgrims': path.resolve(__dirname, 'troops', 'pilgrims.json'),
    'brawlers': path.resolve(__dirname, 'troops', 'brawlers.json'),
    'nun': path.resolve(__dirname, 'troops', 'nun.json'),
    'voodoo dolls': path.resolve(__dirname, 'troops', 'voodoo dolls.json'),
  },

  COMMAND_CURSE_DESC: '計算詛咒對敵方部隊的效能。',
  COMMAND_CURSE_USAGE: '<目標> <目標等級> [詛咒者] [詛咒者等級]',
  COMMAND_CURSE_USAGE_EXAMPLE: '\'岩石巨人\' 9 巫毒 8',
  COMMAND_CURSE_ALIASES: ['詛咒'],
  COMMAND_CURSE_VOODOO_CANNOT_BE_CURSED: '巫毒娃娃不能夠詛咒另一個巫毒娃娃。',
  COMMAND_CURSE_VOODOO: '詛咒者：巫毒娃娃（{VOODOO LEVEL}級）\n目標：{TARGET}（{TARGET LEVEL}級）\n詛咒成功率：{RATE}%\n最高傷害：{DAMAGE}（目標最高生命的{HEALTH PERCENTAGE}%）',

  COMMAND_PLUS_SEONDEOK_DESC: '計算善德對友軍的效能。',
  COMMAND_PLUS_SEONDEOK_USAGE: '[英雄等級] <部隊> [部隊等級]',
  COMMAND_PLUS_SEONDEOK_USAGE_EXAMPLE: '15 夜魔衛兵 9',
  COMMAND_PLUS_SEONDEOK_ALIASES: ['+seon', '+善德'],
  COMMAND_PLUS_SEONDEOK_INTRO: '當等級{TROOPS LEVEL}的{TROOPS}搭配等級{HERO LEVEL}的善德時，其效果如下。\n\n',
  COMMAND_PLUS_SEONDEOK_OPENING: '**8秒開局加成**\n',
  COMMAND_PLUS_SEONDEOK_OPENING_DMG: '傷害 = ({ATTACK} - 敵方護甲) + {ADD DAMAGE}\n  （等同約{EQUIV INCREASE}%攻擊加成）\n',
  COMMAND_PLUS_SEONDEOK_OPENING_AOE: '群傷半徑：{AOE RADIUS}（面積 {AOE AREA}）\n群傷：{AOE ATTACK}\n',
  COMMAND_PLUS_SEONDEOK_NORMAL: '\n**普通攻擊** (原始值)\n',
  COMMAND_PLUS_SEONDEOK_NORMAL_ATTACK: '攻擊：{ATTACK}\n',
  COMMAND_PLUS_SEONDEOK_NORMAL_CIRCLE: '群傷半徑：{AOE RADIUS}（面積 {AOE AREA}）\n',
  COMMAND_PLUS_SEONDEOK_NORMAL_RECT: '群傷範圍：{AOE W}x{AOE L}（面積 {AOE AREA}）\n',

  COMMAND_PLUS_SELENE_DESC: '計算賽勒涅對友軍的效能。',
  COMMAND_PLUS_SELENE_USAGE: '[英雄等級] <部隊> [部隊等級]',
  COMMAND_PLUS_SELENE_USAGE_EXAMPLE: '15 夜魔衛兵 9',
  COMMAND_PLUS_SELENE_ALIASES: ['+賽勒涅', '+月神'],
  COMMAND_PLUS_SELENE_INTRO: '當等級{TROOPS LEVEL}的{TROOPS}搭配等級{HERO LEVEL}的賽勒涅時，其效果如下。\n\n',
  COMMAND_PLUS_SELENE_OPENING: '**{DURATION}秒開局加成**\n',
  COMMAND_PLUS_SELENE_OPENING_ATK: '攻擊：{ATTACK}（{INCREASE}%加成）\n',
  COMMAND_PLUS_SELENE_OPENING_CURSED: '一個9級巫毒娃娃可造成的最高傷害：{DAMAGE}（最高生命的{HEALTH PERCENTAGE}%）\n',

  COMMAND_PLUS_ARTHUR_DESC: '計算亞瑟對友軍的效能。',
  COMMAND_PLUS_ARTHUR_USAGE: '[英雄等級] <部隊> [部隊等級]',
  COMMAND_PLUS_ARTHUR_USAGE_EXAMPLE: '15 投茅者 9',
  COMMAND_PLUS_ARTHUR_ALIASES: ['+亞瑟'],
  COMMAND_PLUS_ARTHUR_INTRO: '當等級{TROOPS LEVEL}的{TROOPS}搭配等級{HERO LEVEL}的亞瑟時，其效果如下。\n\n',
  COMMAND_PLUS_ARTHUR_PASSIVE: '免傷：{IMMUNITY PERCENTAGE}%\n',
  COMMAND_PLUS_ARTHUR_OPENING_CURSED: '一個9級巫毒娃娃可造成的最高傷害：{DAMAGE}（最高生命的{HEALTH PERCENTAGE}%）\n',
  COMMAND_PLUS_ARTHUR_NOT_HUMAN: '無效果。亞瑟的能力只對人族部隊有效。\n',
};
