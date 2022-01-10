const {
    MessageEmbed
} = require("discord.js");
const db = require("quick.db");
// const client = require("../../ElainaBOT.js")
// const config = require('../../Settings/Configuration/config.json');
// const emoji = require("../../Settings/Configuration/emojis.json");

module.exports = {
    name: "sendallguilds",
    aliases: ['sag'],
    description: `Send message to all guilds`,
    cooldown: 5,
    category: "Owner",
    // usage: `${config.prefix}sendallguilds`,
    options1: `sendallguilds text`,
    ownerOnly: true,

    run: async (client, message, args) => {

        const embed = new MessageEmbed()
            .setColor("RED")
            .setTitle(`<:message:923997977104756786>  From Bot Owner`)
            .setFooter(`Made by ` + client.user.username + ` BOT`)

        const text = args.join(" ")

        if (!text) {
            embed.setDescription(`${client.lang.cmds2.sendallguilds.sendallguilds_Text}`)
            return message.channel.send({
                embeds: [embed]
            })
        }
        client.guilds.cache.map((guild) => {
            const channel = guild.channels.cache.find(
                (c) => c.type === "GUILD_TEXT" && c.permissionsFor(guild.me).has("SEND_MESSAGES")
            );
            embed.setDescription(`${text}`)
            channel.send({
                embeds: [embed]
            })
        })
    }
}