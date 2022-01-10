const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: "premium-give",
    aliases: ["pre", "vip", "vjp"],
    category: 'Utility',
    cooldown: 5,
    description: "Set premium command for server!",
    // UserPerms: ["ADMINSTRATOR"],
    // BotPerms: ["SEND_MESSAGES"],
    ownerOnly: true,
    run: async (client, message, args, prefix) => {
        if (!message.content.startsWith(prefix)) return;

        const AIBot = message.guild || client.guild.cache.get(args[0])
        await db.set(`premiumsv-${message.guild.id}`, AIBot.id);

        const successAI = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`Premium`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .setDescription(`<a:DiamondVip:915230804311953439> Specified premium package for ${message.guild.name}!`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(config.embedbanner)
        message.channel.send({
            embeds: [successAI]
        })
    }
}