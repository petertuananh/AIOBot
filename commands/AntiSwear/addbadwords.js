const {
    MessageEmbed
} = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: "addbadwords",
    aliases: [`addbws`, `abws`],
    category: 'Moderation',
    description: "Add badwords to block",
    cooldown: 5,
    UserPerms: ["MANAGE_GUILD"],
    BotPerms: ["MANAGE_GUILD"],
    run: async (client, message, args, prefix) => {
        const pog = db.get(`badwords-${message.guild.id}`)
        const word = args.join(' ')

        const embed = new MessageEmbed()
            .setAuthor(`ANTI-BADWORD ❌`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription(`Pls type the word to add!`)
            .addField(`Usage`, `${prefix}addbadwords {badwords}`)
            .setColor("RED")
            .setImage(db.get(`banner-${message.guild.id}`))

        if (!word) return message.channel.send({
            embeds: [embed]
        })

        const embed1 = new MessageEmbed()
            .setAuthor(`ANTI-BADWORD ❌`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription(`\`${word}\` already added!`)
            .setColor("RED")
            .setImage(db.get(`banner-${message.guild.id}`))

        if (pog && pog.find((find) => find.word == word)) return message.channel.send({
            embeds: [embed1]
        })

        const yes = {
            word: word,
            author: message.author.username
        }

        db.push(`badwords-${message.guild.id}`, yes)

        const embed2 = new MessageEmbed()
            .setAuthor(`ANTI-BADWORD :white_check_mark:`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription(`Added \`${word}\` successfully!`)
            .setColor("GREEN")
            .setImage(db.get(`banner-${message.guild.id}`))
        message.channel.send({
            embeds: [embed2]
        })
    }
}