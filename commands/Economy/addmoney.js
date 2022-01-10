const { MessageEmbed } = require('discord.js')
const db = require('quick.db') 
const config = require('../../JSON/config.json');
module.exports = {
    name: "addmoney",
    aliases: [`getmoney`, 'setmoney'],
    category: 'Economy',
    description: "Add more money",
    cooldown: 5,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],
    // premiumOnly: true,
    ownerOnly: true,
    run: async (client, message, args, prefix) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        const embed = new MessageEmbed()
            .setAuthor(`[ECO] 💰`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Reason:`, `Please indicate the recipient`, false)
            .addField(`Usage:`, `${prefix}addmoney @[tag] [money]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setColor('RED')
            .setImage(db.get(`banner-${message.guild.id}`))
        if(!user) return message.channel.send({embeds: [embed]}) // if No User Is Mentioned(Using ID/Ping)
         
        const money = args[1]

        const embed1 = new MessageEmbed()
        .setAuthor(`[ECO] 💰`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Reason:`, `Please indicate the amount you want to add`, false)
            .addField(`Usage:`, `${prefix}addmoney @[tag] [money]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setColor('RED')
            .setImage(db.get(`banner-${message.guild.id}`))
        if(!money) return message.channel.send({embeds: [embed1]})

        const embed2 = new MessageEmbed()
        .setAuthor(`[ECO] 💰`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Reason:`, `\`${money}\` must be number!`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setColor('RED')
            .setImage(db.get(`banner-${message.guild.id}`))
        if(isNaN(parseInt(args[1]))) return message.channel.send({embeds: [embed2]})

        db.add(`money-${user.id}`, money) // Same As balance.js // `bank_${user.id}` Keep This If You Want To Add To Bank

        const embed3 = new MessageEmbed()
        // .setAuthor(`${user.user.username} Added Money`, user.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setColor('RANDOM')
        .setAuthor(`[ECO] 💰`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
        .setDescription(`${user}  **${money} | 💸**`)
        .addField('Sender', `${message.author.username}`)
        .setImage(db.get(`banner-${message.guild.id}`))
        message.channel.send({embeds: [embed3]})
    }
}