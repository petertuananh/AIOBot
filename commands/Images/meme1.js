const { MessageEmbed } = require('discord.js')
const db = require("quick.db");
const got = require('got')
const config = require('../../JSON/config.json');
module.exports = {
    name: "meme1",
    // aliases: ['funmeme'],
    category: 'Images',
    description: "Random meme in channel 1",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {
      got('https://www.reddit.com/r/meme_vn/random/.json').then(res => {
            let content = JSON.parse(res.body)

            const embed = new MessageEmbed()
            .setAuthor(`[IMG] Media 🖼️️`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
              // .setDescription(`Tên Meme: ${content[0].data.children[0].data.title}`)
              .setImage(content[0].data.children[0].data.url)
              .setColor("RANDOM")
              .setFooter(client.user.username, client.user.displayAvatarURL())
              .setTimestamp()
              // .setFooter(`👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} | Comments : ${content[0].data.children[0].data.num_comments}`)

            message.channel.send({embeds: [embed]})
        })
    }
}