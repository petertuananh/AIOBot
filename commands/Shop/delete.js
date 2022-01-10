// const { MessageEmbed } = require('discord.js');
// const db = require('quick.db')
// module.exports = {
//     name: "delete",
//     // aliases: [`pausemusic`],
//     category: 'Music',
//     description: "Tạm dừng phát nhạc trong kênh voice",
//     cooldown: 5,
//     // UserPerms: ["SEND_MESSAGE"],
//     // BotPerms: ["SEND_MESSAGE"],
//     run: async (client, message, args, prefix) => {
//         if (!args[0]) {
//             return message.channel.send(`:x: Pls type item code!`)
//         }   
//         db.delete(`code${args[0]}`)
//         db.delete(`name${args[0]}`)
//         db.delete(`price${args[0]}`)
//         db.delete(`img${args[0]}`)
//         const newItem = new MessageEmbed()
//         .setTitle(`Deleted your Item!`)
//         message.channel.send({ embeds: [newItem] })
//     }
// }