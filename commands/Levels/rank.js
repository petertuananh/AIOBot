const db = require('quick.db')
const config = require('../../JSON/config.json');
const {
    MessageEmbed,
    MessageAttachment
} = require('discord.js')
const {
    createCanvas,
    loadImage,
    registerFont
} = require('canvas')
const Canvas = require('canvas')
const path = require('path')
module.exports = {
    name: "rank",
    aliases: [`ranking`, `rankme`],
    category: 'Levels',
    description: "Display level information",
    cooldown: 5,
    // UserPerms: ["MANAGE_GUILD"],
    // BotPerms: ["MANAGE_GUILD"],
    premiumOnly: true,
    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.member

        // const target = await db.get(user.id, message.guild.id, true)

        // const embed = new MessageEmbed()
        //     .setTitle(`🚀 ${client.user.username} Levels !`)
        //     .setTimestamp()
        //     .setColor("RED")
        //     .setFooter(client.user.username, client.user.displayAvatarURL())
        //     .setDescription('Có vẻ như bạn chưa có cấp độ!\nĐừng lo lắng ! Hãy tích cực nhắn tin nhiều hơn nhé')

        // const embed = new MessageEmbed()
        //     .setTitle(`🚀 ${client.user.username} Levels !`)
        //     .setTimestamp()
        //     .setColor("RED")
        //     .setFooter(client.user.username, client.user.displayAvatarURL())
        //     .setDescription(`Bot không cần cấp độ`)

        // if (message.author.bot) return message.channel.send({
        //     embeds: [embed]
        // })

        const level = db.fetch(`level-${message.guild.id}-${user.id}`)
        const currentXP = db.fetch(`xp-${message.guild.id}-${user.id}`)
        const XPneeded = level * 2 * 250 + 250 // Level 1 = 250, Level 2 = 750, Level 3 = 1750, Level 4.....

        // Canvas

        registerFont(path.join(__dirname, '../../', 'font/VNF-Lobster.ttf'), { family: 'Lobster' }); // eslint-disable-line max-len
        // registerFont(path.join(__dirname, '..', '..', 'dashboard', 'views', 'fonts', 'NotoEmoji-Regular.ttf'), { family: 'Roboto' }); // eslint-disable-line max-len
        // require(`../../dashboard/views/fonts/`)
        const canvas = createCanvas(1000, 333) // Canvas Size
        const ctx = canvas.getContext('2d') // Making 2D
        let backgroundimage = await loadImage('https://i.imgur.com/iWF0Pv8.jpg')
        ctx.drawImage(backgroundimage, 0, 0, canvas.width, canvas.height) // For Making Image

        // Box For Name And Level
        ctx.beginPath()
        ctx.lineWidth = 4
        ctx.strokeStyle = '#ff0000'
        ctx.globalAlpha = 0.2
        ctx.fillStyle = '#00ffff'
        ctx.fillRect(180, 216, 775, 65)
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.strokeRect(180, 216, 775, 65)
        ctx.stroke

        // XP Bar With Fill
        ctx.fillStyle = '#009933'
        ctx.globalAlpha = 0.6
        ctx.fillRect(200, 216, ((100 / (level * 2 * 250 + 250)) * currentXP) * 7.5, 65) // Filling According To Users Level, Number Same As `const XPneeded`
        ctx.fill()
        ctx.globalAlpha = 1

        // Box For XP Bar
        ctx.beginPath()
        ctx.lineWidth = 4
        ctx.fillStyle = '#00ffff'
        ctx.strokeStyle = '#ff0000'
        ctx.globalAlpha = 0.2
        ctx.fillRect(300, 75, 650, 120)
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.strokeRect(300, 75, 650, 120)
        ctx.stroke()

        // XP/XP Needed
        ctx.font = '35px Lobster'
        ctx.textAlign = 'left'
        ctx.fillStyle = '#ff0000' //FF0000
        ctx.fillText(`${currentXP} / ${XPneeded}`, 600, 260)

        // UserName
        ctx.font = '45px Lobster'
        ctx.textAlign = 'left'
        ctx.fillStyle = '#0033cc' // #00FFFF
        ctx.fillText(`Tên:`, 325, 125)

        ctx.font = '50px Lobster'
        ctx.textAlign = 'left'
        ctx.fillStyle = '#0033cc' // #00FFFF
        ctx.fillText(`${user.user.username}`, 420, 125)

        // Member count
        ctx.font = '40px Lobster'
        ctx.textAlign = 'left'
        ctx.fillStyle = '#0033cc' // #00FFFF
        ctx.fillText(`Tag:`, 325, 175)

        ctx.font = '45px Lobster'
        ctx.textAlign = 'left'
        ctx.fillStyle = '#0033cc' // #00FFFF
        ctx.fillText(`#${user.user.discriminator}`, 430, 175)

        // Xếp hạng
        // ctx.font = '40px Lobster'
        // ctx.fillStyle = '#ffa500'
        // ctx.fillText('Xếp hạng:', 700, 120)

        // let level1 = db.all().filter(data => data.ID.startsWith(`level-${message.guild.id}`)).sort((a, b) => b.data - a.data)

        // var finalLb = ""
        // for (let i = 0; i < level1.length; i++) {

        //     let user1 = client.users.cache.get(level1[i].ID.split('-')[2]).username

        //     finalLb += `${user1}` // 6 Because `money_` Is 5 Digit and 6th Digit Is User ID
        // }

        // console.log(finalLb)

        // What Xếp hạng?
        // ctx.font = '45px Lobster'
        // ctx.fillStyle = '#ffa500'
        // ctx.fillText(`${finalLb}`, 875, 120)

        // Level
        ctx.font = '40px Lobster'
        ctx.fillStyle = '#ffa500'
        ctx.fillText('Level:', 740, 155)

        // What Level?
        ctx.font = '45px Lobster'
        ctx.fillStyle = '#ffa500'
        ctx.fillText(`${level}`, 875, 155)

        ctx.arc(170, 160, 120, 0, Math.PI * 2, true)
        ctx.lineWidth = 6
        ctx.strokeStyle = '00FFFF'
        ctx.stroke()
        ctx.closePath()
        ctx.clip()

        const avatar = await loadImage(user.user.displayAvatarURL({
            format: 'jpg'
        }))
        ctx.drawImage(avatar, 40, 40, 250, 250)

        const attachment = new MessageAttachment(canvas.toBuffer(), 'rank.png')

        // // Just Image
        // message.channel.send(attachment)

        // With Embed

        const embed1 = new MessageEmbed()
            .setAuthor(`RANK 🎖️`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setColor('RANDOM')
            .addField('User', `${user.user.username}`,true)
            // .addField('Xếp hạng', `${finalLb}`)
            .addField('Level', `${level}`, true)
            .addField('XP', `${currentXP} / ${XPneeded}`,true)
            .setImage('attachment://rank.png')
            .setImage(db.get(`banner-${message.guild.id}`))
        // .attachFiles(attachment)
        message.channel.send({
            embeds: [embed1],
            files: [attachment]
        })
    }
}