const db = require("quick.db")
const { Discord, MessageEmbed } = require("discord.js");

const config = require('../../JSON/config.json');
module.exports = {
    name: "resetwarn",
    // aliases: [`mcount`, `membercount`],
    category: 'Moderation',
    description: "Reset user's warn!",
    cooldown: 5,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["MANAGE_CHANNELS"],
    run: async (client, message, args, prefix) => {
    
    
    if(!message.member.permissions.has("ADMINISTRATOR")) {
      const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:x: You must have Administrator perms to reset warns!`)
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter("Requested by @" + message.author.username);
          return message.reply({ embeds: [helpEmbed] })
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      const helpEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`:x: Must mention the user!`)
      .setImage(db.get(`banner-${message.guild.id}`))
      .setFooter("Requested by @" + message.author.username);
        return message.reply({ embeds: [helpEmbed] })
    }
    
    if(message.mentions.users.first().bot) {
      const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:x: Bot are not allowed to have warnings`)
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter("Requested by @" + message.author.username);
          return message.reply({ embeds: [helpEmbed] })
    }
    
    if(message.author.id === user.id) {
      const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:x: You are not allowed to reset your warnings`)
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter("Requested by @" + message.author.username);
          return message.reply({ embeds: [helpEmbed] })
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.mentions.users.first().username} do not have any warnings`)
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter("Requested by @" + message.author.username);
          return message.reply({ embeds: [helpEmbed] })
    }
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    // user.send(`:white_check_mark: Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`)
    const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:white_check_mark: Reseted all warnings of ${message.mentions.users.first().username}`)
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter("Requested by @" + message.author.username);
          await message.reply({ embeds: [helpEmbed] })
    
  
    
}
}