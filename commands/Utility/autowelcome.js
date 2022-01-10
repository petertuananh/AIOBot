const { MessageEmbed } = require('discord.js');
const { on } = require('events');
const db = require('quick.db')
const config = require('../../JSON/config.json');
const axios = require("axios");
module.exports = {
  name : "autowelcome",
  aliases : ['awc', 'setwelcome'],
  category: 'Utility',
  cooldown: 5,
  description: "Auto mode to announce welcome",
  UserPerms: ["ADMINISTRATOR"],
  BotPerms: ["ADMINISTRATOR"],
  premiumOnly: true,
  run : async(client, message, args, prefix) => {

    const welcomeChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

    const errorWelcome = new MessageEmbed()
    .setColor("RED")
    .setAuthor(`WELCOME ❌`, client.user.displayAvatarURL())
    .setThumbnail(db.get(`thumb-${message.guild.id}`))
    .addField(`Reason:`, `Welcome channel not specified`, false)
    .addField(`Usage:`, `${prefix}autowelcome #[channel] [welcome img link/default/none]`, false)
    .setTimestamp()
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setImage(db.get(`banner-${message.guild.id}`))

    if (!welcomeChannel) 
    return message.channel.send({ embeds: [errorWelcome] })

    await db.set(`autowelcome-${message.guild.id}`, welcomeChannel.id);
    if (!args[1]){
      const Welcome = new MessageEmbed()
    .setColor("RED")
    .setAuthor(`WELCOME ❌`, client.user.displayAvatarURL())
    .setThumbnail(db.get(`thumb-${message.guild.id}`))
    .addField(`Reason:`, `Welcome image not specified`, false)
    .addField(`Usage:`, `${prefix}autowelcome #[channel] [welcome img link/default/none]`, false)
    .setTimestamp()
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setImage(db.get(`banner-${message.guild.id}`))
    return message.channel.send({ embeds: [Welcome] })
    }
      await db.set(`welcome-${message.guild.id}`, args[1]);

    // if (args[1] == `default`){
    //   const ok = new MessageEmbed()
    //     .setColor("GREEN")
    //     .setAuthor(`WELCOME ✅`, client.user.displayAvatarURL())
    //     .setThumbnail(db.get(`thumb-${message.guild.id}`))
    //     .setDescription(`The welcome notification channel has been set as ${welcomeChannel.name}`)
    //     .setTimestamp()
    //     .setImage(config.welcomeimg)
    //     .setFooter(client.user.username, client.user.displayAvatarURL())
    // message.channel.send({ embeds: [ok] })
    //   await db.set(`welcome-${message.guild.id}`, config.welcomeimg);
    // }
    // if (args[1] == `none`){
    //   const success = new MessageEmbed()
    //     .setColor("GREEN")
    //     .setAuthor(`WELCOME ✅`, client.user.displayAvatarURL())
    //     .setThumbnail(db.get(`thumb-${message.guild.id}`))
    //     .setDescription(`The welcome notification channel has been set as ${welcomeChannel.name}`)
    //     .setTimestamp()
    //     .setImage(args[1])
    //     .setFooter(client.user.username, client.user.displayAvatarURL())
    //     // .setImage(args[0])

    // return message.channel.send({ embeds: [success] })
    // }

      
    // try{
    const successWelcome = new MessageEmbed()
        .setColor("GREEN")
        .setAuthor(`WELCOME ✅`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
        .setDescription(`The welcome notification channel has been set as ${welcomeChannel.name}`)
        .setTimestamp()
        .setImage(args[1])
        .setFooter(client.user.username, client.user.displayAvatarURL())
        // .setImage(args[0])

    message.channel.send({ embeds: [successWelcome] })
    // }catch{
    //   const welcome = new MessageEmbed()
    // .setColor("RED")
    // .setAuthor(`WELCOME ❌`, client.user.displayAvatarURL())
    // .setThumbnail(db.get(`thumb-${message.guild.id}`))
    // .addField(`Reason:`, `Wrong img`, false)
    // .addField(`Usage:`, `${prefix}autowelcome #[channel] [welcome img link/default/none]`, false)
    // .setTimestamp()
    // .setFooter(client.user.username, client.user.displayAvatarURL())
    // .setImage(db.get(`banner-${message.guild.id}`))
    // return message.channel.send({ embeds: [welcome] })
    // }

  }
}