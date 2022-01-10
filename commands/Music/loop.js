// const {
//     Util,
//     MessageEmbed,
//     MessageButton,
//     MessageActionRow
// } = require("discord.js");
// const db = require("quick.db");
// const client = require("../../ElainaBOT.js")
// const config = require('../../Settings/Configuration/config.json');
// const emoji = require("../../Settings/Configuration/emojis.json");

// // const Youtube = require("simple-youtube-api");
// // const youtube = new Youtube(config.apikey_youtube);
// // const ytdl = require('ytdl-core');

// module.exports = {
//     name: "loop",
//     aliases: ['mloop'],
//     description: `Loop songs`,
//     cooldown: 5,
//     category: "Music",
//     usage: `${config.prefix}loop`,
//     options1: "loop",
//     options2: "",
//     options3: "",
//     UserPerms: ["CONNECT", "SPEAK"],
//     ownerOnly: false,

//     run: async (client, message, args) => {

//         const embed = new MessageEmbed()
//             .setColor("RED")
//             .setTitle(`**${emoji.emojiname10}  Music**`)
//             .setFooter(`Made by ` + client.user.username + ` BOT`)

//         const channel = message.member.voice.channelId;

//         if (!channel) {
//             embed.setDescription(`**・${client.lang.music.music_NoChannel}**`)
//             return message.channel.send({
//                 embeds: [embed]
//             });
//         }

//         if (!channel == message.guild.me.voice.channelId) {
//             embed.setDescription(`**・${client.lang.music.music_SameChannel}**`)
//             return message.channel.send({
//                 embeds: [embed]
//             });
//         }


//         let guildQueue = client.player.getQueue(message.guild.id);
//         guildQueue.setRepeatMode(2); // OFF = 0 | SONG = 1 | QUEUE = 2

//         embed.setDescription(`**・${client.lang.music.music_Repeat}**`)
//         return message.channel.send({
//             embeds: [embed]
//         });


//     }
// }