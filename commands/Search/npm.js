const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
const config = require('../../JSON/config.json');
module.exports ={
    name: 'npm',
    aliases: ['npmpackage', 'npm-package'],
    category: 'Search',
    description: 'Tìm kiếm package trên npm',
    cooldown: 5,
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],

    run: async (client, message, args, prefix) => {
        const npm = args[0]

        const errorQuery = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`[SEARCH] Hệ Thống Tìm Kiếm NPM Package 🔍`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Lí do:`, `Vui lòng cho biết nội dung bạn cần kiếm`, false)
            .addField(`Cách dùng:`, `${prefix}npm [package]`, false)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())

        if(!npm) return message.channel.send({embeds: [errorQuery]}) // If No Packge In Searched.

        let response
        try {
            response = await fetch('https://api.npms.io/v2/search?q=' + args[0]).then(res => res.json()) // Search For Package
        }
        catch (e) {

            const errorNoRun = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`[SEARCH] Hệ Thống Tìm Kiếm NPM Package 🔍`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Lí do:`, `Đã xảy ra lỗi, hãy thử lại sau`, false)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())

            return message.channel.send({embeds: [errorNoRun]})    
        }
        try {
        const pkg = response.results[0].package
        const embed = new MessageEmbed()
        .setAuthor(`[SEARCH] Hệ Thống Tìm Kiếm NPM Package 🔍`, client.user.displayAvatarURL())
        .setColor('RANDOM')
        .setThumbnail('https://images-ext-1.discordapp.net/external/JsiJqfRfsvrh5IsOkIF_WmOd0_qSnf8lY9Wu9mRUJYI/https/images-ext-2.discordapp.net/external/ouvh4fn7V9pphARfI-8nQdcfnYgjHZdXWlEg2sNowyw/https/cdn.auth0.com/blog/npm-package-development/logo.png')
        .setDescription(`Tên: ${pkg.name}\nMô Tả: ${pkg.description}\nLink: ${pkg.links.npm}`)
        .addField('Tác Giả', pkg.author ? pkg.author.name : 'None') // 'None' Because If No Author Is Their
        .addField('Phiên Bản', pkg.version)
        .addField('Repository', pkg.links.repository ? pkg.links.repository : 'None')  // 'None' Because If No Repository Is Their
        // .addField('Maintainers:-', pkg.maintainers ? pkg.maintainers.map(e => e.username).join(', ') : 'None') // 'None' Because If No Maintainer Are Their
        .addField('Từ Khoá', pkg.keywords ? pkg.keywords.join(', ') : 'None') // 'None' Because If No keyWords Are Their
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.send({embeds: [embed]})
        }
        catch (e) {
            const notFoundNPM = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`[SEARCH] Hệ Thống Tìm Kiếm NPM Package 🔍`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Lí do:`, `Không tìm thấy package mà bạn cần`, false)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            message.channel.send({embeds: [notFoundNPM]}) // If No Packges Found
        }
    }
}