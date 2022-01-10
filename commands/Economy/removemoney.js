const { MessageEmbed } = require('discord.js')
const db = require('quick.db') 
const config = require('../../JSON/config.json');
module.exports = {
    name: "removemoney",
    aliases: [`deletemoney`, 'remove-money', 'delete-money'],
    category: 'Economy',
    description: "Remove money",
    cooldown: 5,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],
    // premiumOnly: true,
    ownerOnly: true,
    run: async (client, message, args, prefix) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        const embed = new MessageEmbed()
        .setAuthor(`[ECO] monetary system 💰`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`reason:`, `Please indicate who needs to be deleted`, false)
            .addField(`how to use:`, `${prefix}removemoney @[name] [amount of money]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setColor('RANDOM')

        if(!user) return message.channel.send({embeds: [embed]}) // if No User Is Mentioned(Using ID/Ping)
         
        const money = args[1]

        const embed1 = new MessageEmbed()
        .setAuthor(`[ECO] monetary system 💰`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`reason:`, `Please indicate who needs to be deleted`, false)
            .addField(`how to use:`, `${prefix}removemoney @[name] [amount of money]`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setColor('RED')

        if(!money) return message.channel.send({embeds: [embed1]})

        const embed2 = new MessageEmbed()
            .setTitle(`💰 ${client.user.username} Balance !`)
            .addField(`reason:`, `${money} must be in the form of a number`, false)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setColor('RED')

        if(isNaN(parseInt(args[1]))) return message.channel.send({embeds: [embed2]})

        db.subtract(`money-${user.id}`, money) // Same As balance.js // `bank_${user.id}` Keep This If You Want To Add To Bank

        const embed3 = new MessageEmbed()
        // .setAuthor(`${user.user.username} Added Money`, user.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setColor('RANDOM')
        .setTitle(`💰 ${client.user.username} Balance !`)
        .setDescription(`${user}just deleted **${money}  | 💸**`)
        .addField('Người Xoá', `${message.author.username}`)
        .setImage(db.get(`banner-${message.guild.id}`))
        message.channel.send({embeds: [embed3]})
    }
}