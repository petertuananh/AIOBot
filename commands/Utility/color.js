const { MessageEmbed } = require('discord.js')
const axios = require('axios')
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    name: "color",
    // aliases: ['hotgirl'],
    category: ['Images'],
    description: "Get your color",
    cooldown: "5",
    // nsfw: true,
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {
        if (!args[0]){
            const Xembed = new  MessageEmbed()
            .setAuthor(`COLOR 🖼️`, client.user.displayAvatarURL())
            // .setThumbnail(config.thumbnail)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription(`<:Error:915231514856390698> Pls type the color to pick!`)
            .setColor("RED")
        return message.channel.send({embeds: [Xembed]})
        }
        const link = `https://api.no-api-key.com/api/v2/color?color=${args.join(" ")}`
        const embed = new  MessageEmbed()
            .setAuthor(`COLOR 🖼️`, client.user.displayAvatarURL())
            // .setThumbnail(config.thumbnail)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription('Your color')
            .setImage(link)
            .setColor("BLUE")
        message.channel.send({embeds: [embed]})
    }
}