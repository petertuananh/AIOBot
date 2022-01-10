const { MessageEmbed } = require('discord.js')
const axios = require('axios')
const db = require("quick.db");
const config = require('../../JSON/config.json');
// const axios = require("axios");
module.exports = {
    // name: "hentai",
    // aliases: ['hotgirl'],
    category: ['Images'],
    description: "Hentai random img",
    cooldown: "5",
    nsfw: true,
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {
        let res = await axios.get(encodeURI(`https://api.waifu.pics/nsfw/waifu`));
        const embedGirl1 = new  MessageEmbed()
            .setAuthor(`[IMG] Media 🖼️`, client.user.displayAvatarURL())
            // .setThumbnail(config.thumbnail)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setDescription('Here is your img!')
                .setImage(res.data.url)
                .setColor("RANDOM")
            message.channel.send({embeds: [embedGirl1]})
        }
}