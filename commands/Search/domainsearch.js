const { MessageEmbed } = require('discord.js')
const db = require("quick.db");
const got = require('got')
const config = require('../../JSON/config.json');
module.exports = {
    name: "domain-search",
    // aliases: ['gg-search'],
    category: 'Images',
    description: "Search a domain!",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args, prefix) => {
        if (!args[0]){
            const Xembed = new  MessageEmbed()
            .setAuthor(`SEARCH 🖼️`, client.user.displayAvatarURL())
            // .setThumbnail(config.thumbnail)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription(`<:Error:915231514856390698> Pls type the domain to search!`)
            .addField(`Usage`, `${prefix}domain-search http://your domain`)
            .setColor("RED")
        return message.channel.send({embeds: [Xembed]})
        }
        const link = `https://image.thum.io/get/auth/11091-RandomBot/nomention/${args.join(" ")}`
        const embed = new  MessageEmbed()
            .setAuthor(`SEARCH 🖼️`, client.user.displayAvatarURL())
            // .setThumbnail(config.thumbnail)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription('Domain search result')
            .setImage(link)
            .setColor("BLUE")
        message.channel.send({embeds: [embed]})
    }
}