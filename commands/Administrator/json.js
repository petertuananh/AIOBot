const { MessageEmbed } = require('discord.js')
const { inspect } = require('util')
const config = require('../../JSON/config.json');
module.exports = {
    name: 'json',
    // aliases: ['evaluates '],
    cooldown: 5,
    category: 'Administrator',
    // UserPerms: ["ADMINSTRATOR"],
    // BotPerms: ["SEND_MESSAGES"],
    description: 'Convert to a JSON string',
    ownerOnly: true,

    run: async (client, message, args, prefix) => {

        // const channel = client.channels.cache.get('910423759842852864')

        const embed = new MessageEmbed()
        .setAuthor(`Update Soon ❌`, client.user.displayAvatarURL())
        .setThumbnail(config.thumbnail)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("RED")
        .setDescription(`Update Soon`)
        .setImage(config.embedbanner)
        message.channel.send({embeds : [embed]})
    }
}