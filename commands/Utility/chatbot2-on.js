const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: "chatbot.on",
    aliases: ["chatbot-on", "cb-enable", "cb-on"],
    category: 'Utility',
    cooldown: 5,
    description: "Turn on chatting with bots",
    UserPerms: ["ADMINSTRATOR"],
    BotPerms: ["SEND_MESSAGES"],
    premiumOnly: true,
    run: async (client, message, args, prefix) => {
        if (!message.content.startsWith(prefix)) return;

        const AIBot = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        const errorAI = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`CHATBOT ❌`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Reason:`, `AI Chat Bot channel not specified`, false)
            .addField(`Usage:`, `${prefix}chatbot-enable #[channel]`, false)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        if (!AIBot) return message.channel.send({
            embeds: [errorAI]
        })

        await db.set(`chatbot-${message.guild.id}`, AIBot.id);

        const successAI = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`CHATBOT ✅`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setDescription(`Set a messaging channel with ${client.user.username} is ${AIBot.name}`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        message.channel.send({
            embeds: [successAI]
        })
    }
}