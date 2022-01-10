const { MessageEmbed } = require('discord.js')
const { inspect } = require('util')
const config = require('../../JSON/config.json');
module.exports = {
    name: 'sendallguild',
    aliases: ['evaluates'],
    cooldown: 5,
    category: 'Administrator',
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    description: 'Translate eval into a JS string',
    ownerOnly: true,
    run: async (client, message, args, prefix) => {
        client.guilds.cache.map((guild) => {
            const channel = guild.channels.cache.find(
                (c) => c.type === "GUILD_TEXT" && c.permissionsFor(guild.me).has("SEND_MESSAGES")
            );
            const embed = new MessageEmbed()
            .setTitle(`<:message:923997977104756786> From Bot Owner!`)
            .setDescription(`${args.join(" ")}`)
            .setColor("RANDOM")
            .setFooter(`Sent by ${message.author.username}`)
            channel.send({embeds: [embed]})
        })
    console.log(`Test send all guild!`)
    }
}