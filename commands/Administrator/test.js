const { MessageEmbed } = require('discord.js')
const fs = require('fs');
const config = require('../../JSON/config.json');
module.exports = {
    name: 'test',
    // aliases: [''],
    cooldown: 5,
    category: 'Administrator',
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    description: 'Test',
    ownerOnly: true,

    run: async (client, message, args, prefix) => {


        // const guild = client.guilds.cache.toJSON()
        // console.log("Thành công")

        // fs.writeFile("./JSON/log.json", JSON.stringify(guild, null, 2), err => {
        //     if (err) throw err;
        //     message.channel.send('message write')
        // })

        const embed = new MessageEmbed()
        .setAuthor(`Update Soon ❌`, client.user.displayAvatarURL())
        .setThumbnail(config.thumbnail)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("RED")
        .setDescription(`Đang cập nhật`)
        .setImage(config.embedbanner)
        message.channel.send({embeds : [embed]}).then(msg => {
    setTimeout(() => msg.delete(), 10000)
})
    }
}