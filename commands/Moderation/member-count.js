const Discord = require("discord.js");
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    // name: "member-count",
    aliases: [`mcount`, `membercount`],
    category: 'Moderation',
    description: "Member count",
    cooldown: 5,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],

    run: async (client, message, args, prefix) => {

        const membercountchannel = args[0]; // Channel Where You Want To Display Member Count // VC Recommended

        const errorIDCount = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`COUNT ❌`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Reason:`, `No voice channel specified to see the number of members`, false)
            .addField(`Usage:`, `${prefix}member-count [channel ID]`, false)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

        if (!membercountchannel) return message.channel.send({
            embeds: [errorIDCount]
        })

        const errorIDCountID = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`COUNT ❌`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Reason:`, `Wrong ID`, false)
            .addField(`Usage:`, `${prefix}member-count [channel ID]`, false)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

        if (isNaN(membercountchannel)) return message.channel.send({
            embeds: [errorIDCountID]
        })

        const updateMembers = (guild) => {
            const channel = guild.channels.cache.get(membercountchannel)
            channel.setName(`〔🗣️〕member : ${guild.memberCount.toLocaleString()}`) // Set Channel Name
        }
        //Updating Member Count WhenEver A User Joins Or Leave 
        client.on('guildMemberAdd', (member) => updateMembers(member.guild)) // Update Member's Count When SomeOne Joins
        client.on('guildMemberRemove', (member) => updateMembers(member.guild)) // Update Member's Count When SomeOne Leaves

        const guild = client.guilds.cache.get(message.guild.id) // Server ID
        updateMembers(guild)

        const successCount = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`COUNT ✅`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setDescription(`The channel showing the number of successful members has been set`)
            .addField(`Note`, `It is recommended to set a voice channel`)
            .addField(`Member count`, `🗣 | ${message.guild.memberCount} user!`)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

        message.channel.send({
            embeds: [successCount]
        })
    }
}