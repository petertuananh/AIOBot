const client = require('../../AIOBot.js');
const config = require('../../JSON/config.json');
const Discord = require('discord.js');
const cooldowns = new Map();
const db = require("quick.db");
const { commands } = require('../../AIOBot.js');


client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.guild){

    // PREFIX
    // if (message.guild.me.permissions.has(["SEND_MESSAGES"])){
    //     message.channel.sendTyping();
    // }
    let prefix = await db.fetch(`prefix-${message.guild.id}`);
    if (prefix == null) {
        prefix = config.prefix
    } else {
        prefix = prefix;
    }
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) {
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Discord.Collection())
        }

        const currentTime = Date.now()
        const timeStamps = cooldowns.get(command.name)
        const cooldownAmount = (command.cooldown) * 1000

        if (timeStamps.has(message.author.id)) {
            const expTime = timeStamps.get(message.author.id) + cooldownAmount
            if (currentTime < expTime) {
                const timeLeft = (expTime - currentTime) / 1000
                const tmotEmbed = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor(`COOLDOWN ❌`, client.user.displayAvatarURL())
                    .setThumbnail(client.user.displayAvatarURL())
                    .setDescription(`Pls wait \`${timeLeft.toFixed(1)}\`s to use \`${command.name}\` !`)
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setTimestamp()
                    .setImage(db.get(`banner-${message.guild.id}`))
                return message.channel.send({
                    embeds: [tmotEmbed]
                })
        
                
            }
        }
        timeStamps.set(message.author.id, currentTime)
        setTimeout(() => {
            timeStamps.delete(message.author.id)
        }, cooldownAmount)

        const momsgEmbed = new Discord.MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`PERMISSIONS ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription("Bot is missing permission!")
            .addField("You need give:", `\`SEND MESSAGES\`, \`EMBED LINKS\` to bot!`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))

        const upEmbed = new Discord.MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`PERMISSIONS ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription("You're missing permission!")
            .addField("You need", `\`${command.UserPerms || []}\``)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))

        const bpEmbed = new Discord.MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`PERMISSIONS ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription("Bot is missing permission!")
            .addField("Bot need:", `\`${command.BotPerms || []}\``)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))

        if (!message.guild.me.permissions.has(["SEND_MESSAGES", "EMBED_LINKS"])) return message.member.send({
            embeds: [momsgEmbed]
        }).catch(err => console.log(err))

        if (!message.member.permissions.has(command.UserPerms || [])) return message.channel.send({
            embeds: [upEmbed]
        })

        if (!message.guild.me.permissions.has(command.BotPerms || [])) return message.channel.send({
            embeds: [bpEmbed]
        })
        if (!cmd) {
            const nocmd = new Discord.MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`Wrong command ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`Can't find your command!, pls user ${prefix}help`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            return message.channel.send({embeds: [nocmd]})
        }

        if (command.ownerOnly) {

            const ownerEmbed = new Discord.MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`OWNER ONLY ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`This command only owner can use!`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))

            if (message.author.id !== config.ownerID) return message.channel.send({
                embeds: [ownerEmbed]
            })
        }
        // Premium
        
        if (command.premiumOnly) {
            const premiumguild = db.get(`premiumsv-${message.guild.id}`)
            const preEmbed = new Discord.MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`PREMIUM ONLY ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`<a:DiamondVip:915186133607002142> This command only premium user/server can use!`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))

            if (message.guild.id !== premiumguild){
            return message.channel.send({embeds: [preEmbed]})
            }
        }
        if (command.nsfw) {
        
            const nsfwEmbed = new Discord.MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`NSFW ONLY ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`This command only can use in NSFW channel!`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))

            if(!message.channel.nsfw){
            return message.channel.send({embeds: [nsfwEmbed]})
            }
        
        }
        // Premium
        // DM message
        if (command.nodms) {
            const nodmsembed = new Discord.MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`SERVER ONLY ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`<:Error:915231514856390698> This command only can use in server!`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()

            if (!message.guild){
            return message.channel.send({embeds: [nodmsembed]})
            }
        }
        // DM Message
        command.run(client, message, args, prefix)
    }
    }else{
        let prefix = '.'
    if (prefix == null) {
        prefix = config.prefix
    } else {
        prefix = prefix;
    }
    if (!message.content.startsWith(prefix)) return;

    // if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) {
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Discord.Collection())
        }

        const currentTime = Date.now()
        const timeStamps = cooldowns.get(command.name)
        const cooldownAmount = (command.cooldown) * 1000

        if (timeStamps.has(message.author.id)) {
            const expTime = timeStamps.get(message.author.id) + cooldownAmount
            if (currentTime < expTime) {
                const timeLeft = (expTime - currentTime) / 1000
                const tmotEmbed = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor(`COOLDOWN ❌`, client.user.displayAvatarURL())
                    .setThumbnail(client.user.displayAvatarURL())
                    .setDescription(`Pls wait \`${timeLeft.toFixed(1)}\` s to use \`${command.name}\` !`)
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setTimestamp()
                return message.channel.send({
                    embeds: [tmotEmbed]
                })
            }
        }
        timeStamps.set(message.author.id, currentTime)
        setTimeout(() => {
            timeStamps.delete(message.author.id)
        }, cooldownAmount)

        const momsgEmbed = new Discord.MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`PERMISSIONS ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription("To use AIO Bot")
            .addField("Must add role", `\`SEND MESSAGES\`, \`EMBED LINKS\``)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()

        const upEmbed = new Discord.MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`PERMISSIONS ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription("To use this cmd")
            .addField("You must have", `\`${command.UserPerms || []}\``)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()

        const bpEmbed = new Discord.MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`PERMISSIONS ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription("To use cmd")
            .addField("AIO Bot must have", `\`${command.BotPerms || []}\``)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()

        // if (!message.guild.me.permissions.has(["SEND_MESSAGES", "EMBED_LINKS"])) return message.member.send({
        //     embeds: [momsgEmbed]
        // }).catch(err => console.log(err))

        // if (!message.member.permissions.has(command.UserPerms || [])) return message.channel.send({
        //     embeds: [upEmbed]
        // })

        // if (!message.guild.me.permissions.has(command.BotPerms || [])) return message.channel.send({
        //     embeds: [bpEmbed]
        // })

        if (command.ownerOnly) {

            const ownerEmbed = new Discord.MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`PERMISSIONS ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`Only owner can use this command!`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()

            if (message.author.id !== config.ownerID) return message.channel.send({
                embeds: [ownerEmbed]
            })
        }
        if (command.nodms) {
            const nodmsembed = new Discord.MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`SERVER ONLY ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`<:Error:915231514856390698> This command only can use in server!`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()

            if (!message.guild){
            return message.channel.send({embeds: [nodmsembed]})
            }
        }
        if (command.premiumOnly) {
            const premiumguild = db.get(`premiumsv-${message.guild.id}`)
            const preEmbed = new Discord.MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`PREMIUM ONLY ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`<a:DiamondVip:915186133607002142> This command only premium user/server can use!`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))

            if (message.guild.id !== premiumguild){
            return message.channel.send({embeds: [preEmbed]})
            }
        }


        command.run(client, message, args, prefix)
    }
    }
})

// 12/12


// const client = require('../../AIOBot.js');
// const config = require('../../JSON/config.json');
// const premium = require('../../JSON/premium.json');
// const Discord = require('discord.js');
// const cooldowns = new Map();
// const db = require("quick.db");
// const { commands } = require('../../AIOBot.js');


// client.on('messageCreate', async message => {
//     if (message.author.bot) return;
//     if (!message.guild) return;

//     // PREFIX

//     let prefix = await db.fetch(`prefix-${message.guild.id}`);
//     if (prefix == null) {
//         prefix = config.prefix
//     } else {
//         prefix = prefix;
//     }
//     if (!message.content.startsWith(prefix)) return;
//     if (!message.member) message.member = await message.guild.fetchMember(message);
//     const args = message.content.slice(prefix.length).trim().split(/ +/g);
//     const cmd = args.shift().toLowerCase();
//     if (cmd.length == 0) return;
//     let command = client.commands.get(cmd)
//     if (!command) command = client.commands.get(client.aliases.get(cmd));
//     if (command) {
//         if (!cooldowns.has(command.name)) {
//             cooldowns.set(command.name, new Discord.Collection())
//         }

//         const currentTime = Date.now()
//         const timeStamps = cooldowns.get(command.name)
//         const cooldownAmount = (command.cooldown) * 1000

//         if (timeStamps.has(message.author.id)) {
//             const expTime = timeStamps.get(message.author.id) + cooldownAmount
//             if (currentTime < expTime) {
//                 const timeLeft = (expTime - currentTime) / 1000
//                 const tmotEmbed = new Discord.MessageEmbed()
//                     .setColor("RED")
//                     .setAuthor(`COOLDOWN ❌`, client.user.displayAvatarURL())
//                     .setThumbnail(client.user.displayAvatarURL())
//                     .setDescription(`Pls wait \`${timeLeft.toFixed(1)}\`s to use \`${command.name}\` !`)
//                     .setFooter(client.user.username, client.user.displayAvatarURL())
//                     .setTimestamp()
//                     .setImage(db.get(`banner-${message.guild.id}`))
//                 return message.channel.send({
//                     embeds: [tmotEmbed]
//                 })
        
                
//             }
//         }
//         timeStamps.set(message.author.id, currentTime)
//         setTimeout(() => {
//             timeStamps.delete(message.author.id)
//         }, cooldownAmount)

