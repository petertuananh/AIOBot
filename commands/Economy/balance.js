const {
    MessageEmbed
} = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: "cash",
    aliases: [`bal`],
    category: 'Economy',
    description: "Check money",
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    // premiumOnly: true,
    // ownerOnly: true,
    run: async (client, message, args, prefix) => {

        const user = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase()) || message.member

        let bal = db.fetch(`money-${user.id}`) // You Can Keep `money_${message.guild.id}_${user.id}` If You Want Different Amount In, Eg:- If I Am In 2 Servers And You Keep `money-${user.id}` I Will Have Same Money In Both Servers But If you Keep `money_${message.guild.id}_${user.id}` Then I Will Have Different Amount In Both Servers
        if (bal === null) bal = '0' // If No Money In Wallet

        // let bank = db.fetch(`bank_${user.id}`) 
        // You Can Keep `bank_${message.guild.id}_${user.id}` If You Want Different Amount In, Eg:- If I Am In 2 Servers And You Keep `bank_${user.id}` I Will Have Same Money In Both Servers But If you Keep `bank_${message.guild.id}_${user.id}` Then I Will Have Different Amount In Both Servers
        // if (bank === null) bank = '0'
        // If No Money In Bank

        const embed = new MessageEmbed()
        .setAuthor(`[ECO] 💰`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setColor('RANDOM')
            .setDescription(`check money`)
            .addField(`money${user.user.username} have`,`money |  ${bal} money | 💸`) 
            .setImage(db.get(`banner-${message.guild.id}`))
            // `💸 Wallet:- **$${bal}**🏦 Bank:- **$${bank}**`
            // .addField(`money ${user.user.username} có`,`💸 | V ${bal} $ \n💳 | Th ${bank} $`) 
        message.channel.send({embeds : [embed]})
    }
}