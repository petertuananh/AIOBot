const client = require('../../AIOBot.js');
const {
    MessageEmbed
} = require('discord.js');
const config = require('../../JSON/config.json');
const { prefix } = require('../../JSON/config.json');
const db = require('quick.db');
const axios = require("axios");
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if(message.channel.type === 'dm') return
    if (message.content.startsWith(prefix)) return

    const AIChatBotCheck = await db.has(`chatbot-${message.guild.id}`);
    if (AIChatBotCheck) {

        const getAIChatBotCheck = await db.get(`chatbot-${message.guild.id}`)
        const AIChatBot = message.guild.channels.cache.get(getAIChatBotCheck)
        if (message.channel.id != getAIChatBotCheck) return
        let res = await axios.get(encodeURI(`https://api.elainateam.xyz/chatbot?key=C4ygL2sgZoOy1b56Y7cwfwW0jaA1jk&msg=${message.content}`));
        if (!res.data.msg){

        return AIChatBot.send(`K có từ này!`)
        }else{
        AIChatBot.send(res.data.msg)
        }
    }
})



// const key = "your_key"
// let res = await axios.get(encodeURI(`https://api.elainateam.xyz/chatbot?key=${key}&msg=${message.content}`));
//     if (!res.data.msg){
//         return message.channel.send(`Tớ hong biết bạn đang nói j á`)
//     }else{
//         return message.channel.send(res.data.msg)
//     }