const config = require('../../JSON/config.json');
const { MessageEmbed, Discord } = require('discord.js')
const db = require('quick.db')
module.exports = {
  name : "say",
  aliases: ['speak'],
  category: 'Utility',
  cooldown: 5,
  description: "Say somethings",
  UserPerms: ["SEND_MESSAGES"],
  BotPerms: ["SEND_MESSAGES"],
  run : async(client, message, args, prefix) => {
      if (!args[0]) return;
      const msg =
      `${args.join(" ")}`;

      const helpEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setDescription(`<:message:929596897386180628> ${msg}`)
      message.channel.send({ embeds: [helpEmbed] })
  // message.channel.send(msg)
  message.delete({ timeout: 5000 })
    },
};