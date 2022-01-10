// const client = require('../../AIOBot.js');
// const config = require('../../JSON/config.json');
// const { MessageEmbed, Discord } = require('discord.js');
// const db = require('quick.db');
// const { mem } = require("node-os-utils");
// const { on } = require("events");

// client.on('messageCreate', async message => {
//     if(!message.guild){
//         const dmembed = new Discord.MessageEmbed()
//             .setColor('#3d35cc')
//             .setAuthor(`I'm ${client.user.username}`, client.user.displayAvatarURL())
//             .setThumbnail(client.user.displayAvatarURL())
//             .setDescription("Menu")
//             .addField("Get support", `${config.prefix}support`)
//             .addField("Chat with bot", `${config.prefix}chatbot-enable`)
//             .setFooter(client.user.username, client.user.displayAvatarURL())
//             .setTimestamp()
//             .setImage(config.embedbanner)
//         message.channel.send({embeds: [dmembed]})
//     }
// })