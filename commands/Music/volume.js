
const player = require("../../events/Bot/player")
const Discord = require('discord.js');
const config = require('../../JSON/config.json');
const db = require("quick.db");
module.exports = {
    name: "volume",
    aliases: [`vol`],
    category: 'Music',
    description: "Adjust volume when playing music in voice channel",
    cooldown: 5,
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args, prefix) => {

        const volumePercentage = args[0]
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

        if (message.member.voice.channel.id !== message.guild.me.voice.channel.id) 
        return message.channel.send({ embeds: [smvcEmbed] })

        const volEmbed = new Discord.MessageEmbed()
            .setAuthor(`MUSIC 🎶`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("#3d35cc")
            .addField(`<a:dj:915231895866986556> Current volume`, `🔊 | ${queue.volume}%`)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

        if (!volumePercentage) return message.reply({ embeds: [volEmbed] })

        const volerrEmbed = new Discord.MessageEmbed()
            .setColor("#3d35cc")
            .setAuthor(`MUSIC 🎶`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setDescription(`<a:dj:915231895866986556> Edit volume level higher \`1\``)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

        if (volumePercentage < 0) return message.reply({ embeds: [volerrEmbed] })
        if(isNaN(parseInt(args[0]))) return message.reply({ embeds: [volerrEmbed] })
        const nosongEmbed = new Discord.MessageEmbed()
            .setAuthor(`MUSIC 🎶`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("#3d35cc")
            .setDescription(`<a:dj:915231895866986556> No music is playing here`)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

        if (!queue?.playing) return message.channel.send({ embeds: [nosongEmbed] })

        queue.setVolume(volumePercentage)

        const volsetEmbed   = new Discord.MessageEmbed()
            .setAuthor(`MUSIC 🎶`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("#3d35cc")
            .addField(`<a:dj:915231895866986556> Edit the volume to`, `${volumePercentage}%`)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

        return message.channel.send({ embeds: [volsetEmbed] })

    }
}