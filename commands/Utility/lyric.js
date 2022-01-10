const { MessageEmbed } = require('discord.js')
const axios = require('axios')
const db = require("quick.db");
const config = require('../../JSON/config.json');
// const axios = require("axios");
module.exports = {
    name: "lyrics",
    // aliases: ['hotgirl'],
    category: ['Images'],
    description: "Get lyrics",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {
        let res = await axios.get(encodeURI(`https://no-api-key.com/api/v2/lyrics?song=${args.join(" ")}`));
        
        const embed = new  MessageEmbed()
            .setAuthor(`${res.data.title}`, client.user.displayAvatarURL())
            // .setThumbnail(config.thumbnail)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setDescription(`${res.data.lyrics}`)
                // .addField(`Lyric`, `${res.data.lyrics}`)
                .setColor("RANDOM")
        message.channel.send({embeds: [embed]})
        }
    
    
}