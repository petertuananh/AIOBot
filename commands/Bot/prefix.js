const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

const config = require('../../JSON/config.json');
module.exports = {
    name: 'setprefix',
    aliases: ['prefix', 'changeprefix', 'newprefix'],
    category: 'Bot',
    cooldown: 5,
    description: "Change Prefix",
    UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return; //add this line to every commands

    const newprefix = args[0]

    const errorPrefix = new MessageEmbed()
        .setColor("RED")
        .setAuthor(`[BOT] Change Prefix ❌`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
        .addField(`Reason:`, `No prefix specified`, false)
        .addField(`Usage:`, `${prefix}setprefix [new prefix]`, false)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL())

    if(!newprefix) return message.reply({ embeds: [errorPrefix] })

    const errorlongPrefix = new MessageEmbed()
        .setColor("RED")
        .setAuthor(`BOT ❌`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
        .addField(`Reason:`, `Prefix too long! To not too 2 character`, false)
        .addField(`Usage:`, `${prefix}setprefix [prefix]`, false)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL())

    if(newprefix.length > 2) return message.channel.send({ embeds: [errorlongPrefix] })

    const successPrefix = new MessageEmbed()
        .setColor("RED")
        .setAuthor(`Change Prefix ✅`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
        .setDescription(`Set your new prefix ${newprefix} for ${client.user.username} successfully!`)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL())

    message.channel.send({ embeds: [successPrefix] })
    db.set(`prefix-${message.guild.id}`, newprefix);
 }
}