const {
    MessageEmbed
} = require('discord.js')
const db = require('quick.db') // npm i quick.db
const ms = require('parse-ms') // npm i parse-ms
const config = require('../../JSON/config.json');
module.exports = {
    name: "daily",
    aliases: [`newdayly`],
    category: 'Economy',
    description: "Get money every day",
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    // premiumOnly: true,
    // ownerOnly: true,
    run: async (client, message, args, prefix) => {

        const user = message.member
        const timeout = 86400000 // 86400000 = 24 Hours
        const amount = Math.floor(Math.random() * 9000) + 1000 // Min Is 2000 And Max Is 10,000(2000+8000)
        const dailytime = db.fetch(`dailytime-${message.guild.id}-${user.id}`) // Same As balance.js

        if (dailytime !== null && timeout - (Date.now() - dailytime) > 0) { // Check For CoolDown
            const timeleft = ms(timeout - (Date.now() - dailytime))

            const embed = new MessageEmbed()
            .setAuthor(`[ECO] Currency System 💰`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                // .setAuthor(`${user.user.username} Daily Reward`, user.user.displayAvatarURL({
                //     dynamic: true
                // }))
                .addField(`You received the money today`, ` ${timeleft.hours}h ${timeleft.minutes}p ${timeleft.seconds}s `)
                .setColor('RANDOM')
                .setImage(db.get(`banner-${message.guild.id}`))
                // .setDescription(`
                // Already Claimed Daily Coins, Claim Again In **${timeleft.hours} Hours ${timeleft.minutes} Minutes ${timeleft.seconds} Seconds**
                // Default CoolDown Is **24 Hours(1 Day)**
                // `)
            message.channel.send({embeds: [embed]})
        } else {
            const embed1 = new MessageEmbed()
                // .setAuthor(`${user.user.username} Daily Reward`, user.user.displayAvatarURL({
                //     dynamic: true
                // }))
                .setAuthor(`[ECO] Currency System 💰`, client.user.displayAvatarURL())
                .setThumbnail(db.get(`thumb-${message.guild.id}`))
                .setTimestamp()
                .setColor('RANDOM')
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setDescription(`<@${user.id}>  **${amount.toLocaleString()} money** | 💸\n`)
                .setDescription(`<@${user.id}>  **${amount.toLocaleString()} money** | 💸\n`)
                .setImage(db.get(`banner-${message.guild.id}`))
            message.channel.send({embeds: [embed1]})
            db.add(`money-${user.id}`, amount) // Add Amount To User's Wallet
            db.set(`dailytime-${message.guild.id}-${user.id}`, Date.now()) // Set Time When Command Was Used
        }
    }
}