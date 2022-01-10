// const client = require('../../AIOBot.js');
// const {
//     MessageEmbed
// } = require('discord.js');
// const config = require('../../JSON/config.json');
// const { prefix } = require('../../JSON/config.json');
// const db = require('quick.db');
// const axios = require("axios");
// client.on('messageCreate', async (message) => {
    
//     // const channelID = db.get(`changerolecor`)
//     const roleID = db.get(`changerolecolorid`)
//     // if (message.channel.id === channelID){
//     var colors = ['#8585ff','#fff681','#a073fd','#fd73b9'];
//     for(let i = 0; i<= colors.length;i++){
//     // var role = message.guild.roles.find(role => role.name === "Owner");
//     var role = message.guild.roles.cache.find(r => r.id === roleID);
//     setInterval(() => {
//         try{
//         role.edit({
//             color: colors[i]
//         })
//         }catch{
//             return;
//         }
//     }, 500);
//     }
//     // }
// })