//         const momsgEmbed = new Discord.MessageEmbed()
//             .setColor('#3d35cc')
//             .setAuthor(`PERMISSIONS ❌`, client.user.displayAvatarURL())
//             .setThumbnail(client.user.displayAvatarURL())
//             .setDescription("Bot is missing permission!")
//             .addField("You need give:", `\`SEND MESSAGES\`, \`EMBED LINKS\` to bot!`)
//             .setFooter(client.user.username, client.user.displayAvatarURL())
//             .setTimestamp()
//             .setImage(db.get(`banner-${message.guild.id}`))

//         const upEmbed = new Discord.MessageEmbed()
//             .setColor('#3d35cc')
//             .setAuthor(`PERMISSIONS ❌`, client.user.displayAvatarURL())
//             .setThumbnail(client.user.displayAvatarURL())
//             .setDescription("You're missing permission!")
//             .addField("You need", `\`${command.UserPerms || []}\``)
//             .setFooter(client.user.username, client.user.displayAvatarURL())
//             .setTimestamp()
//             .setImage(db.get(`banner-${message.guild.id}`))

//         const bpEmbed = new Discord.MessageEmbed()
//             .setColor('#3d35cc')
//             .setAuthor(`PERMISSIONS ❌`, client.user.displayAvatarURL())
//             .setThumbnail(client.user.displayAvatarURL())
//             .setDescription("Bot is missing permission!")
//             .addField("Bot need:", `\`${command.BotPerms || []}\``)
//             .setFooter(client.user.username, client.user.displayAvatarURL())
//             .setTimestamp()
//             .setImage(db.get(`banner-${message.guild.id}`))

