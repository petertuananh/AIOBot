const { MessageEmbed } = require('discord.js')
const db = require("quick.db");
const got = require('got')
const config = require('../../JSON/config.json');
module.exports = {
    name: "youtube-search",
    aliases: ['ytb-search'],
    category: 'Images',
    description: "Search from youtube!",
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
        const link = `https://image.thum.io/get/auth/11091-RandomBot/nomention/https://www.youtube.com/results?search_query=${args.join(" ")}`
        const embed = new  MessageEmbed()
            .setAuthor(`SEARCH 🖼️`, client.user.displayAvatarURL())
            // .setThumbnail(config.thumbnail)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription('Youtube search result')
            .setImage(link)
            .setColor("RANDOM")
        message.channel.send({embeds: [embed]})
    }
}