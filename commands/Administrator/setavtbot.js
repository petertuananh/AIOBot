const { MessageEmbed } = require('discord.js')
const config = require('../../JSON/config.json');
module.exports = {
    name: 'setavtbot',
    aliases: ['newavtbot', 'set-avt-bot', 'new-avt-bot'],
    cooldown: 5,
    category: 'Administrator',
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    description: 'Change bot avatar',
    ownerOnly: true,

    run: async (client, message, args, prefix) => {
        let avatarurl = args.join(" ");

        const embed = new MessageEmbed()
        .setAuthor(`[ADMIN] Đổi avatar ${client.user.username}💠`, client.user.displayAvatarURL())
        .setThumbnail(config.thumbnail)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        .setDescription(`Vui lòng cho biết link ảnh`)
        .addField(`Cách dùng`,`${prefix}setavtbot [URL ảnh]`)
        .setImage(config.embedbanner)
        if (!avatarurl) return message.channel.send({embeds : [embed]})
        client.user.setAvatar(`${avatarurl}`)

        let embed2 = new MessageEmbed()
        .setAuthor(`[ADMIN] Đổi avatar ${client.user.username}💠`, client.user.displayAvatarURL())
        .setThumbnail(config.thumbnail)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        .setDescription(`Đổi avatar cho ${client.user.username} thành công !`)
        .setImage(`${avatarurl}`)
        
        message.channel.send({embeds : [embed2]})
        .catch(err => {
            console.error(err)
            const embed3 = new MessageEmbed()
            .setAuthor(`[ADMIN] Đổi avatar ${client.user.username}💠`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setColor("RED")
            .setDescription(`Đã có lỗi xảy ra !`)
            .addField(`Cách dùng`,`${prefix}setavtbot [URL ảnh]`)
            .setImage(config.embedbanner)
            return message.channel.send({embeds : [embed3]})
        })

    }
}