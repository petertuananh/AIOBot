const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms")
const config = require('../../JSON/config.json');
module.exports = {
    name: "unban",
    aliases: ["unbanned"],
    cooldown: 5,
    description: "Unban someone from server",
    UserPerms: ["BAN_MESSAGES"],
    BotPerms: ["BAN_MESSAGES"],
    category: 'Moderation',
    run: async (client, message, args, prefix) => {
        if (!message.content.startsWith(prefix)) return;
        const id = args[0]

        const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`[UNBAN] Hệ Thống Quản Trị ❌`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .setTimestamp()
            .addField(`Lí do:`, `Vui lòng chỉ định ID thành viên cần unband`, false)
            .addField(`Cách dùng:`, `${prefix}unban [ID]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        if (!id) return message.channel.send({
            embeds: [embed]
        })

        const embed1 = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`[UNBAN] Hệ Thống Quản Trị ❌`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .setTimestamp()
            .addField(`Lí do:`, `Please provide correct member name or ID`, false)
            .addField(`Cách dùng:`, `${prefix}unban [ID]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        if (isNaN(id)) return message.channel.send({
            embeds: [embed1]
        })

        const bannedMembers = await message.guild.bans.fetch()

        const embed2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`UNBAN ❌`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .setTimestamp()
            .addField(`Lí do:`, `This member is not banded or unbanned`, false)
            .addField(`Cách dùng:`, `${prefix}unban [ID]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        if (!bannedMembers.find((user) => user.user.id === id)) return message.channel.send({
            embeds: [embed2]
        })

        const row = new Discord.MessageActionRow().addComponents(

            new Discord.MessageButton()
            .setStyle('DANGER')
            .setCustomId("unbanyes")
            .setLabel("Yes"),

            new Discord.MessageButton()
            .setStyle("PRIMARY")
            .setCustomId("unbanno")
            .setLabel("Cancel"),

        )

        let unbanAskEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`UNBAN ⚠`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription("Do you really want to unban this user?\nIf you don't want to unband anymore, please wait 10 seconds")
            .setImage(db.get(`banner-${message.guild.id}`))

        let unbanEndEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`UNBAN ✅`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription(`Thanks for using this command`)
            .setImage(db.get(`banner-${message.guild.id}`))

        let unbanEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`[UNBAN] Hệ Thống Quản Trị ✅`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription(`${id} has been unbanned`)
            .setImage(db.get(`banner-${message.guild.id}`))

        let unbanEmbed2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`UNBAN ✅`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription(`Canceling the unblocking process successfully!`)
            .setImage(db.get(`banner-${message.guild.id}`))

        const unbanPage = await message.channel.send({
            embeds: [unbanAskEmbed],
            components: [row]
        })

        const col = await unbanPage.createMessageComponentCollector({
            componentType: "BUTTON",
            time: ms('10s'),
        })

        col.on('collect', i => {

            if (i.user.id !== message.author.id) return

            if (i.customId === 'unbanyes') {

                message.guild.members.unban(id)

                unbanPage.edit({
                    embeds: [unbanEmbed],
                    components: []
                })

            } else if (i.customId === 'unbanno') {

                unbanPage.edit({
                    embeds: [unbanEmbed2],
                    components: []
                })

            }

        })

        col.on('end', () => {

            unbanPage.edit({
                embeds: [unbanEndEmbed],
                components: []
            })

        })
        // try {

        //     const userID = args[0]

        //     if (!userID) return message.channel.send('Vui lòng chỉ định một người cần unband !')

        //     if (isNaN(userID)) return message.channel.send("Vui lòng cho biết ID người cần unband!")

        //     message.guild.bans.fetch().then(bans => {
        //         if (bans.size == 0) return
        //         let bannedUser = bans.find(b => b.user.id == userID)

        //         if (!bannedUser) return message.channel.send("Thành viên này không bị band!")

        //         var reason = args.slice(1).join(" ");

        //         if (bannedUser) { // If User Is Banned Then BOT Will Unban

        //             try {
        //                 const embed1 = new MessageEmbed()
        //                     .setColor("RED")
        //                     .setTitle(`😁 ${client.user.username} UnBand !`)
        //                     .setTimestamp()
        //                     .setDescription(`Chào **${bannedUser.user}**, bạn vừa được unband từ máy chủ ${message.guild.name}\nLí do: **${reason || "Chưa thêm lí do!"}**`)
        //                     .setFooter(client.user.username, client.user.displayAvatarURL())
        //                 client.users.cache.get().send({
        //                     embeds: [embed1]
        //                 });
        //             } catch (e) {
        //                 console.error(e)
        //             }

        //             if (reason) {
        //                 const embed2 = new MessageEmbed()
        //                     .setColor("GREEN")
        //                     .setTitle(`✅ ${client.user.username} UnBand !`)
        //                     .setTimestamp()
        //                     .setFooter(client.user.username, client.user.displayAvatarURL())
        //                     .setDescription(`**${bannedUser.user}** đã được unband với lí do ${reason}`)
        //                 message.channel.send({
        //                     embeds: [embed2]
        //                 }).then(message.guild.members.unban(bannedUser.user));
        //             } else {
        //                 const embed3 = new MessageEmbed()
        //                     .setColor("GREEN")
        //                     .setTitle(`✅ ${client.user.username} UnBand !`)
        //                     .setTimestamp()
        //                     .setFooter(client.user.username, client.user.displayAvatarURL())
        //                     .setDescription(`**${bannedUser.user}** đã được unband không cần lí do`)
        //                 message.channel.send({
        //                     embeds: [embed3]
        //                 }).then(message.guild.members.unban(bannedUser.user));
        //             }
        //         } else {
        //             message.reply('Không tìm thấy ID thành viên này.') // If User Is Not Banned.
        //         }
        //     })

        // } catch (e) {
        //     return message.channel.send(`**${e.message}**`)
        // }
    }
}