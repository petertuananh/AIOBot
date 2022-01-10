// const client = require('../../AIOBot.js');
// const config = require('../../JSON/config.json');
// const {
//     MessageEmbed
// } = require('discord.js');
// const { prefix } = require('../../JSON/config.json');
// const db = require('quick.db');
// const axios = require("axios");
// client.on('messageCreate', message => {
//     const topchat = db.get(`topchat.${message.guild.id}.${message.author.id}`)
//     if (topchat === null){
//         db.set(`topchat.${message.guild.id}.${message.author.id}`, 1)
//     }else{
//         db.add(`topchat.${message.guild.id}.${message.author.id}`, 1)
//     }
// })