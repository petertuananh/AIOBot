const client = require('discord.js');
const config = require('../../JSON/config.json');
const { MessageEmbed } = require('discord.js');
const arrayOfStatus = [
    `https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dice-1.svg/557px-Dice-1.svg.png`,
    `https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/1200px-Dice-2-b.svg.png`,
    `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/836px-Dice-3-b.svg.png`,
    `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/1200px-Dice-4-b.svg.png`,
    `https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/2048px-Dice-5-b.svg.png`,
    `https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/768px-Dice-6-b.svg.png`,
  ]
module.exports = {
    name: "dice",
    description: "dice",
    
    execute: async (client, message, args, PREFIX) => {
        try{

        //    message.reply(`${arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)]}`)
           const PEmbed = new MessageEmbed()
                .setColor('RANDOM')
                .setImage(`${arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)]}`)
                .setFooter("Requested by @" + message.author.username);
            return message.reply({ embeds: [PEmbed] })
        }catch{
        return;
            }
        }
        }

    