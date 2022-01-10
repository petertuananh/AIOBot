const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: "removexp",
    aliases: [`remove-xp`],
    category: 'Levels',
    description: "Remove XP",
    cooldown: 5,
    UserPerms: ["MANAGE_GUILD"],
    BotPerms: ["MANAGE_GUILD"],
    premiumOnly: true,
    run: async (client, message, args, prefix) => {
        const user = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase()) || message.member

        const embed0 = new MessageEmbed()
           .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
            .addField(`Reason:`, `Please indicate who needs to be remove`, false)
            .addField(`Usage:`, `${prefix}addlevel @[tag] [rank]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setColor('RED')
            .setImage(db.get(`banner-${message.guild.id}`))
        if(!user) return message.channel.send({embeds: [embed0]})

        const level = db.fetch(`level-${message.guild.id}-${user.id}`)
        const XP = db.fetch(`xp-${message.guild.id}-${user.id}`)
        // const xpTotal = db.fetch(`xpTotal_${message.author.id}`)
        // const XPneeded = level * 2 * 250 + 250 // Level 1 = 250, Level 2 = 750, Level 3 = 1750, Level 4.....
        const currentXP = XP - 1

        const removexp = args[1]

        const embed1 = new MessageEmbed()
           .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
            .addField(`Reason:`, `Please indicate the experience you want to delete`, false)
            .addField(`Usage:`, `${prefix}removexp  @[tag] [XP]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setColor('RED')
            .setImage(db.get(`banner-${message.guild.id}`))

        const embed2 = new MessageEmbed()
           .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
            .addField(`Reason:`, `\`${removexp}\` must be number`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setColor('RED')
            .setImage(db.get(`banner-${message.guild.id}`))
        
        // const embed3 = new MessageEmbed()
        //    .setAuthor(`[LV] Hệ Thống Cấp Độ 🚀`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
        //     .addField(`Lí do:`, `Bạn không thể xoá nhiều như vậy!`, false)
        //     .setFooter(client.user.username, client.user.displayAvatarURL())
        //     .setTimestamp()
        //     .setColor('RED')

        const embed4 = new MessageEmbed()
           .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
            .addField(`Lí do:`, `You can't remove too much!\nPls use ${prefix}removelevel @[tag] [level] instead`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setColor('RED')
            .setImage(db.get(`banner-${message.guild.id}`))

        if (!removexp) return message.channel.send({embeds: [embed1]})
        else if (isNaN(parseInt(args[1]))) return message.channel.send({embeds: [embed2]})
        // else if (removexp > xpTotal) return message.channel.send({embeds: [embed3]})
        else if (removexp > currentXP) return message.channel.send({embeds: [embed4]})
        else {
            const newxp = parseInt(XP) - parseInt(removexp)
            db.subtract(`xp-${message.guild.id}-${user.id}`, removexp)
            db.subtract(`xpTotal-${message.guild.id}-${user.id}`, removexp)

            const embed5 = new MessageEmbed()
                // .setAuthor(`${user.user.username} Added Money`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setColor('RANDOM')
               .setAuthor(`[LV] Hệ Thống Cấp Độ 🚀`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
                .setDescription(`${user.user.username} just deleted **${removexp}** xp`)
                .addField(`Now level`, `Lv.${level}`)
                .addField(`Now XP`, `Xp.${newxp}`)
                .addField('Sender', `${message.author.username}`)
                .setImage(db.get(`banner-${message.guild.id}`))

            message.channel.send({embeds: [embed5]})
        }
    }
}