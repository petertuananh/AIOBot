const { MessageEmbed } = require('discord.js');
const { on } = require('events');
const db = require('quick.db')
const config = require('../../JSON/config.json');
const axios = require("axios");
module.exports = {
  name : "thumb-on",
//   aliases : ['awc', 'setwelcome'],
  category: 'Utility',
  cooldown: 5,
  description: "Set custom bot thumb per command!",
  UserPerms: ["ADMINISTRATOR"],
  BotPerms: ["ADMINISTRATOR"],
  premiumOnly: true,
  run : async(client, message, args, prefix) => {


    // await db.set(`thumb-${message.guild.id}`, args[0]);
    if (!args[0]){
      const Welcome = new MessageEmbed()
      .setColor("RED")
      .setAuthor(`[BOT] ❌`, client.user.displayAvatarURL())
      .setThumbnail(db.get(`thumb-${message.guild.id}`))
      .addField(`Reason:`, `Bot thumb img not specified`, false)
      .addField(`Usage:`, `${prefix}thumb-on [image link]`, false)
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setImage(db.get(`thumb-${message.guild.id}`))
    return message.channel.send({ embeds: [Welcome] })
    }else{
      
    db.set(`thumb-${message.guild.id}`, args[0]);
    const successWelcome = new MessageEmbed()
        .setColor("GREEN")
        .setAuthor(`[BOT] ✅`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
        .setDescription(`Bot thumb img has been set!`)
        .setTimestamp()
        .setImage(db.get(`thumb-${message.guild.id}`))
        .setFooter(client.user.username, client.user.displayAvatarURL())
        // .setImage(args[0])

    message.channel.send({ embeds: [successWelcome] })
    
    }
  }
}