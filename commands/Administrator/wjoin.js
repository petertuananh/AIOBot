const discord = require('discord.js')
const config = require('../../JSON/config.json');
module.exports = {
    name: 'wjoin',
    aliases: ['welcomejoin'],
    cooldown: 5,
    category: 'Administrator',
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    description: 'Welcome message from owner!',

    run: async (client, message, args) => {

        client.on('guildMemberAdd', member => {

            const welcomeJoin = new discord.MessageEmbed()
                .setAuthor(`[ADMIN] Thông báo chào mừng ✋`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setColor('GREEN')
                .setDescription(`${member.toString()} vừa tham gia máy chủ ${client.guilds.cache.get(message.guild.id)}!`)
                .setImage(config.embedbanner)
            message.channel.send({
                embeds: [welcomeJoin]
            })
        })

        client.emit('guildMemberAdd', message.member);
    }
}