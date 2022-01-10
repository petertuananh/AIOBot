const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: "removelevel",
    aliases: [`remove-level`, `removelv`],
    category: 'Levels',
    description: "Remove rank",
    cooldown: 5,
    UserPerms: ["MANAGE_GUILD"],
    BotPerms: ["MANAGE_GUILD"],
    premiumOnly: true,
    run: async (client, message, args, prefix) => {
        const user = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase()) || message.member

        const embed0 = new MessageEmbed()
           .setAuthor(`[LV] Hệ Thống Cấp Độ 🚀`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
            .addField(`Lí do:`, `Vui lòng cho biết người cần được xoá cấp độ`, false)
            .addField(`Cách dùng:`, `${prefix}addlevel @[tên] [cấp độ]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setColor('RED')
        if(!user) return message.channel.send({embeds: [embed0]})

        const level = db.fetch(`level-${message.guild.id}-${user.id}`)
        const XP = db.fetch(`xp-${message.guild.id}-${user.id}`)

        const removelevel = args[1]

        const embed1 = new MessageEmbed()
           .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
            .addField(`Reason:`, `Please indicate the level you want to delete`, false)
            .addField(`Usage:`, `${prefix}removelevel @[tag] [level]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setColor('RED')

        const embed2 = new MessageEmbed()
           .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
            .addField(`Reason:`, `\`${removelevel}\` must be number`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setColor('RED')

        if (!removelevel) return message.channel.send({embeds: [embed1]})
        else if (isNaN(parseInt(args[1]))) return message.channel.send({embeds: [embed2]})
        else {
            const newlevel = parseInt(level) - parseInt(removelevel)
            db.subtract(`level-${message.guild.id}-${user.id}`, removelevel)

            const embed3 = new MessageEmbed()
                // .setAuthor(`${user.user.username} Added Money`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setColor('RANDOM')
               .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
                .setDescription(`${user.user.username} just deleted **${removelevel}** level`)
                .addField(`Now level`, `Lv.${newlevel}`)
                .addField('Sender', `${message.author.username}`)
                .setImage(db.get(`banner-${message.guild.id}`))

            message.channel.send({embeds: [embed3]})
        }
    }
}