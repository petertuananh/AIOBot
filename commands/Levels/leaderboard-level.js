const {
    MessageEmbed
} = require('discord.js')

const db = require('quick.db')

module.exports = {
    name: "leaderboard-level",
    aliases: [`lb-level`, `bxh-level`, `lbl`],
    category: 'Levels',
    description: "Show server level leaderboard",
    cooldown: 5,
    UserPerms: ["SEND_MESSAGE"],
    BotPerms: ["SEND_MESSAGE"],
    premiumOnly: true,
    run: async (client, message, args, prefix) => {

        const embed = new MessageEmbed()
            .setTitle(`❌ ${client.user.username} Update Soon`)
            .setDescription(`Updating!`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setColor("RED")
            .setImage(db.get(`banner-${message.guild.id}`))
        message.channel.send({embeds : [embed]})

        // let level = db.all().filter(data => data.ID.startsWith(`level-${message.guild.id}`)).sort((a, b) => b.data - a.data)

        // var finalLb = ""
        // for (let i = 0; i < level.length; i++) {

        //     let user = client.users.cache.get(level[i].ID.split('-')[2]).username

        //     finalLb += `\`Hạng ${i+1} > [${user}] - ${level[i].data} Cấp độ | 🚀\`\n` // 6 Because `money_` Is 5 Digit and 6th Digit Is User ID
        // }

        // if (level.length < 1) {
        //     const embed = new MessageEmbed()
        //         .setAuthor(`[LV] Bảng Xếp Hạng 🏆`, client.user.displayAvatarURL())
        //         .setThumbnail(config.thumbnail)
        //         .setTimestamp()
        //         .setFooter(client.user.username, client.user.displayAvatarURL())
        //         .setColor('RANDOM')
        //         .setDescription(`Chưa có ai trong bảng xếp hạng`)
        //     if (level.length < 1) return message.channel.send({
        //         embeds: [embed]
        //     })
        // } else if (level.length = 10 | level.length > 1) {
        //     const embed2 = new MessageEmbed()
        //         .setAuthor(`[LV] Bảng Xếp Hạng 🏆`, client.user.displayAvatarURL())
        //         .setThumbnail(config.thumbnail)
        //         .setTimestamp()
        //         .setFooter(client.user.username, client.user.displayAvatarURL())
        //         .setColor('RANDOM')
        //         .setDescription(`${finalLb}`)
        //     message.channel.send({
        //         embeds: [embed2]
        //     })
        // }
    }
}