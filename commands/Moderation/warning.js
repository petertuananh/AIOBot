const db = require("quick.db")
const config = require('../../JSON/config.json');
const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
    name: "warnings",
    // aliases: [`mcount`, `membercount`],
    category: 'Moderation',
    description: "See user's warnings!",
    cooldown: 5,
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["MANAGE_CHANNELS"],
    run: async (client, message, args, prefix) => {
    const user = message.mentions.members.first() || message.author
    
  
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    
    if(warnings === null) warnings = 0;
    
    
    // message.channel.send(`${user} have **${warnings}** warning(s)`)
    const helpEmbed = new MessageEmbed()
        		.setColor('RANDOM')
        		.setTitle(`Warnings:`)
            .setDescription(`${message.mentions.members.first()} have **${warnings}** warning(s)`)
            .setImage(db.get(`banner-${message.guild.id}`))
        		.setFooter("Requested by @" + message.author.username);
			await message.reply({ embeds: [helpEmbed] })
  
  
  }
}