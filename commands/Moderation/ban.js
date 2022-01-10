const Discord = require("discord.js");
const ms = require("ms")
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    name: "ban",
    aliases: ["banned"],
    cooldown: 5,
    description: "Ban someone",
    UserPerms: ["BAN_MEMBERS"],
    BotPerms: ["BAN_MEMBERS"],
    category: 'Moderation',
    run: async (client, message, args, prefix) => {
        if (!message.content.startsWith(prefix)) return;

        const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`BAN ❌`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .addField(`Lí do:`, `Please provide the user!`, false)
            .addField(`Cách dùng:`, `${prefix}ban [tên/ID] [Lí Do]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())

        if (!args[0]) return message.channel.send({
            embeds: [embed]
        })

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLocaleLowerCase())

        const embed1 = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`BAN ❌`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setTimestamp()
            .addField(`Reason:`, `Please provide correct member name or ID`, false)
            .addField(`Usage:`, `${prefix}ban [tag/ID] [reason]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        if (!member) return message.channel.send({
            embeds: [embed1]
        })

        const embed2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`BAN ❌`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setTimestamp()
            .addField(`Reason:`, `Your role is not enough to ban this user`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        if (message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send({ embeds: [embed2] })

        const embed3 = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`BAN ❌`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setTimestamp()
            .addField(`Reason:`, `Bot's role is not enough to ban this user`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        if (message.guild.me.roles.highest.position <= member.roles.highest.position) return message.send({ embeds: [embed3] })

        const row = new Discord.MessageActionRow().addComponents(

            new Discord.MessageButton()
            .setStyle('DANGER')
            .setCustomId("banyes")
            .setLabel("Yes"),

            new Discord.MessageButton()
            .setStyle("PRIMARY")
            .setCustomId("banno")
            .setLabel("Cancel"),

        )

        let banAskEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`BAN ⚠`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription("Do you really want to ban this user?\nIf you don't want to ban anymore, please wait 10s")
            .setImage(db.get(`banner-${message.guild.id}`))

        let banEndEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`BAN ✅`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription(`Thanks for using this command`)
            .setImage(db.get(`banner-${message.guild.id}`))

        let reason = args.slice(1).join(" ")
        if (!reason) reason = "Pls type reason"

        let banEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`BAN ✅`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription(`${member} banned with reason : ${reason}`)
            .setImage(db.get(`banner-${message.guild.id}`))

        let banEmbed2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`BAN ✅`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription(`Canceled ban!`)
            .setImage(db.get(`banner-${message.guild.id}`))

        const banPage = await message.reply({
            embeds: [banAskEmbed],
            components: [row]
        })

        const col = await banPage.createMessageComponentCollector({
            componentType: "BUTTON",
            time: ms('10s'),
        })

        col.on('collect', i => {

            if (i.user.id !== message.author.id) return

            if (i.customId === 'banyes') {

                member.ban({
                    reason
                })

                banPage.edit({
                    embeds: [banEmbed],
                    components: []
                })

            } else if (i.customId === 'banno') {

                banPage.edit({
                    embeds: [banEmbed2],
                    components: []
                })

            }

        })

        col.on('end', () => {

            banPage.edit({
                embeds: [banEndEmbed],
                components: []
            })

        })

        // try {

        //     if (!args[0]) return message.channel.send('Vui lòng chỉ định một người cần band !')

        //     var bandMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        //     if (!bandMember) return message.channel.send(`Không thể band vì không tìm thấy trong máy chủ này !`);

        //     if (bandMember.id === message.member.id) return message.channel.send("Bạn không thể tự band bản thân được !")

        //     if (!bandMember.bannable) return message.channel.send(`Bạn không thể band ${bandMember.user.username}`)
        //     if (bandMember.user.bot) return message.channel.send(`Bạn không thể band ${bandMember.user.bot}`)

        //     var reason = args.slice(1).join(" ");
        //     try {
        //         const embed = new MessageEmbed()
        //             .setColor("RED")
        //             .setTitle(`😢 ${client.user.username} Band !`)
        //             .setTimestamp()
        //             .setDescription(`Chào **${bandMember.user.username}**, bạn vừa bị ban từ máy chủ ${message.guild.name}\nLí do: **${reason || "Chưa thêm lí do!"}**`)
        //             .setFooter(client.user.username, client.user.displayAvatarURL())
        //         bandMember.send({
        //             embeds: [embed]
        //         }).then(() =>
        //             bandMember.ban()).catch(() => null)
        //     } catch {
        //         bandMember.ban()
        //     }
        //     if (reason) {
        //         const embed2 = new MessageEmbed()
        //             .setColor("GREEN")
        //             .setTitle(`✅ ${client.user.username} Band !`)
        //             .setTimestamp()
        //             .setFooter(client.user.username, client.user.displayAvatarURL())
        //             .setDescription(`**${bandMember.user.username}** đã bị band với lí do ${reason}`)
        //         message.channel.send({
        //             embeds: [embed2]
        //         });
        //     } else {
        //         const embed3 = new MessageEmbed()
        //             .setColor("GREEN")
        //             .setTitle(`✅ ${client.user.username} Band !`)
        //             .setTimestamp()
        //             .setFooter(client.user.username, client.user.displayAvatarURL())
        //             .setDescription(`**${bandMember.user.username}** đã bị band không cần lí do`)
        //         message.channel.send({
        //             embeds: [embed3]
        //         });
        //     }
        // } catch (e) {
        //     return message.channel.send(`**${e.message}**`)
        // }
    }
}