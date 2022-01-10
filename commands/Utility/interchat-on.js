// const { MessageEmbed } = require('discord.js')
// const db = require('quick.db')
// const config = require('../../JSON/config.json');
// module.exports = {
//   name : "interchat",
// //   aliases : ['awc', 'setwelcome'],
//   category: 'Utility',
//   cooldown: 5,
//   description: "Set the global chat!",
//   UserPerms: ["ADMINISTRATOR"],
//   BotPerms: ["ADMINISTRATOR"],
//   premiumOnly: true,
//   run : async(client, message, args, prefix) => {

//     const welcomeChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

//     const errorWelcome = new MessageEmbed()
//     .setColor("RED")
//     .setAuthor(`Inter Chat ❌`, client.user.displayAvatarURL())
//     .setThumbnail(db.get(`thumb-${message.guild.id}`))
//     .addField(`Reason:`, `Welcome channel not specified`, false)
//     .addField(`Usage:`, `${prefix}interchat #[channel]`, false)
//     .setTimestamp()
//     .setFooter(client.user.username, client.user.displayAvatarURL())
//     .setImage(db.get(`banner-${message.guild.id}`))

//     if (!welcomeChannel) return message.channel.send({ embeds: [errorWelcome] })

//     db.add(`interchat.${message.channel.id}`, welcomeChannel.id);

//     const successWelcome = new MessageEmbed()
//         .setColor("GREEN")
//         .setAuthor(`WELCOME ✅`, client.user.displayAvatarURL())
//         .setThumbnail(db.get(`thumb-${message.guild.id}`))
//         .setDescription(`The welcome notification channel has been set as ${welcomeChannel.name}`)
//         .setTimestamp()
//         .setFooter(client.user.username, client.user.displayAvatarURL())
//         .setImage(db.get(`banner-${message.guild.id}`))

//     message.channel.send({ embeds: [successWelcome] })

//   }
// }