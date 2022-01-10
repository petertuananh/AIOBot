const { MessageEmbed } = require('discord.js')
const axios = require('axios')
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    name: "captcha",
    // aliases: ['hotgirl'],
    category: ['Images'],
    description: "Random captcha",
    cooldown: "5",
    // nsfw: true,
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {
        let res = await axios.get(encodeURI(`https://api.no-api-key.com/api/v2/captcha`));
        const embedGirl1 = new  MessageEmbed()
            .setAuthor(`Captcha`, client.user.displayAvatarURL())
            // .setThumbnail(config.thumbnail)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setDescription(`Text: ${res.data.captcha_text}`)
                .setImage(res.data.captcha)
                .setColor("RANDOM")
            message.channel.send({embeds: [embedGirl1]})
        }
}