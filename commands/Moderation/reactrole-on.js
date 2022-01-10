const { MessageEmbed } = require('discord.js');
const { on } = require('events');
const db = require('quick.db')
const config = require('../../JSON/config.json');
const axios = require("axios");
module.exports = {
  name : "reactrole-on",
//   aliases : ['awc', 'setwelcome'],
  category: 'Utility',
  cooldown: 5,
  description: "Set custom bot banner per command!",
  UserPerms: ["ADMINISTRATOR"],
  BotPerms: ["ADMINISTRATOR"],
  premiumOnly: true,
  run : async(client, message, args, prefix) => {


    // await db.set(`banner-${message.guild.id}`, args[0]);
    const Welcome = new MessageEmbed()
      .setColor("RED")
      .setAuthor(`[BOT] ❌`, client.user.displayAvatarURL())
      .setThumbnail(db.get(`thumb-${message.guild.id}`))
      .addField(`Reason:`, `Message ID not specified`, false)
      .addField(`Usage:`, `${prefix}reactrole-on [message ID] [role ID] [emoji]`, false)
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setImage(db.get(`banner-${message.guild.id}`))


    const welcome = new MessageEmbed()
    .setColor("RED")
    .setAuthor(`[BOT] ❌`, client.user.displayAvatarURL())
    .setThumbnail(db.get(`thumb-${message.guild.id}`))
    .addField(`Reason:`, `Role ID not specified`, false)
    .addField(`Usage:`, `${prefix}reactrole-on [message ID] [role ID] [emoji]`, false)
    .setTimestamp()
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setImage(db.get(`banner-${message.guild.id}`))
    const embed = new MessageEmbed()
    .setColor("RED")
    .setAuthor(`[BOT] ❌`, client.user.displayAvatarURL())
    .setThumbnail(db.get(`thumb-${message.guild.id}`))
    .addField(`Reason:`, `Emoji not specified`, false)
    .addField(`Usage:`, `${prefix}reactrole-on [message ID] [role ID] [emoji]`, false)
    .setTimestamp()
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setImage(db.get(`banner-${message.guild.id}`))
    if (!args[0]){
    return message.channel.send({ embeds: [Welcome] })
    }
    if (!args[1]){
    return message.channel.send({ embeds: [welcome] })
    }
    if (!args[2]){
    return message.channel.send({ embeds: [embed] })
    }
    db.set(`messagereact`, args[0]);
    db.set(`reactrole`, args[1]);
    db.set(`iconreact`, args[2]);
    
    const successWelcome = new MessageEmbed()
        .setColor("GREEN")
        .setAuthor(`[BOT] ✅`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`banner-${message.guild.id}`))
        .setDescription(`React role mode has been set!`)
        .setTimestamp()
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter(client.user.username, client.user.displayAvatarURL())
        // .setImage(args[0])

    message.channel.send({ embeds: [successWelcome] })
    
    
  }
}