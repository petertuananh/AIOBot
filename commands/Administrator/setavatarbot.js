// const {
//     MessageEmbed
// } = require("discord.js");
// const db = require("quick.db");
// const client = require("../../ElainaBOT.js")
// const config = require('../../Settings/Configuration/config.json');
// const emoji = require("../../Settings/Configuration/emojis.json");

// module.exports = {
//     name: "setavatarbot",
//     aliases: ['setavtbot'],
//     description: `Change avatar bot`,
//     cooldown: 5,
//     category: "Owner",
//     usage: `${config.prefix}setavatarbot`,
//     options1: "setavatarbot url image",
//     options2: "",
//     options3: "",
//     ownerOnly: true,

//     run: async (client, message, args) => {

//         const embed = new MessageEmbed()
//         .setColor("RED")
//         .setTitle(`**${emoji.emojiname15}  Set Avatar Bot**`)
//         .setFooter(`Made by ` + client.user.username + ` BOT`)

//         let avatarurl = args.join(" ")
//         if (!avatarurl) {
//             embed.setDescription(`**・${client.lang.cmds2.setavatarbot.setavatarbot_Choice}**`)
//             return message.channel.send({embeds : [embed]})
//         }

//         client.user.setAvatar(`${avatarurl}`)

//         embed.setDescription(`**・${client.lang.cmds2.setavatarbot.setavatarbot_Success} ${client.user.username}**`)
//         message.channel.send({embeds : [embed]})

//     }
// }