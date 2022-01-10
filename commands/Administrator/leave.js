const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: "leave",
    // aliases: ["pre", "vip", "vjp"],
    category: 'Utility',
    cooldown: 5,
    description: "Set premium command for server!",
    // UserPerms: ["ADMINSTRATOR"],
    // BotPerms: ["SEND_MESSAGES"],
    ownerOnly: true,
    nodms: true,
    run: async (client, message, args, prefix) => {
        const Embed = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(`:white_check_mark: See you soon, I left the server!`)
          .setDescription(config.invitelink)
          .setFooter("Requested by @" + message.author.username)

        message.reply({ embeds: [Embed] })
    message.guild.leave()
    },
};