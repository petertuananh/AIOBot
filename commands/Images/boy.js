const { MessageEmbed } = require('discord.js')
const axios = require('axios')
const db = require("quick.db");
const config = require('../../JSON/config.json');
// const axios = require("axios");
module.exports = {
    // name: "boy",
    // aliases: ['hotboy'],
    category: ['Images'],
    description: "Girl random img",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {
        let res = await axios.get(encodeURI(`https://api.huyapi.ga/v2/?type=trai&api_key=${config.huyapikey}`));
        if(!message.channel.nsfw){
            const NEmbed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(':x: This command only use in nsfw channel!')
                .setFooter("Requested by @" + message.author.username);
            return message.reply({ embeds: [NEmbed] })
        }else{
        const embedGirl1 = new  MessageEmbed()
            .setAuthor(`[IMG] Media 🖼️`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setDescription('Here is your img!')
                .setImage(res.data.url)
                .setColor("RANDOM")
            message.channel.send({embeds: [embedGirl1]})
        }
    }
}