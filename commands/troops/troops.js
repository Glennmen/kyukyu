const fs = require('fs');
const res = require('../../res/res');
const locale = res.locale;
const {literal} = require('../../helpers/literal');

module.exports = {
  name: 'troops',
  description: locale.COMMAND_TROOPS_DESC,
  usage: locale.COMMAND_TROOPS_USAGE,
  aliases: locale.COMMAND_TROOPS_ALIASES,
  args: true,
  async execute(msg, args) {
    const troopsName = res.findTroops(args[0]);
    const blackList = locale.COMMAND_TROOPS_BLACKLIST.split(',');

    if (blackList.includes(troopsName)) {
      msg.reply(locale.NO_COMMENT);
      return;
    }
    if (troopsName && locale.COMMAND_TROOPS_MAP.hasOwnProperty(troopsName)) {
      const embed = JSON.parse(
          fs.readFileSync(locale.COMMAND_TROOPS_MAP[troopsName])
      );
      if (!embed.embed.hasOwnProperty('footer')) {
        embed.embed['footer'] = {text: locale.EMBED_FOOTER};
      }
      msg.channel.send(embed);
    } else {
      msg.reply(
          literal(locale.NO_INFO, '{1}', args[0].trim())
      );
      return;
    }
  },
};
