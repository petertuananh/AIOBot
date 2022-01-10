const {
    MessageEmbed
} = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: "addlevel",
    aliases: [`add-level`, `addlv`],
    category: 'Levels',
    description: "Add level rank",
    cooldown: 5,
    UserPerms: ["MANAGE_GUILD"],
    BotPerms: ["MANAGE_GUILD"],
    premiumOnly: true,
    run: async (client, message, args, prefix) => {
        const user = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase()) || message.member

        const level = db.fetch(`level-${message.guild.id}-${user.id}`)
        const XP = db.fetch(`xp-${message.guild.id}-${user.id}`)

        const embed0 = new MessageEmbed()
            .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .addField(`Reason:`, ` Please indicate who needs to be leveled up`, false)
            .addField(`Usage:`, `${prefix}addlevel @[name] [level]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setColor('RED')
        if (!user) return message.channel.send({
            embeds: [embed0]
        })

        const addlevel = args[1]

        const embed1 = new MessageEmbed()
            .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .addField(`Reason:`, `Please indicate the level you want to add`, false)
            .addField(`Usage:`, `${prefix}addlevel @[name] [level]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setColor('RED')

        const embed2 = new MessageEmbed()
            .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .addField(`Reason:`, `\`${addlevel}\` must be number`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setColor('RED')

        if (!addlevel) return message.channel.send({
            embeds: [embed1]
        })
        else if (isNaN(parseInt(args[1]))) return message.channel.send({
            embeds: [embed2]
        })
        else {
            const newlevel = parseInt(level) + parseInt(addlevel)
            db.add(`level-${message.guild.id}-${user.id}`, addlevel)

            const embed3 = new MessageEmbed()
                // .setAuthor(`${user.user.username} Added Money`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setColor('RANDOM')
                .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
                .setDescription(`${user.user.username} just recieved **${addlevel}** level`)
                .addField(`Now level`, `Lv.${newlevel}`)
                .setImage(db.get(`banner-${message.guild.id}`))
                .addField('Sender', `${message.author.username}`)

            message.channel.send({
                embeds: [embed3]
            })
        }
    }
}