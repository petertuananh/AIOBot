const client = require('../../AIOBot.js');
const config = require('../../JSON/config.json');
const {
    MessageEmbed
} = require('discord.js');
const { prefix } = require('../../JSON/config.json');
const db = require('quick.db');
const axios = require("axios");
client.on('messageCreate', async (message) => {
    if (message.guild) {
        try{
            // message.channel.sendTyping();
        }catch{
            return console.log(`Error!`)
        }
    }
})