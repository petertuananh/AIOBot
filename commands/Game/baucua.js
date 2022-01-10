const client = require('discord.js');
const config = require('../../JSON/config.json');
const { MessageEmbed } = require('discord.js');
const arrayOfStatus = [
    `https://cdn.mtsa.xyz/game/baucua/tom.png`,
    `https://cdn.mtsa.xyz/game/baucua/ho.png`,
    `https://cdn.mtsa.xyz/game/baucua/ga.png`,
    `https://cdn.mtsa.xyz/game/baucua/cua.png`,
    `https://cdn.mtsa.xyz/game/baucua/ca.png`,
    `https://cdn.mtsa.xyz/game/baucua/bau.png`,
  ]
module.exports = {
    name: "baucua",
    description: "dice",
    
    execute: async (client, message, args, PREFIX) => {
        try{

        //    message.reply(`${arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)]}`)
           const PEmbed = new MessageEmbed()
                .setColor('RANDOM')
                .setImage(`${arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)]}`)
                // .setImage(`${arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)]}`)
                // .setImage(`${arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)]}`)
                .setFooter("Requested by @" + message.author.username);
            return message.reply({ embeds: [PEmbed] })
        }catch{
        return;
            }
        }
        }

    