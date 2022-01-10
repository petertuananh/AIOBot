const { MessageEmbed, Discord } = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
  name : "avatar",
  aliases: ['sav', 'av', 'pfp'],
  category: 'Utility',
  cooldown: 5,
  description: "Show user avatar",
//   UserPerms: ["SEND_MESSAGES"],
//   BotPerms: ["SEND_MESSAGES"],
  // premiumOnly: true,
  run : async(client, message, args, prefix) => {
        // const embed = new Discord.MessageEmbed()
 
        if(!message.mentions.users.first()){
            // const embed = new MessageEmbed()
            // .setTitle('"Your Avatar:"')
            // .setImage(message.author.displayAvatarURL())
            // .setDescription('"This is your avatar."')
            // .setColor("RANDOM")

            // message.channel.send(`${message.author.displayAvatarURL()}`)
            const helpEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`This is your avatar!`)
            .setImage(message.author.displayAvatarURL() + "?size=2048")
            // .displayAvatarURL({ format: 'png', size: 480 })
            .setFooter("Requested by @" + message.author.username);
            message.reply({ embeds: [helpEmbed] })





        }else{
            const user = message.mentions.users.first()
            const helpEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`This is ${user.tag}'s avatar!`)
            .setImage(user.displayAvatarURL() + "?size=2048")
            // .displayAvatarURL({ format: 'png', size: 480 })
            .setFooter("Requested by @" + message.author.username);
            message.reply({ embeds: [helpEmbed] })
        }
    }
}