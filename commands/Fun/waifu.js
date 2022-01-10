const {
    Message,
    MessageEmbed
  } = require('discord.js')
const Discord = require('discord.js'); //npm i discord.js
const superagent = require('superagent');

module.exports = {
    name: 'waifu',
    description: 'random waifu OwO',
    usage: 'waifu',
    category: "fun",
    /**
    * @param {Message} message
    */
    run: async(client, message, args) => {
        const { body } = await superagent
    .get("https://nekos.life/api/v2/img/waifu"); // where the bot is well searching for
    
    const embed = new Discord.MessageEmbed()
    .setTitle("Here your waifu")
    .setColor("#ff9900")
    .setImage(body.url) 
    message.channel.send({ embeds: [embed] });
    }
}