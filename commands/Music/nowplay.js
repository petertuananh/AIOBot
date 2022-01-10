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
//     name: "nowplay",
//     aliases: ['mnowplay'],
//     description: `Now playing songs`,
//     cooldown: 5,
//     category: "Music",
//     usage: `${config.prefix}nowplay`,
//     options1: "nowplay",
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
//         const ProgressBar = guildQueue.createProgressBar();

//         embed.setDescription(`**・Now Playing :** \`\`\`${guildQueue.nowPlaying}\`\`\` \n**・Volume :** \`${guildQueue.volume}\`\n**・Progress :** \`\`\`${ProgressBar.prettier}\`\`\``)
//         return message.channel.send({
//             embeds: [embed]
//         });


//     }
// }