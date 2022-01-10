const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: "chatbot.off",
    aliases: ["chatbot-off", "cb-disable", "cb-off"],
    category: 'Utility',
    cooldown: 5,
    description: "Turn off chatting with bots",
    UserPerms: ["ADMINSTRATOR"],
    BotPerms: ["SEND_MESSAGES"],
    run: async (client, message, args, prefix) => {
        if (!message.content.startsWith(prefix)) return;

        await db.delete(`chatbot-${message.guild.id}`);

        const successAI = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`CHATBOT ✅`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setDescription(`Turn off chatting with ${client.user.username} successfully`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        message.channel.send({
            embeds: [successAI]
        })
    }
}