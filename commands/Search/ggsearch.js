const { MessageEmbed } = require('discord.js')
const db = require("quick.db");
const got = require('got')
const config = require('../../JSON/config.json');
module.exports = {
    name: "google-search",
    aliases: ['gg-search'],
    category: 'Images',
    description: "Search from google!",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {
        if (!args[0]){
            const Xembed = new  MessageEmbed()
            .setAuthor(`SEARCH 🖼️`, client.user.displayAvatarURL())
            // .setThumbnail(config.thumbnail)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription(`<:Error:915231514856390698> Pls type the word to search!`)
            .setColor("RED")
        return message.channel.send({embeds: [Xembed]})
        }
        const link = `https://image.thum.io/get/auth/11091-RandomBot/nomention/https://google.com/search?q=${args.join(" ")}`
        const embed = new  MessageEmbed()
            .setAuthor(`SEARCH 🖼️`, client.user.displayAvatarURL())
            // .setThumbnail(config.thumbnail)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription('Google search result')
            .setImage(link)
            .setColor("BLUE")
        message.channel.send({embeds: [embed]})
    }
}