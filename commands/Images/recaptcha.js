const { MessageEmbed } = require('discord.js')
const db = require("quick.db");
const got = require('got')
const config = require('../../JSON/config.json');
module.exports = {
    name: "recaptcha",
    // aliases: ['gg-search'],
    category: 'Images',
    description: "Create your recaptcha!",
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
            .setDescription(`<:Error:915231514856390698> Pls type the name to create!`)
            .setColor("RED")
        return message.channel.send({embeds: [Xembed]})
        }
        const link = `https://api.no-api-key.com/api/v2/recaptcha/?text=${args.join(" ")}`
        const embed = new  MessageEmbed()
            .setAuthor(`CARD 🖼️`, client.user.displayAvatarURL())
            // .setThumbnail(config.thumbnail)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription('Your recaptcha!')
            .setImage(link)
            .setColor("BLUE")
        message.channel.send({embeds: [embed]})
    }
}