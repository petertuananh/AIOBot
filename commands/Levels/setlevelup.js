const { MessageEmbed } = require('discord.js')
const db = require('quick.db');
const { channels } = require('../../AIOBot');
const config = require('../../JSON/config.json');
module.exports = {
    name: "setlevelup",
    aliases: [`set-level-up`, `setlvup`],
    category: 'Levels',
    description: "Set a notification channel when leveling up",
    cooldown: 5,
    UserPerms: ["MANAGE_GUILD"],
    BotPerms: ["MANAGE_GUILD"],
    // premiumOnly: true,
    run: async (client, message, args, prefix) => {
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        const embed = new MessageEmbed()
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setColor('RED')
            .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
            .setDescription(`Please specify a channel to notify when leveling up`)
            .addField(`Use`, `${prefix}setlevelup [channel id]`)
            .setImage(db.get(`banner-${message.guild.id}`))
        if (!channel) return message.channel.send({embeds : [embed]}) // If No Channel is Provided
        // const embed2 = new MessageEmbed()
        //     .setTimestamp()
        //     .setFooter(client.user.username, client.user.displayAvatarURL())
        //     .setColor('RED')
        //     .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
        //         .setThumbnail(config.thumbnail)
        //     .setDescription(`\`${channel}\` must be number`)
        //     .addField(`Use`, `${prefix}setlevelup [channel]`)
        //     .setImage(db.get(`banner-${message.guild.id}`))
        // if (isNaN(parseInt(args[0]))) return message.channel.send({embeds: [embed2]})

        
        const levelchannel = db.get(`setlevelchannel-${message.guild.id}`) // Get ChatBoChannel
        const embed3 = new MessageEmbed()
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setColor('RED')
            .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
            .setDescription(`Level up notification channel has been set\nNow channel <#${levelchannel}>`)
            .setImage(db.get(`banner-${message.guild.id}`))
        if (levelchannel !== null) return message.channel.send({embeds : [embed3]}) // If Channel is Already Set

        else if (levelchannel === null) { // If Channel is Not Set Then...
            const embed3 = new MessageEmbed()
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setColor('RANDOM')
                .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
                .setDescription(`Level up notification channel is set at ${channel} successfully`)
                .setImage(db.get(`banner-${message.guild.id}`))
            message.channel.send({embeds: [embed3]})
            db.set(`setlevelchannel-${message.guild.id}`, channel.id) // Set Level Up Channel
        }
    }
}