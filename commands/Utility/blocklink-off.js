const { MessageEmbed } = require('discord.js');
const { on } = require('events');
const db = require('quick.db')
const config = require('../../JSON/config.json');
const axios = require("axios");
module.exports = {
  name : "antilink-off",
//   aliases : ['awc', 'setwelcome'],
  category: 'Utility',
  cooldown: 5,
  description: "Disable anti send link!",
  UserPerms: ["ADMINISTRATOR"],
  BotPerms: ["ADMINISTRATOR"],
  premiumOnly: true,
  run : async(client, message, args, prefix) => {


    // await db.set(`banner-${message.guild.id}`, args[0]);
    
    db.delete(`blockLink.${message.channel.id}`);
    const successWelcome = new MessageEmbed()
        .setColor("GREEN")
        .setAuthor(`[ANTI-LINK] ✅`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`banner-${message.guild.id}`))
        .setDescription(`Anti-link mode: off`)
        .setTimestamp()
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter(client.user.username, client.user.displayAvatarURL())
        // .setImage(args[0])

    message.channel.send({ embeds: [successWelcome] })
    
    
  }
}