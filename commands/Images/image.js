const img = require('images-scraper')
const db = require("quick.db");
const config = require('../../JSON/config.json');
const google = new img({
    puppeteer : {
        headless : true,
    }
})

const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "image",
    aliases: ['images', 'img'],
    category: 'Images',
    description: "Search photos on google",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {
        const query = args.join(" ")

        const embed = new MessageEmbed()
        .setAuthor(`[IMG] Hệ Thống Hình Ảnh 🖼️`, client.user.displayAvatarURL())
        .setThumbnail(config.thumbnail)
            .setColor("RED")
            .setDescription(`Vui lòng nhập ảnh cần tìm kiếm 🔍`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();

        if(!query) return message.channel.send({embeds : [embed]})

        const results = await google.scrape(query, 1)

        const embed1 = new MessageEmbed()
        .setAuthor(`[IMG] Media 🖼️`, client.user.displayAvatarURL())
        .setThumbnail(config.thumbnail)
            .setColor("RED")
            .setDescription(`Your img here!`)
            .setImage(`${results[0].url}`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();

        message.channel.send({embeds: [embed1]});   
    }
}