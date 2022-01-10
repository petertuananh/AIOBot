const { MessageEmbed } = require('discord.js')
const axios = require('axios')
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    // name: "girlvn1",
    aliases: ['hotgirlvn1'],
    category: ['Images'],
    description: "Girl random channel 1",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {
        // 'https://api.leanhtruong.net/v2/image.php?api_key=leanhtruong&image=nobra' | 'https://api.leanhtruong.net/v2/image.php?api_key=leanhtruong&image=girlvn'
      axios.get('https://api.huyapi.ga/v2/?type=gai&api_key=d1783b7197f892ef05a72ed6235193')
        .then((res) => {
            const embedGirl1 = new  MessageEmbed()
            .setAuthor(`[IMG] Media 🖼️`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                // .setDescription('Video của bạn ở đây')
                .setImage(res.data.data)
                .setColor("RANDOM")
            message.channel.send({embeds: [embedGirl1]})
        })
        .catch((err) => {
            console.log('ERROR: ', err)
        })
    }
}