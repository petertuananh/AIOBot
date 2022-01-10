const { MessageEmbed } = require('discord.js');
const { on } = require('events');
const db = require('quick.db')
const config = require('../../JSON/config.json');
const axios = require("axios");
module.exports = {
  // name : "autochangerolecorle-on",
  aliases : ['atcgrc'],
  category: 'Utility',
  cooldown: 5,
  description: "Auto change role color!",
  UserPerms: ["ADMINISTRATOR"],
  BotPerms: ["ADMINISTRATOR"],
  premiumOnly: true,
  run : async(client, message, args, prefix) => {


    if (!args[0]){
      const wrong = new MessageEmbed()
        .setColor("RED")
        .setAuthor(`[ROLE] ✅`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`banner-${message.guild.id}`))
        .setDescription(`<:deny_topgg:915231851285717003> Wrong usage, ${prefix}.atcgrc <roleID>`)
        .setTimestamp()
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter(client.user.username, client.user.displayAvatarURL())
        // .setImage(args[0])

     return message.channel.send({ embeds: [wrong] })
    }else{
    
    db.set(`changerolecolorid`, args[0]);
    const successWelcome = new MessageEmbed()
        .setColor("GREEN")
        .setAuthor(`[ROLE] ✅`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`banner-${message.guild.id}`))
        .setDescription(`Auto chage role color turned on for <@${args[0]}>`)
        .setTimestamp()
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter(client.user.username, client.user.displayAvatarURL())
        // .setImage(args[0])

    message.channel.send({ embeds: [successWelcome] })
    }
    
  }
}