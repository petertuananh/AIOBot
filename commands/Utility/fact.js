const { MessageEmbed } = require('discord.js')
const axios = require('axios')
const db = require("quick.db");
const config = require('../../JSON/config.json');
// const axios = require("axios");
module.exports = {
    name: "fact",
    // aliases: ['hotgirl'],
    category: ['Images'],
    description: "Random fact!",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {
        let res = await axios.get(encodeURI(`https://no-api-key.com/api/v2/facts`));
        
        const embed = new  MessageEmbed()
            .setAuthor(`Your fact: `, client.user.displayAvatarURL())
            // .setThumbnail(config.thumbnail)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setDescription(`${res.data.fact}`)
                .setColor("RANDOM")
        message.channel.send({embeds: [embed]})
        }
    
    
}