const {
    MessageEmbed
} = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: "antiswear-on",
    aliases: [`antiswear-enable`, `aw-on`, `aw-enable`],
    category: 'AntiSwear',
    description: "Turn on anti-slander mode",
    cooldown: 5,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["MANAGE_MESSAGES"],
    run: async (client, message, args, prefix) => {

        if (await db.has(`swear-${message.guild.id}`) === false) {

            await db.set(`swear-${message.guild.id}`, true)
            const embed1 = new MessageEmbed()
                .setAuthor(`Anti-badword ✅`, client.user.displayAvatarURL())
                .setThumbnail(db.get(`thumb-${message.guild.id}`))
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setDescription(`Anti-badword mode: on!`)
                .setColor("GREEN")
                .setImage(db.get(`banner-${message.guild.id}`))
            message.channel.send({
                embeds: [embed1]
            })

        } else {
            const embed2 = new MessageEmbed()
                .setAuthor(`Anti-badword ✅`, client.user.displayAvatarURL())
                .setThumbnail(db.get(`thumb-${message.guild.id}`))
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setDescription(`Anti-badword mode: on!`)
                .setColor("GREEN")
                .setImage(db.get(`banner-${message.guild.id}`))
            return message.channel.send({
                embeds: [embed2]
            })
        }
    }
}