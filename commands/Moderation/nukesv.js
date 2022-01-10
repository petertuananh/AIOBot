const Discord = require("discord.js");
const ms = require("ms")
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    name: "delallcn",
    // aliases: [""],
    cooldown: 5,
    description: "Delete all channel!",
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],
    category: 'Moderation',
    run: async (client, message, args, prefix) => {
        if (message.author.id == message.guild.ownerId){
        
        message.guild.channels.cache.forEach(async (channel, id) => {
            try{
            channel.delete()
            }catch{
                const Embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:x: I can't nuke this server!`)
        .setFooter("Requested by @" + message.author.username);
          return message.reply({ embeds: [Embed] })  
            }
        })
    
        }else{
            const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:x: Only owner can use this command!`)
        .setFooter("Requested by @" + message.author.username);
          return message.reply({ embeds: [embed] })  
        }
    }
}