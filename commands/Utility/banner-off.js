const { MessageEmbed } = require('discord.js');
const { on } = require('events');
const db = require('quick.db')
const config = require('../../JSON/config.json');
const axios = require("axios");
module.exports = {
  name : "banner-off",
//   aliases : ['awc', 'setwelcome'],
  category: 'Utility',
  cooldown: 5,
  description: "Set custom bot banner per command!",
  UserPerms: ["ADMINISTRATOR"],
  BotPerms: ["ADMINISTRATOR"],
  premiumOnly: true,
  run : async(client, message, args, prefix) => {

    db.delete(`banner-${message.guild.id}`);
    const successWelcome = new MessageEmbed()
        .setColor("GREEN")
        .setAuthor(`[BOT] ✅`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`banner-${message.guild.id}`))
        .setDescription(`Bot banner img has been removed!`)
        .setTimestamp()
        // .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter(client.user.username, client.user.displayAvatarURL())
        // .setImage(args[0])

    message.channel.send({ embeds: [successWelcome] })
  }
}