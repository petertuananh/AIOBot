const superagent = require('superagent');
// const colors = require('../../botconfig/colors.json')
const Discord = require('discord.js');

module.exports = {
  name: "dadjoke",
  aliases: ["dadjoke", "joke"],
  category: "fun",
  usage: "dadjoke",
  run: async(client, message, args) => {

        await superagent
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json')
		   .end((err, response) => {
        let helpEmbed = new Discord.MessageEmbed()
        .setTitle("Joke")
        .setDescription(response.body.joke)
        .setColor("RANDOM");
        message.channel.send({ embeds: [helpEmbed] })
		})
    }
}