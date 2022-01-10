const { MessageEmbed } = require('discord.js')
const config = require('../../JSON/config.json');
const db = require("quick.db");
module.exports = {
    name: 'ping',
    aliases: ['latency', 'checkping'],
    description: "Ping check",
    cooldown: 5,
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    category: 'Information',

    // To convert it into hours, use 1 * 60 * 60 --> 1 hour

    run: async (client, message, args) => {

				// setTimeout(function () {
				// 	message.channel.send("checking...").then(msg => {
        //     setTimeout(() => msg.delete(), 2000)
        // })
				// }, 1000);

				// setTimeout(function () {
				// 	message.channel.send("checking...").then(msg => {
        //     setTimeout(() => msg.delete(), 3000)
        // })
				// }, 3000);

				// setTimeout(function () {
				//   message.channel.send("checking...")
				// 	.then(msg => {setTimeout(() => msg.delete(), 4000)})
				// }, 6000);

				// setTimeout(function () {
        // const pingEmbed = new MessageEmbed()
        //         .setColor("RED")
        //         .setAuthor(`PING ${client.user.username} 🚦`, client.user.displayAvatarURL())
        //         .setThumbnail(db.get(`thumb-${message.guild.id}`))
        //         // .addField(`Bot Ping`, `\`${message.createdTimestamp - message.createdTimestamp}\` ms`,true)
        //         .setDescription(`**・${client.user.username} Ping:** \`${client.ws.ping} ms\``,true)
        //         .setTimestamp()
        //         .setFooter(client.user.username, client.user.displayAvatarURL())
        //         .setImage(db.get(`banner-${message.guild.id}`))
        // return message.channel.send({ embeds: [pingEmbed] })
				// }, 10000);
        const helpEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`🏓Pong!`)
      .setDescription(`${client.ws.ping}ms`)
      return message.reply({ embeds: [helpEmbed] })


    }
}