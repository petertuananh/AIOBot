const { MessageEmbed, Discord } = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
  name : "snipe",
  aliases: ['asn'],
  category: 'Utility',
  cooldown: 5,
  description: "Snipe a deleted message",
  UserPerms: ["SEND_MESSAGES"],
  BotPerms: ["MANAGE_MESSAGES"],
  run : async(client, message, args, prefix) => { 
        const snipes = client.snipes.get(message.channel.id);
        if(!snipes) return message.reply('<:message:929596897386180628> There is no messages deleted in this channel');

        const snipe = +args[0] - 1 || 0;
        const target = snipes[snipe];
        if(!target) return message.reply(`<:message:929596897386180628> There is only ${snipes.length} messages!`);

        const { msg, time, image } = target;
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
        .setColor("BLUE")
        .setDescription(`<:message:929596897386180628> ${msg.content}`)
        .setImage(image)
    message.channel.send({ embeds: [embed]});
    }
}