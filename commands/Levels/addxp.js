const {
    MessageEmbed
} = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: "addxp",
    aliases: [`add-xp`],
    category: 'Levels',
    description: "Add xp",
    cooldown: 5,
    UserPerms: ["MANAGE_GUILD"],
    BotPerms: ["MANAGE_GUILD"],
    premiumOnly: true,
    run: async (client, message, args, prefix) => {
        const user = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase()) || message.member

        const embed0 = new MessageEmbed()
            .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .addField(`Reason:`, `Please indicate who needs more experience`, false)
            .addField(`Usage:`, `${prefix}addlevel @[name] [level]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setColor('RED')
            .setImage(db.get(`banner-${message.guild.id}`))
        if (!user) return message.channel.send({
            embeds: [embed0]
        })

        const level = db.fetch(`level-${message.guild.id}-${user.id}`)
        const XP = db.fetch(`xp-${message.guild.id}-${user.id}`)
        const XPneeded = level * 2 * 250 + 250 // Level 1 = 250, Level 2 = 750, Level 3 = 1750, Level 4.....

        const addxp = args[1]

        const embed1 = new MessageEmbed()
            .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .addField(`Reason:`, `Please let us know what experience you would like to add`, false)
            .addField(`Usage:`, `${prefix}addxp  @[tag] [experience]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setColor('RED')

        const embed2 = new MessageEmbed()
            .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .addField(`Reason:`, `\`${addxp}\` must be number`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setColor('RED')

        const embed3 = new MessageEmbed()
            .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .addField(`Reason:`, `You can't add that too much!\nPls use ${prefix}addlevel @[tag] [level] instead`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setColor('RED')

        if (!addxp) return message.channel.send({
            embeds: [embed1]
        })
        else if (isNaN(parseInt(args[1]))) return message.channel.send({
            embeds: [embed2]
        })
        else if (addxp > XPneeded) return message.channel.send({
            embeds: [embed3]
        })
        else {
            const newxp = parseInt(XP) + parseInt(addxp)
            db.add(`xp-${message.guild.id}-${user.id}`, addxp)
            db.add(`xpTotal-${message.guild.id}-${user.id}`, addxp)

            const embed4 = new MessageEmbed()
                // .setAuthor(`${user.user.username} Added Money`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setColor('RANDOM')
                .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
                .setDescription(`${user.user.username} just received **${addxp}** xp`)
                .addField(`Now rank`, `Lv.${level}`)
                .addField(`Now XP`, `Xp.${newxp}`)
                .addField('Sender', `${message.author.username}`)
                .setImage(db.get(`banner-${message.guild.id}`))

            message.channel.send({
                embeds: [embed4]
            })
        }
    }
}