const Discord = require("discord.js");
const ms = require("ms")
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    name: "deletechannel",
    aliases: ["delcn"],
    cooldown: 5,
    description: "Delete this channel!",
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["MANAGE_CHANNELS"],
    category: 'Moderation',
    run: async (client, message, args, prefix) => {
        try{
            message.channel.delete()
        }catch{
                const Embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:x: I can't nuke this channel!`)
        .setFooter("Requested by @" + message.author.username);
          return message.reply({ embeds: [Embed] })  
            }
    }
}