//         if (!message.guild.me.permissions.has(["SEND_MESSAGES", "EMBED_LINKS"])) return message.member.send({
//             embeds: [momsgEmbed]
//         }).catch(err => console.log(err))

//         if (!message.member.permissions.has(command.UserPerms || [])) return message.channel.send({
//             embeds: [upEmbed]
//         })

//         if (!message.guild.me.permissions.has(command.BotPerms || [])) return message.channel.send({
//             embeds: [bpEmbed]
//         })
//         if (!cmd) {
//             const nocmd = new Discord.MessageEmbed()
//             .setColor('#3d35cc')
//             .setAuthor(`Wrong command ❌`, client.user.displayAvatarURL())
//             .setThumbnail(client.user.displayAvatarURL())
//             .setDescription(`Can't find your command!, pls user ${prefix}help`)
//             .setFooter(client.user.username, client.user.displayAvatarURL())
//             .setTimestamp()
//             .setImage(db.get(`banner-${message.guild.id}`))
//             return message.channel.send({embeds: [nocmd]})
//         }

//         if (command.ownerOnly) {

//             const ownerEmbed = new Discord.MessageEmbed()
//             .setColor('#3d35cc')
//             .setAuthor(`OWNER ONLY ❌`, client.user.displayAvatarURL())
//             .setThumbnail(client.user.displayAvatarURL())
//             .setDescription(`This command only owner can use!`)
//             .setFooter(client.user.username, client.user.displayAvatarURL())
//             .setTimestamp()
//             .setImage(db.get(`banner-${message.guild.id}`))

//             if (message.author.id !== config.ownerID) return message.channel.send({
//                 embeds: [ownerEmbed]
//             })
//         }
//         // Premium
        
//         if (command.premiumOnly) {
//             const premiumguild = db.get(`premiumsv-${message.guild.id}`)
//             const preEmbed = new Discord.MessageEmbed()
//             .setColor('#3d35cc')
//             .setAuthor(`PREMIUM ONLY ❌`, client.user.displayAvatarURL())
//             .setThumbnail(client.user.displayAvatarURL())
//             .setDescription(`<a:DiamondVip:915186133607002142> This command only premium user/server can use!`)
//             .setFooter(client.user.username, client.user.displayAvatarURL())
//             .setTimestamp()
//             .setImage(db.get(`banner-${message.guild.id}`))

//             if (message.guild.id !== premiumguild){
//             return message.channel.send({embeds: [preEmbed]})
//             }
//         }
//         // Premium

//         command.run(client, message, args, prefix)
//     }
// })