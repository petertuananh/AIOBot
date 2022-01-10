// const client = require('../../AIOBot.js');
// const config = require('../../JSON/config.json');
// const { MessageEmbed } = require('discord.js');
// const db = require('quick.db');
// const { mem } = require("node-os-utils");
// const { on } = require("events");
// // const { channel } = require('diagnostics_channel');
// client.on('message', async channel => {
//     // console.log(`ok000`)

//     if (!channel.guild) return false;

//     const AuditLogFetch = await channel.guild.fetchAuditLogs({limit: 1, type: "CHANNEL_CREATE"}); // Fetching the audot logs.
//     if (!AuditLogFetch.entries.first()) 
//     return console.error(`No entries found.`);

//     const Entry = AuditLogFetch.entries.first();
//     // Entry.executor.id

//     let raid = db.get(`raid.${channel.guild.id}.${Entry.executor.id}`)
//     console.log(raid)


//     // if(message.mentions.everyone){
//     //     db.delete(`pingeveryone_${message.guild.id}_${message.author.id}`)
//     // }
//     if (channel.guild.id === raid){
//     // console.log(`ok000`)
//         if(raid === null) {
//             db.set(`raid.${channel.guild.id}.${Entry.executor.id}`, 1)
//         }else{
//             db.add(`raid.${channel.guild.id}.${Entry.executor.id}`, 1)
//         }
//     }
//     let ping = db.get(`raid.${channel.guild.id}.${Entry.executor.id}`)
//     if(ping === 3) {
//         console.log(`ok`)
//     }else{
//         // setTimeout(function () {
//             db.delete(`raid.${channel.guild.id}.${Entry.executor.id}`)
//         // }, 5000);
//     }
//     if(ping === 1) {
//         console.log(`test`)
//         setTimeout(function () {
//             db.delete(`raid.${channel.guild.id}.${Entry.executor.id}`)
//         }, 5000);
//     }
    
// })