const client = require('discord.js');
const { MessageEmbed } = require('discord.js');
const arrayOfStatus = [
    `https://i.pinimg.com/736x/8b/80/47/8b8047bf62aa9ec2c73b144a13f4c791.jpg`,
  ]
module.exports = {
    // name: "man",
    description: "man",
    
    execute: async (client, message, args, PREFIX) => {
        if(!message.channel.nsfw){
            const NEmbed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(':x: This command only use in nsfw channel!')
                .setFooter("Requested by @" + message.author.username);
            return message.reply({ embeds: [NEmbed] })
        }else{
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
        }

    