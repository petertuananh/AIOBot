const { Discord, MessageEmbed } = require("discord.js");
const config = require('../../JSON/config.json');
const db = require("quick.db")
module.exports = {
    name: "warn",
    // aliases: [`mcount`, `membercount`],
    category: 'Moderation',
    description: "Warn someone!",
    cooldown: 5,
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["MANAGE_CHANNELS"],
    run: async (client, message, args, prefix) => {
    
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.channel.send(":x: You must have admin perms to use this command!")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      // return message.channel.send(":x: Please Mention the person to who you want to warn - warn @mention <reation>")
      const helpEmbed = new MessageEmbed()
        		.setColor('RANDOM')
        		.setTitle(`:x: Please mention the user! Ex: warn @mention <reason>`)
            .setImage(db.get(`banner-${message.guild.id}`))
        		.setFooter("Requested by @" + message.author.username);
			return message.reply({ embeds: [helpEmbed] })
    }
    
    if(message.mentions.users.first().bot) {
      // return message.channel.send(":x: You can not warn bots")
      const helpEmbed = new MessageEmbed()
        		.setColor('RANDOM')
        		.setTitle(`:x: You can not warn bots`)
            .setImage(db.get(`banner-${message.guild.id}`))
        		.setFooter("Requested by @" + message.author.username);
			return message.reply({ embeds: [helpEmbed] })
    }
    
    if(message.author.id === user.id) {
      // return message.channel.send(":x: You can not warn yourself")
      const helpEmbed = new MessageEmbed()
        		.setColor('RANDOM')
        		.setTitle(`:x: You can not warn yourself`)
            .setImage(db.get(`banner-${message.guild.id}`))
        		.setFooter("Requested by @" + message.author.username);
			return message.reply({ embeds: [helpEmbed] })
    }
    
    // if(user.id === message.guild.owner.id) {
    //   return message.channel.send("You jerk, how you can warn server owner -_-")
    // }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      // return message.channel.send(":x: Please provide reason to warn - warn @mention <reason>")
      const helpEmbed = new MessageEmbed()
        		.setColor('RANDOM')
        		.setTitle(`:x: Please provide reason to warn - warn @mention <reason>`)
            .setImage(db.get(`banner-${message.guild.id}`))
        		.setFooter("Requested by @" + message.author.username);
			return message.reply({ embeds: [helpEmbed] })
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
      // return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
      const helpEmbed = new MessageEmbed()
        		.setColor('RANDOM')
        		.setTitle(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
            .setImage(db.get(`banner-${message.guild.id}`))
        		.setFooter("Requested by @" + message.author.username);
			return message.reply({ embeds: [helpEmbed] })
    }
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      // await message.channel.send(`:white_check_mark: You warned **${message.mentions.users.first().username}** for ${reason}`)
      const helpEmbed = new MessageEmbed()
        		.setColor('RANDOM')
        		.setTitle(`:white_check_mark: You warned **${message.mentions.users.first().username}** for ${reason}`)
            .setImage(db.get(`banner-${message.guild.id}`))
        		.setFooter("Requested by @" + message.author.username);
			await message.reply({ embeds: [helpEmbed] })
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      // await message.channel.send(`:white_check_mark: You warned **${message.mentions.users.first().username}** for ${reason}`)
      const helpEmbed = new MessageEmbed()
        		.setColor('RANDOM')
        		.setTitle(`:white_check_mark: You warned **${message.mentions.users.first().username}** for ${reason}`)
            .setImage(db.get(`banner-${message.guild.id}`))
        		.setFooter("Requested by @" + message.author.username);
			await message.reply({ embeds: [helpEmbed] })
    }
    
  
  } 
}
