const {
    MessageEmbed
} = require('discord.js')
const config = require('../../JSON/config.json');
module.exports = {
    name: 'restart',
    aliases: ['restart-bot', 'restartbot'],
    cooldown: 5,
    category: 'Administrator',
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    description: 'Restart the bot',
    ownerOnly: true,

    run: async (client, message, args, prefix) => {
        try {
            const embed1 = new MessageEmbed()
                .setAuthor(`BOT 💠`, client.user.displayAvatarURL())
                .setThumbnail(config.thumbnail)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setColor("RED")
                .setDescription(`Đang khởi động lại ${client.user.username}\nVui lòng chờ đợi vài phút để ${client.user.username} kiểm tra lỗi`)
                .setImage(config.embedbanner)
            await message.channel.send({embeds : [embed1]})
            console.log()
            console.log('Restarting...')
            process.exit()
        } catch (err) {
            console.error('Lỗi', err)
        }
    }
}