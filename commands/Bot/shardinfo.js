// const Discord = require("discord.js");
// const moment = require("moment");
// require("moment-duration-format");
// const { MessageEmbed } = require('discord.js')
// const db = require('quick.db')

// const config = require('../../JSON/config.json');
// module.exports = {
//     // name: 'shardinfo',
//     aliases: ['shard'],
//     category: 'Bot',
//     cooldown: 5,
//     description: "Change Prefix",
//     // UserPerms: ["ADMINISTRATOR"],
//     // BotPerms: ["ADMINISTRATOR"],
//     run: async (client, message, args, prefix) => {
//         client.shard.broadcastEval(client => [client.shard.ids, client.ws.status, client.ws.ping, client.guilds.cache.size])
//     .then((results) =>{
        
//         results.map((data) => {
//             try{
//             const embed = new MessageEmbed()
//             .setTitle(`👨‍💻 Bot Shards (${client.shard.count})`)
//             .setColor('WHITE')
//             .addField(`📡 Shard ${data[0]}`, `Status:${data[1]}`)
//             .addField(`Ping`, `${data[2]}ms`)
//             .addField(`Server`, `${data[3]}`)
//             // .setDescription(`📡 Shard ${data[0]}`, `**Status:** ${data[1]}\n**Ping:** ${data[2]}ms\n**Guilds:** ${data[3]}`)
//             .setTimestamp();
//             // message.channel.send(`📡 Shard ${data[0]}`, `**Status:** ${data[1]}\n**Ping:** ${data[2]}ms\n**Guilds:** ${data[3]}`, false)
//             message.channel.send({ embeds: [embed] });
//             }catch{
//                 return;
//             }
//         });

// })
// .catch((error) => {
//     console.error(error);
// });
//     }
// }