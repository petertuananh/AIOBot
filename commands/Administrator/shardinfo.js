// const {
//     MessageEmbed
// } = require("discord.js");
// const db = require("quick.db");
// const client = require("../../ElainaBOT.js")
// const config = require('../../Settings/Configuration/config.json');
// const emoji = require("../../Settings/Configuration/emojis.json");
// const moment = require('moment');
// require('moment-duration-format')

// module.exports = {
//     // name: "shardinfo",
//     aliases: ['shardstats'],
//     description: `Show shard info`,
//     cooldown: 5,
//     category: "Information",
//     usage: `${config.prefix}shardinfo`,
//     options1: `shardinfo`,
//     ownerOnly: false,

//     run: async (client, message, args) => {

//         const embed = new MessageEmbed()
//             .setColor("RED")
//             .setTitle(`**${emoji.emojiname7} Shard**`)
//             .setFooter(`Made by ` + client.user.username + ` BOT`)

//         // const promise = await client.shard.broadcastEval(
//         //     `[this.shard.ids[0], this.guilds.cache.size, this.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0), this.channels.cache.size, this.uptime, process.memoryUsage().heapUsed]`
//         // )

//         const promises = await client.shard.broadcastEval(s => {
//             return [s.shard.ids[0], s.guilds.cache.size, s.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0), s.channels.cache.size, s.uptime, process.memoryUsage().heapUsed, process.memoryUsage().heapTotal]
//         });

//         let finale = "";

//         // process.forEach((value) => {
//         //     finale += `\`Shard ${value[0]}:\`\nS: **${value[1].toLocaleString()}** | U: **${value[2].toLocaleString()}** | C: **${value[3].toLocaleString()}** " T: **${moment.duration(value[4]).format("d:hh:mm:ss")}**`
//         // })

//         for (const value of promises) {
//             finale += `<:blurplearrow:915527805700296784> **・ID ${parseInt(value[0]) + 1} : **\n**+ Total Server : ${(value[1])}**\n**+ Total Member : ${(value[2])}**\n**+ Total Channel : ${(value[3])}**\n`;
//         }

//         embed.setDescription(finale)
//         message.channel.send({
//             embeds : [embed]
//         })
//     }
// }