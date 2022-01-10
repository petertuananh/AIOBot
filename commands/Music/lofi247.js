const config = require('../../JSON/config.json');
const { QueryType } = require("discord-player")
const player = require("../../events/Bot/player")
const Discord = require('discord.js');
const db = require("quick.db");
module.exports = {
    name: "lofi247",
    aliases: [`playmusic`],
    category: 'Music',
    description: "Play music in voice channel",
    cooldown: 5,
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    premiumOnly: true,
    run: async (client, message, args, prefix) => {

        const songTitle = `${config.lofi247}`

        // const nosongEmbed = new Discord.MessageEmbed()
        // .setAuthor(`MUSIC 🎶`, client.user.displayAvatarURL())
        // .setThumbnail(db.get(`thumb-${message.guild.id}`))
        //     .setColor('#3d35cc')
        //     .setDescription(`<a:dj:915231895866986556> You must give the song title or the song link!`)
        //     .setTimestamp()
        //     .setFooter(client.user.username, client.user.displayAvatarURL())

        // if (!songTitle) return message.channel.send({ embeds: [nosongEmbed] })

        const novcEmbed = new Discord.MessageEmbed()
            .setAuthor(`MUSIC 🎶`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor('#3d35cc')
            .setDescription(`<a:dj:915231895866986556> You must be in a Voice Channel to use this command!`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        if (!message.member.voice.channel) return message.channel.send({ embeds: [novcEmbed] })

        const searchResult = await player.search(songTitle, {
            requestedBy: message.author,
            searchEngine: QueryType.AUTO,
        })

        const queue = await player.createQueue(message.guild, { metadata: message.channel })

        if (!queue.connection) await queue.connect(message.member.voice.channel)

        const smvcEmbed = new Discord.MessageEmbed()
            .setAuthor(`MUSIC 🎶`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor('#3d35cc')
            .setDescription(`<a:dj:915231895866986556> Music currently playing in **${message.guild.me.voice.channel.name}**\nYou need to be on the same voice channel with ${client.user.username} to use this command!`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        if (message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({ embeds: [smvcEmbed] })

        searchResult.playlist
            ? queue.addTracks(searchResult.tracks)
            : queue.addTrack(searchResult.tracks[0])

        if (!queue.playing) await queue.play()

        const playEmbed = new Discord.MessageEmbed()
            .setAuthor(`MUSIC 🎶`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("#3d35cc")
            .setDescription(`<a:dj:915231895866986556> Playing 24/7 Lofi music in ${message.member.voice.channel.name}`)
            // .addField(`<a:dj:915231895866986556> Add song`, `${searchResult.tracks[0]}`)
            // .addField(`<a:dj:915231895866986556> Adder`, `${message.author.username}`)
            // .addField(`<a:dj:915231895866986556> In`, `${message.member.voice.channel.name}`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        message.channel.send({ embeds: [playEmbed] })

    }
}