const { MessageEmbed } = require('discord.js');
const { on } = require('events');
const db = require('quick.db')
const config = require('../../JSON/config.json');
const axios = require("axios");
module.exports = {
  name : "antilink-on",
//   aliases : ['awc', 'setwelcome'],
  category: 'Utility',
  cooldown: 5,
  description: "Block user send link in channel!",
  UserPerms: ["ADMINISTRATOR"],
  BotPerms: ["ADMINISTRATOR"],
  premiumOnly: true,
  run : async(client, message, args, prefix) => {


    // await db.set(`banner-${message.guild.id}`, args[0]);
    
    db.set(`blockLink.${message.channel.id}`, message.channel.id);
    const successWelcome = new MessageEmbed()
        .setColor("GREEN")
        .setAuthor(`[ANTI-LINK] ✅`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`banner-${message.guild.id}`))
        .setDescription(`Anti-link mode: on | Only Admin can send link!`)
        .setTimestamp()
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter(client.user.username, client.user.displayAvatarURL())
        // .setImage(args[0])

    message.channel.send({ embeds: [successWelcome] })
    
    
  }
}