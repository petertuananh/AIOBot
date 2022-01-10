const {
    MessageEmbed
} = require('discord.js')

const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: "leaderboard-money",
    aliases: [`lb-money`, `bxh-money`, `lbm`],
    category: 'Economy',
    description: "Show server currency board",
    cooldown: 5,
    UserPerms: ["SEND_MESSAGE"],
    BotPerms: ["SEND_MESSAGE"],
    ownerOnly: true,
    run: async (client, message, args, prefix) => {
        
        // let money = db.all().filter(data => data.ID.startsWith(`money`)).sort((a, b) => b.data - a.data) // Get Users Money(Wallet), You Can Change To Bank
        let money = db.all().filter(data => data.ID.startsWith(`money-${message.guild.id}`)).sort((a, b) => b.data - a.data)

        var finalLb = ""
        for (let i = 0; i < money.length; i++) {

            let user = client.users.cache.get(money[i].ID.split('-')[2]).username

            finalLb += `\`Hạng ${i+1} > [${user}] - ${money[i].data} money | 💸\`\n` // 6 Because `money_` Is 5 Digit and 6th Digit Is User ID
        }

        if (money.length < 1) {
            const embed = new MessageEmbed()
            .setAuthor(`ECO 🏆`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setColor('RANDOM')
            .setDescription(`No one is currently in the top rankings`)
            .setImage(db.get(`banner-${message.guild.id}`))
        message.channel.send({embeds: [embed]})
        } else if (money.length = 10 || money.length > 1) {
            const embed2 = new MessageEmbed()
            .setAuthor(`ECO 🏆`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setColor('RANDOM')
            .setDescription(`${finalLb}`)
            .setImage(db.get(`banner-${message.guild.id}`))
        message.channel.send({
            embeds: [embed2]
        })
        }
    }
}