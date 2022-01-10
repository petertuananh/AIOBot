const Discord = require("discord.js");
const ms = require("ms")

module.exports = {
    name: "kick",
    aliases: ["kicked"],
    cooldown: 5,
    description: "Kick out from server",
    UserPerms: ["KICK_MEMBERS"],
    BotPerms: ["KICK_MEMBERS"],
    category: 'Moderation',
    run: async (client, message, args, prefix) => {
        if (!message.content.startsWith(prefix)) return;

        try {

            const embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(`KICK ❌`, client.user.displayAvatarURL())
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                .addField(`Reason:`, `Pls mention the user!`, false)
                .addField(`Usage:`, `${prefix}kick [tag/ID] [reason]`, false)
                .setFooter(client.user.username, client.user.displayAvatarURL())

            if (!args[0]) return message.channel.send({
                embeds: [embed]
            })
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLocaleLowerCase())

            const embed1 = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(`KICK ❌`, client.user.displayAvatarURL())
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                .addField(`Reason:`, `Please provide correct member name or ID`, false)
                .addField(`Usage:`, `${prefix}kick [tag/ID] [reason]`, false)
                .setFooter(client.user.username, client.user.displayAvatarURL())

            if (!member) return message.channel.send({
                embeds: [embed1]
            })

            const embed2 = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(`[KICK] Hệ Thống Quản Trị ❌`, client.user.displayAvatarURL())
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                .addField(`Lí do:`, `Your role is not enough to kick this user!`, false)
                .setFooter(client.user.username, client.user.displayAvatarURL())

            if (message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send({
                embeds: [embed2]
            })

            const embed3 = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(`[KICK] Hệ Thống Quản Trị ❌`, client.user.displayAvatarURL())
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                .addField(`Reason:`, `${client.user.username}'s role is not enough to kick this user!'`, false)
                .setFooter(client.user.username, client.user.displayAvatarURL())

            if (message.guild.me.roles.highest.position <= member.roles.highest.position) return message.send({
                embeds: [embed3]
            })

            const row = new Discord.MessageActionRow().addComponents(

                new Discord.MessageButton()
                .setStyle('DANGER')
                .setCustomId("kickyes")
                .setLabel("Yes"),

                new Discord.MessageButton()
                .setStyle("PRIMARY")
                .setCustomId("kickno")
                .setLabel("Cancel"),

            )

            let kickAskEmbed = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(`KICK ⚠`, client.user.displayAvatarURL())
                .setThumbnail(client.user.displayAvatarURL())
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setDescription("Do you really want to kick this member out?\nIf you don't want to chase anymore, please wait 10 seconds")

            let kickEndEmbed = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(`KICK ❌`, client.user.displayAvatarURL())
                .setThumbnail(client.user.displayAvatarURL())
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setDescription(`Thank you for using this command!`)

            let reason = args.slice(1).join(" ")
            if (!reason) reason = "Pls type reason"

            let kickEmbed = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(`KICK ✅`, client.user.displayAvatarURL())
                .setThumbnail(client.user.displayAvatarURL())
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setDescription(`${member} have kicked with reason: ${reason}`)

            let kickEmbed2 = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(`KICK ✅`, client.user.displayAvatarURL())
                .setThumbnail(client.user.displayAvatarURL())
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setDescription(`Canceled kick`)

            const kickPage = await message.reply({
                embeds: [kickAskEmbed],
                components: [row]
            })

            const col = await kickPage.createMessageComponentCollector({
                componentType: "BUTTON",
                time: ms('10s'),
            })

            col.on('collect', i => {

                if (i.user.id !== message.author.id) return

                if (i.customId === 'kickyes') {

                    member.kick({
                        reason
                    })

                    // member.send(`You've been kicked from **${message.guild.name}** by ${message.author} for : ${reason}`).catch(err => console.log(err))

                    kickPage.edit({
                        embeds: [kickEmbed],
                        components: []
                    })

                } else if (i.customId === 'kickno') {

                    kickPage.edit({
                        embeds: [kickEmbed2],
                        components: []
                    })

                }

            })

            col.on('end', () => {

                kickPage.edit({
                    embeds: [kickEndEmbed],
                    components: []
                })

            })

        } catch (err) {
            console.log(err)
        }

        // try {

        //     if (!args[0]) return message.channel.send('Vui lòng chỉ định một người cần kick !')

        //     var kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        //     if (!kickMember) return message.channel.send(`Không thể kick vì không tìm thấy trong máy chủ này !`);

        //     if (kickMember.id === message.member.id) return message.channel.send("Bạn không thể tự kick bản thân được !")

        //     if (!kickMember.kickable) return message.channel.send(`Bạn không thể kick ${kickMember.user.username}`)
        //     if (kickMember.user.bot) return message.channel.send(`Bạn không thể kick ${kickMember.user.bot}`)

        //     var reason = args.slice(1).join(" ");
        //     try {
        //         const embed = new MessageEmbed()
        //             .setColor("RED")
        //             .setTitle(`😢 ${client.user.username} Kick !`)
        //             .setTimestamp()
        //             .setDescription(`Chào **${kickMember.user.username}, bạn vừa bị kick từ máy chủ ${message.guild.name}\nLí do: ${reason || "Chưa thêm lí do!"}**`)
        //             .setFooter(client.user.username, client.user.displayAvatarURL())
        //         kickMember.send({
        //             embeds: [embed]
        //         }).then(() =>
        //             kickMember.kick()).catch(() => null)
        //     } catch {
        //         kickMember.kick()
        //     }
        //     if (reason) {
        //         const embed2 = new MessageEmbed()
        //             .setColor("GREEN")
        //             .setTitle(`✅ ${client.user.username} Kick !`)
        //             .setTimestamp()
        //             .setFooter(client.user.username, client.user.displayAvatarURL())
        //             .setDescription(`**${kickMember.user.username}** đã bị kick với lí do ${reason}`)
        //         message.channel.send({
        //             embeds: [embed2]
        //         });
        //     } else {
        //         const embed3 = new MessageEmbed()
        //             .setColor("GREEN")
        //             .setTitle(`✅ ${client.user.username} Kick !`)
        //             .setTimestamp()
        //             .setFooter(client.user.username, client.user.displayAvatarURL())
        //             .setDescription(`**${kickMember.user.username}** đã bị kick không cần lí do`)
        //         message.channel.send({
        //             embeds: [embed3]
        //         });
        //     }
        // } catch (e) {
        //     return message.channel.send(`**${e.message}**`)
        // }
    }
}