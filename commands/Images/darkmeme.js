const { MessageEmbed } = require('discord.js')
const db = require("quick.db");
const got = require('got')
const config = require('../../JSON/config.json');
module.exports = {
    name: "darkmeme",
    // aliases: [''],
    category: 'Images',
    description: "Some random dankmeme",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {

      got('https://www.reddit.com/r/dankmemes/random/.json').then(res => {
            let content = JSON.parse(res.body)

            const embed = new MessageEmbed()
            .setAuthor(`[IMG] Media 🖼️`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
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