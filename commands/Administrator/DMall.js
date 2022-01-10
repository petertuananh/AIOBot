const { MessageEmbed } = require('discord.js')
const { inspect } = require('util')
const config = require('../../JSON/config.json');
module.exports = {
    name: 'dmall',
    // aliases: ['evaluates'],
    cooldown: 5,
    category: 'Administrator',
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    description: 'Send message to all member!',
    ownerOnly: true,
    run: async (client, message, args, prefix) => {
        if (!args[0]) {
            message.channel.send(`:x: Pls type the message!`)
        }else{
            message.guild.members.cache.forEach(member => {
            try{
                member.send(`${args.join(" ")}`)
            }catch{
                return;
            }
    
            });
        }
    }
}