const Discord = require("discord.js");

const config = require('../../JSON/config.json');
const db = require('quick.db');
module.exports = {
    name: "usercount-on",
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
            .setThumbnail(client.user.displayAvatarURL())
            .addField(`Reason:`, `No voice channel specified to see the number of members`, false)
            .addField(`Usage:`, `${prefix}member-count [channel ID]`, false)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        if (!membercountchannel) return message.channel.send({
            embeds: [errorIDCount]
        })

        const errorIDCountID = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`COUNT ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .addField(`Reason:`, `Wrong ID`, false)
            .addField(`Usage:`, `${prefix}member-count [channel ID]`, false)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        if (isNaN(membercountchannel)){
            return message.channel.send({
            embeds: [errorIDCountID]
        })
        }else{
            db.set(`membercountchannel-${message.guild.id}`, args[0]);
            db.set(`membercountguild-${message.guild.id}`, message.guild.id);
            const successCount = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`COUNT ✅`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`The channel showing the number of successful members has been set`)
            .addField(`Note`, `It is recommended to set a voice channel`)
            .addField(`Member count`, `🗣 | ${message.guild.memberCount} user!`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        message.channel.send({
            embeds: [successCount]
        })
        }
        
    }
}