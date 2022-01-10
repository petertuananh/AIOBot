
const player = require("../../events/Bot/player")
const Discord = require('discord.js');
const config = require('../../JSON/config.json');
const db = require("quick.db");
module.exports = {
    name: "resume",
    aliases: [`resumemusic`],
    category: 'Music',
    description: "Resumes music in voice channel",
    cooldown: 5,
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args, prefix) => {

        const queue = player.getQueue(message.guildId)

        const novcEmbed = new Discord.MessageEmbed()
            .setAuthor(`MUSIC 🎶`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor('#3d35cc')
            .setDescription(`<a:dj:915231895866986556> You must be in a Voice Channel to use this command!`)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

        if (!message.member.voice.channel) return message.channel.send({ embeds: [novcEmbed] })

        const smvcEmbed = new Discord.MessageEmbed()
            .setAuthor(`MUSIC 🎶`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor('#3d35cc')
            .setDescription(`<a:dj:915231895866986556> Music currently playing in **${message.guild.me.voice.channel.name}**\nYou need to be on the same voice channel with ${client.user.username} to use this command!`)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

        if (message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({ embeds: [smvcEmbed] })

        const nosongEmbed = new Discord.MessageEmbed()
            .setAuthor(`MUSIC 🎶`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("#3d35cc")
            .setDescription(`No music is playing here`)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

        if (!queue?.playing) return message.channel.send({ embeds: [nosongEmbed] })

        queue.setPaused(false)

        const pauseEmbed  = new Discord.MessageEmbed()
            .setAuthor(`MUSIC 🎶`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("#3d35cc")
            .setImage(db.get(`banner-${message.guild.id}`))
            .addField(`<a:dj:915231895866986556> Music Resumes`, `${queue.current.title}`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())

        return message.channel.send({ embeds: [pauseEmbed] })

    }
}