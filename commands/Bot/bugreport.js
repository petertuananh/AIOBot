const {
    MessageEmbed
} = require('discord.js')
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    name: "bugreport",
    aliases: [`bug-report`, `bug-rp`],
    category: 'Bot',
    description: "Report bot bugs here",
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
        const guild = client.channels.cache.get(config.bugreport)

        const bug = args.join(" ");
        const embed = new MessageEmbed()
            .setAuthor(`BOT`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("RANDOM")
            .setDescription(`Pls type the bug!`)
            .addField(`Usage`, `${prefix}bugreport [bug]`)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())
        if (!bug) return message.channel.send({
            embeds: [embed]
        });

        const embed1 = new MessageEmbed()
            .setAuthor(`Bug Report`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("RANDOM")
            .addField('User', message.author.toString(), false)
            .addField('Server', message.guild.name, true)
            .addField('Server ID', message.guild.id, true)
            .addField('Bug', bug, false)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

        const embed2 = new MessageEmbed()
            .setAuthor(`BOT`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("RANDOM")
            .setDescription(`Thanks for reporting the error ${client.user.username} 😥`)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

        message.channel.send({
            embeds: [embed2]
        });


        guild.send({
            embeds: [embed1]
        })
    }
}