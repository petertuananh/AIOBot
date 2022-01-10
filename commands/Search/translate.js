const translate = require('translate-google')
const config = require('../../JSON/config.json');
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
module.exports = {
    // name: "translate",
    aliases: ['translates'],
    category: 'Search',
    description: "Dịch từ ngôn ngữ bất kì",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args, prefix) => {

        if (!message.content.startsWith(prefix)) return
        const txt = args.slice(1).join(" ")
        const lang = args[0]

        const codeLang = new MessageEmbed()
            .setTitle(`📚 ${client.user.username} Translate !`)
            .setAuthor(`TRANSLATE 📚`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("RED")
            .setDescription(`Vui lòng cho biết mã ISO của ngôn nữa`)
            .addField(`Use`, `${prefix}translate [ISO] [nội dung]`)
            .addField(`Ví dụ`, `${prefix}translate vi hello world`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))
            .setTimestamp();

        if (!lang) return message.channel.send({embeds: [codeLang]})

        const noTxT = new MessageEmbed()
        .setAuthor(`[TRANSLATE] Hệ Thống Google Dịch 📚`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("RED")
            .setDescription(`Vui lòng cho biết nội dung cần dịch`)
            .addField(`Use`, `${prefix}translate [ISO] [nội dung]`)
            .addField(`Ví dụ`, `${prefix}translate vi hello world`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))
            .setTimestamp();
        if (!txt) return message.channel.send({embeds: [noTxT]})

        translate(txt, {to : lang}).then(res => {
            const embed = new MessageEmbed()
            .setAuthor(`[TRANSLATE] Hệ Thống Google Dịch 📚`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("RED")
            .setDescription(`Dịch sang ngôn ngữ **${lang}** thành công\nNội dung: **${res}**`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))
            .setTimestamp();

            message.channel.send({embeds: [embed]})
        }).catch(err => {
            const embed1 = new MessageEmbed()
            .setAuthor(`[TRANSLATE] Hệ Thống Google Dịch 📚`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("RED")
            .setDescription(`Chưa thêm từ dịch hoặc mã ISO bị sai`)
            .addField(`Use`, `${prefix}translate [ISO] [nội dung]`)
            .addField(`Ví dụ`, `${prefix}translate vi hello world`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))
            .setTimestamp();

            message.channel.send({embeds: [embed1]})
            console.log(err)
        })
    }
}