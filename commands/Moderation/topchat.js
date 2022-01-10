const {
    MessageEmbed
} = require('discord.js')

const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: "leaderboard-chat",
    aliases: [`lb-chat`, `bxh-chat`, `lbc`, `topchat`],
    category: 'Economy',
    description: "Show server currency warn board",
    cooldown: 5,
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args, prefix) => {
        
        // let money = db.all().filter(data => data.ID.startsWith(`money`)).sort((a, b) => b.data - a.data) // Get Users Money(Wallet), You Can Change To Bank
        let money = db.all().filter(data => data.ID.startsWith(`topchat.${message.guild.id}`)).sort((a, b) => b.data - a.data)

        var finalLb = ""
        for (let i = 0; i < money.length; i++) {

            let user = client.users.cache.get(money[i].ID.split('.')[2]).username

            finalLb += `Top ${i+1} > [${user}] - ${money[i].data} messages | <:vngc_mess:929938104675094588> \n` // 6 Because `money_` Is 5 Digit and 6th Digit Is User ID
        }

        if (money.length < 1) {
            const embed = new MessageEmbed()
            .setTitle(`TOP CHAT <:message:929596897386180628>`)
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setTimestamp()
            .setColor('RANDOM')
            .setDescription(`No one is currently in the top chat rankings`)
            .setImage(db.get(`banner-${message.guild.id}`))
        message.channel.send({embeds: [embed]})
        } else if (money.length = 10 || money.length > 1) {
            const embed2 = new MessageEmbed()
            .setTitle(`TOP CHAT <:message:929596897386180628>`)
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setTimestamp()
            .setColor('RANDOM')
            .setDescription(`${finalLb}`)
            .setImage(db.get(`banner-${message.guild.id}`))
        message.channel.send({
            embeds: [embed2]
        })
        }
    }
}