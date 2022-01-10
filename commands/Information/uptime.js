const Discord = require('discord.js')
const config = require('../../JSON/config.json');
const db = require("quick.db");
module.exports = {
    name: 'uptime',
    aliases: ['upt'],
    description: "See bot uptime",
    cooldown: 5,
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    category: 'Information',

    run: async (client, message, args) => {

        let days = Math.floor(client.uptime / 86400000)
        let hours = Math.floor(client.uptime / 3600000) % 24
        let minutes = Math.floor(client.uptime / 60000) % 60
        let seconds = Math.floor(client.uptime / 1000) % 60

        const upEmbed = new Discord.MessageEmbed()
        .setAuthor(`[UPT] Uptime ${client.user.username} ⏱️`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
        .addField(`Uptime`, `\`${days}d : ${hours}h : ${minutes}m : ${seconds}s\` `)
        .setColor('RED')
        .setTimestamp()
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter(client.user.username, client.user.displayAvatarURL())

        message.channel.send({ embeds: [upEmbed] })

    }
}