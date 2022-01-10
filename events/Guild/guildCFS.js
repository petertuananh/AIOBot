// const client = require('../../AIOBot.js');
// const picExt = [".webp", ".png", ".jpg", ".jpeg", ".gif"];
// const videoExt = [".mp4", ".webm", ".mov"];
// const {     
//     Client,
//     Util,
//     Collection,
//     MessageEmbed,
//     Structures 
// } = require('discord.js')

// const config = require('../../JSON/config.json')

// const db = require("quick.db");

// const ServerID = config.GuildID
// const channelID = config.CfsID
// const LogChannel = config.CfsLogID

// async function createEmbed(text, message) {
//     const newembed = new MessageEmbed()
//         .setColor(`RANDOM`)
//         .setDescription(text)
//     return message.channel.send({embeds : [newembed]}) //.then(msg=>msg.delete({timeout:60000}));
// }

// client.on('messageCreate', async message => {
//     if (message.author.bot) return;
//     let check = await db.get("CfsCount")
//     if (check == null) db.set("CfsCount", 0)
//     let checklogs = await db.get("logs")
//     if (checklogs == null) db.set("logs", [])
//     if (message.channel.type === "dm") {
//         let CfsCount = await db.get("CfsCount")
//         let logs = await db.get("logs")
//         let userID = message.author.id
//         if (message.content.startsWith(config.prefix.toLowerCase() + "cfs")) {

//             var args = message.content.split(" ").slice(0)
//             var args = args.slice(1).join(" ")
//             if (!args) return createEmbed("**❌ | Please enter the confession content**", message)
//             var guildID = ServerID


//             createEmbed("**💌 | Your confession has been sent!**", message).then(msg => msg.delete({
//                 timeout: `${10000}`
//             }))
//             CfsCount += 1;
//             await db.set("CfsCount", CfsCount)
//             logs.push(message.author.id)
//             await db.set("logs", logs)

//             if (args.length > 1024) return message.reply("Your message content too many characters (1024 Limit) :/")
//             let embed = new Discord.MessageEmbed()
//                 .setColor("RANDOM")
//                 .setTitle(`New Confession #${CfsCount}`)
//                 .setDescription(args)
//                 .setFooter(`${config.prefix}cfs <content>`, client.user.displayAvatarURL())
//                 .setTimestamp()
//             let embed1 = new Discord.MessageEmbed()
//                 .setColor("RANDOM")
//                 .setAuthor(`Confession Log #${CfsCount}`, client.user.displayAvatarURL())
//                 .setDescription(args)
//                 .setFooter("Confession sent by:  " + message.author.tag + " ", message.author.avatarURL)
//                 .setTimestamp()
//             if (message.attachments.size > 0) {
//                 let attachment = message.attachments.first()
//                 picExt.forEach(async (ext) => {
//                     if (attachment.name.endsWith(ext)) {
//                         embed.setImage(attachment.url);
//                         embed1.setImage(attachment.url);
//                         client.guilds.cache.get(guildID).channels.cache.get(channelID).send(embed).catch(console.log(`Message recieved from ${userID}!(${message.author.username}) to ${ServerID}`))
//                         var channelIDS = LogChannel
//                         if (channelIDS == "no-channel") return
//                         client.guilds.cache.get(guildID).channels.cache.get(channelIDS).send(embed1)
//                     }
//                 });
//                 videoExt.forEach(async (ext) => {
//                     if (attachment.name.endsWith(ext)) {
//                         client.guilds.cache.get(guildID).channels.cache.get(channelID).send(`**New Confession #${CfsCount}**`, attachment).catch(console.log(`Message recieved from ${userID}!(${message.author.username}) to ${ServerID}`))
//                         var channelIDS = LogChannel
//                         if (channelIDS == "no-channel") return
//                         client.guilds.cache.get(guildID).channels.cache.get(channelIDS).send(`**New Confession #${CfsCount}\nConfession sent by: ${message.author.tag}**`, attachment).catch(console.log(`Message recieved from ${userID}!(${message.author.username}) to ${ServerID}`))
//                     }
//                 });
//             } else {
//                 client.guilds.cache.get(guildID).channels.cache.get(channelID).send(embed).catch(console.log(`Message recieved from ${userID}!(${message.author.username}) to ${ServerID}`))
//                 var channelIDS = LogChannel
//                 if (channelIDS === "no-channel") return
//                 client.guilds.cache.get(guildID).channels.cache.get(channelIDS).send(embed1)
//             }

//         } else if (message.content.startsWith(config.prefix.toLowerCase() + "reply")) {
//             //let args = message.content.split(" ").slice(0)

//             var args = message.content.split(" ").slice(0)
//             var args = args.slice(1)

//             let Rargs = message.content.split(" ").slice(2).join(" ")
//             if (!args[0]) return createEmbed("**❌ | Please enter the confession count**", message)
//             if (isNaN(args[0])) return createEmbed("**❌ | Please enter an integer!**", message)
//             if (!args[1]) return createEmbed("**❌ | Please enter your content**", message)
//             let userID = logs[args[0] - 1]
//             try {
//                 if (message.author.bot) return;
//                 const member = client.users.fetch(userID).then(user => {

//                     let embed = new Discord.MessageEmbed()
//                         .setColor('#FFE9A7')
//                         .setAuthor(`Someone replied your Confession`, client.user.avatarURL({
//                             dynamic: true
//                         }))
//                         .setDescription(Rargs)
//                         .setTimestamp()

//                     user.send(embed)
//                     console.log(`Reply was sent to ${userID}!`)
//                 })
//                 if (!member) return createEmbed("**Cannot send messages to this user**", message)
//                 //   member.send(embed).catch(console.log(`Reply was sent to ${userID}!`))
//                 createEmbed("**Your Message was Sent!**", message).then(msg => msg.delete({
//                     timeout: 10000
//                 }))
//             } catch (error) {
//                 return createEmbed("**Cannot send messages to this user**", message)
//             }
//         }
//     }
// })