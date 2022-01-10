const { Discord, MessageEmbed } = require("discord.js");
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    name: "unmute",
    // aliases: [`mcount`, `membercount`],
    category: 'Moderation',
    description: "Unmute someone!",
    cooldown: 5,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["MANAGE_CHANNELS"],
    run: async (client, message, args, prefix) => {
    const user = message.mentions.members.first();

    if(!user) {
      // return message.channel.send("Please mention the member to who you want to mute")
      const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:x: Pls mention the user!`)
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter("Requested by @" + message.author.username);
          return message.reply({ embeds: [helpEmbed] })   
    }
    if(user.id === message.author.id) {
      // return message.channel.send("I won't mute you -_-");
      const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:x: You can't unmute yourself!`)
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter("Requested by @" + message.author.username);
          return message.reply({ embeds: [helpEmbed] })   
    }
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
 if(user.roles.cache.has(muterole)) {
      // return message.channel.send("Given User do not have mute role so what i am suppose to take")
      const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Unmuting....!`)
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter("Requested by @" + message.author.username);
          return message.reply({ embeds: [helpEmbed] })  
    }
    
    
    user.roles.remove(muterole, `Unmuted by ${message.author.username}`)
    
    // await message.channel.send(`**${message.mentions.users.first().username}** is unmuted`)
    const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:white_check_mark: ${message.mentions.users.first().username} is unmuted!`)
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter("Requested by @" + message.author.username);
         await message.reply({ embeds: [helpEmbed] })  
  }
};
