const { MessageEmbed } = require('discord.js')
const axios = require('axios')
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    // name: "girlvn2",
    aliases: ['hotgirlvn2'],
    category: ['Images'],
    description: "Girl random channel 2",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {
        // 'https://api.leanhtruong.net/v2/image.php?api_key=leanhtruong&image=nobra' | 'https://api.leanhtruong.net/v2/image.php?api_key=leanhtruong&image=girlvn'
      axios.get('https://api.leanhtruong.net/v2/image.php?api_key=leanhtruong&image=girlvn')
        .then((res) => {
            const embedGirl2 = new  MessageEmbed()
            .setAuthor(`[IMG] Media 🖼️`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                // .setDescription('Video của bạn ở đây')
                .setImage(res.data.data)
                .setColor("RANDOM")
            message.channel.send({embeds: [embedGirl2]})
        })
        .catch((err) => {
            console.log('ERROR: ', err)
        })
    }
}