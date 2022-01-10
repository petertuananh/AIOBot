
const player = require("../../events/Bot/player")
const Discord = require('discord.js');
const config = require('../../JSON/config.json');
const db = require("quick.db");
module.exports = {
    name: "queue",
    aliases: [`nowplaying`],
    category: 'Music',
    description: "Music playlist in voice channel",
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
            .setDescription(`<a:dj:915231895866986556> No music is playing here`)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

        if (!queue?.playing) return message.channel.send({ embeds: [nosongEmbed] })

        const currentTrack = queue.current

        const tracks = queue.tracks.slice(0, 10).map((m, i) => {
            return `\`${i + 1}.\` [**${m.title}**](${m.url}) | \`${m.requestedBy.username}\``
        })

        const queueEmbed    = new Discord.MessageEmbed()
            .setAuthor(`MUSIC 🎶`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("#3d35cc")
            .addField(`Playing`,`<:MediaPlayer:915399542558576641> | [**${currentTrack.title}**](${currentTrack.url}) | \`${currentTrack.requestedBy.username}\`\n\n`)
            .addField(`List`, `${tracks.join("\n")}${queue.tracks.length > tracks.length ? `\n...${queue.tracks.length - tracks.length === 1 ? `${queue.tracks.length - tracks.length} more songs` : `${queue.tracks.length - tracks.length} more songs`}` : ""}`)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

        return message.channel.send({ embeds: [queueEmbed] })

    }
}