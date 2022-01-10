const discord = require('discord.js')
const config = require('../../JSON/config.json');
module.exports = {
    name: 'gleave',
    aliases: ['goodbyeleave'],
    cooldown: 5,
    category: 'Administrator',
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    description: 'Goodbye message from owner!',

    run: async (client, message, args) => {

        client.on('guildMemberRemove', member => {

            const goodbyeLeave = new discord.MessageEmbed()
                .setAuthor(`BOT ✋`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setColor('RED')
                .setDescription(`${member.toString()} vừa rời khỏi máy chủ ${client.guilds.cache.get(message.guild.id)}!`)
                .setImage(config.embedbanner)
            message.channel.send({embeds: [goodbyeLeave]})
        })

        client.emit('guildMemberRemove', message.member);
    }
}