const {
    MessageEmbed
} = require('discord.js')
const db = require('quick.db')
const client = require('../../AIOBot.js');
const config = require('../../JSON/config.json');
client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (!message.guild) return;
    const randomXP = Math.floor(Math.random() * 22) + 8; // Min = 8 , Max = 22 (8 + 22)
    db.add(`xp-${message.guild.id}-${message.author.id}`, randomXP)
    db.add(`xpTotal-${message.guild.id}-${message.author.id}`, randomXP)
    const level = db.fetch(`level-${message.guild.id}-${message.author.id}`)
    const XP = db.fetch(`xp-${message.guild.id}-${message.author.id}`)
    const XPneeded = level * 2 * 250 + 250
    // Level 1 = 750, Level 2 = 1250, Level 3 = 1500, Level 4.....
    // lv 1 = 1 -> lv 2 = 2 * 2 * 250 + 250 = 750
    // lv3 = 3 * 2 * 250 + 250 = 750

    if (XPneeded < XP) {
        const newLevel = db.add(`level-${message.guild.id}-${message.author.id}`, 1)
        const setlevelchannel = db.get(`setlevelchannel-${message.guild.id}`)
        db.subtract(`xp-${message.guild.id}-${message.author.id}`, XPneeded)
        const channel = message.guild.channels.cache.get(setlevelchannel)
        if (channel) {
            const embed1 = new MessageEmbed()
            .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setColor("RANDOM")
                .setDescription(`:tada: ${message.author} have reached **Lv.${newLevel}** ! :tada:`)
            channel.send({ embeds: [embed1]})
        } else {
            const embed2 = new MessageEmbed()
                .setAuthor(`LV 🚀`, client.user.displayAvatarURL())
                .setThumbnail(db.get(`thumb-${message.guild.id}`))
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setColor("RANDOM")
                .setDescription(`:tada: ${message.author} have reached **Lv.${newLevel}** ! :tada:`)
            return message.channel.send({embeds: [embed2]})
        }
    }

    // xp(message)
    //     const user = message.member || message.mentions.members.first()
    //     const embed = new MessageEmbed()
    //         .setTitle(`🚀 ${client.user.username} Levels !`)
    //         .setTimestamp()
    //         .setFooter(client.user.username, client.user.displayAvatarURL())
    //         .setDescription('Có vẻ như bạn chưa có cấp độ!\nĐừng lo lắng ! Hãy tích cực nhắn tin nhiều hơn nhé')

    //     if (user.bot) return message.channel.send({embeds: [embed]})

    // // Rank System
    // function xp(message) {
    //     if (message.author.bot) return // No XP For Bots
    //     const randomXP = Math.floor(Math.random() * 9) + 1 // Minimum = 9, Maximum = 30(100+150)
    //     db.add(`xp_${message.guild.id}_${message.author.id}`, randomXP)
    //     db.add(`xpTotal_${message.guild.id}_${message.author.id}`, randomXP)
    //     const level = db.fetch(`level_${message.guild.id}_${message.author.id}`)
    //     const XP = db.fetch(`xp_${message.guild.id}_${message.author.id}`)
    //     const XPneeded = level * 2 * 250 + 250 // Level 1 = 250, Level 2 = 750, Level 3 = 1750, Level 4.....

    //     // Send Level Up Message
    //     if (XPneeded < XP) {
    //         const newLevel = db.add(`level_${message.guild.id}_${message.author.id}`, 1)
    //         const setlevelchannel = db.fetch(`setlevelchannel_${message.guild.id}`)
    //         db.subtract(`xp_${message.guild.id}_${message.author.id}`, XPneeded)
    //         const channel = message.guild.channels.cache.get(setlevelchannel)
    //         if (channel) {
    //             channel.send(`${message.author}, You Have Leveled Up To **${newLevel}**`)
    //         } else {
    //             return message.channel.send(`${message.author}, You Have Leveled Up To **${newLevel}**`)
    //         }
    //     }

    // }
})