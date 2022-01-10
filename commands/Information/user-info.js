const {MessageEmbed} = require('discord.js')
const db = require("quick.db");
const moment = require('moment') // npm i moment
const axios = require('axios')
moment.locale('ENG')
const config = require('../../JSON/config.json');
const { url } = require('inspector');
const { setUncaughtExceptionCaptureCallback } = require('process');
module.exports = {
    name: 'userinfo',
    aliases: ['userinfo', 'memberinfo', 'member-info', 'whois'],
    category: 'Information',
    description: 'See user infomation',
    cooldown: 5,
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],

    run: async (client, message, args, prefix) => {
        const fetch = require('node-fetch')

let uid = "user_id"



let receive = ''
let banner = 'https://cdn.discordapp.com/attachments/829722741288337428/834016013678673950/banner_invisible.gif' // invisible image ( you can change the link if you want )
        const member = message.mentions.members.first() || message.member
        
            




        // For Status Of User, We Will Use Emoji To Look Nice
        const status = {
            online: 'Online 🟢',
            idle: 'Idle 🟡',
            dnd: 'Busy 🔴',
            offline: 'Offline ⚫'
        }

        const noEveryOne = member.roles.cache.map(role => role.toString())

		// const findRole = message.guild.roles.cache.find(x => x.name === "@everyone")
    //     if (!findRole != "@everyone") return;
        
        const d = member.user.createdAt.toLocaleDateString("vi-VN")
        const dmy = new Date();
        const creadtedAt = member.user.createdAt
        const joinedAt = member.joinedAt

        const [month, day, year] = [creadtedAt.getMonth()+1, creadtedAt.getDate(), creadtedAt.getFullYear()];
        const [month1, day1, year1] = [joinedAt.getMonth()+1, joinedAt.getDate(), joinedAt.getFullYear()];
        // const hieu = dmy.getMonth()+1 - month
        // const hieu2 = dmy.getMonth()+1 - month

        const c = `${day}/${month}/${year}`
        const j = `${day1}/${month1}/${year1}`

        // const showPermHas = member.permissions.toArray()
        // const bannerUrl = await getUserBannerUrl(message.author.id, {
        //     size: 4096
        //  });
        axios.get(`https://discord.com/api/users/${member.user.id}`, {
            headers: {
                Authorization: `Bot ${config.token}`,
            },
          })
          .then((res) => {



            const { banner, accent_color } = res.data;
            if(banner){
                const extension = banner.startsWith("a_") ? ".gif" : ".png";
            
            const urlb = `https://cdn.discordapp.com/banners/${member.id}/${banner}${extension}?size=1024`
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`[USER] Thông tin của ${member.user.username} 🖊️`, client.user.displayAvatarURL())
            .setThumbnail(member.user.displayAvatarURL())
            // .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
            .addField('✏ Info', `**・Name: **\`${member.user.username}\`\n**・Tags: **\`#${member.user.discriminator}\`\n**・ID: **\`${member.id}\``,true) // We Use Emojis Also
            .addField('⚡ Roles', `${noEveryOne}`, true)
            .addField('🏷 **User ID**', `**・${member.id}**`)
            .addField('💼 Others', `**・Status: **\`${status[member.presence.status]}\`\n**・Create at: **\`${c}\`\n**・Joined: **\`${j}\``)
            // .addField('🎓 **Tham Gia Discord**', `**・${c} (${hieu} tháng trước)**`)
            // .addField('💼 **Tham Gia Máy Chủ**', `**・${j} (${hieu2} tháng trước)**`)
            .addField('🌠 **Voice/stage channel**', member.voice.channel ? `<a:here:907106477867687956>` + `<#${member.voice.channel.id}>` : 'Currently Not On Any Voice/stage Channel')
            .setTimestamp()
            // .setImage(bannerUrl)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(urlb)
        // Add More Fields If Want
        message.channel.send({
            embeds: [embed]
        })
    }else{
        const Embed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`[USER] Thông tin của ${member.user.username} 🖊️`, client.user.displayAvatarURL())
            .setThumbnail(member.user.displayAvatarURL())
            // .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
            .addField('✏ Info', `**・Name: **\`${member.user.username}\`\n**・Tags: **\`#${member.user.discriminator}\`\n**・ID: **\`${member.id}\``,true) // We Use Emojis Also
            .addField('⚡ Roles', `${noEveryOne}`, true)
            .addField('🏷 **User ID**', `**・${member.id}**`)
            .addField('💼 Others', `**・Status: **\`${status[member.presence.status]}\`\n**・Create at: **\`${c}\`\n**・Joined: **\`${j}\``)
            // .addField('🎓 **Tham Gia Discord**', `**・${c} (${hieu} tháng trước)**`)
            // .addField('💼 **Tham Gia Máy Chủ**', `**・${j} (${hieu2} tháng trước)**`)
            .addField('🌠 **Voice/stage channel**', member.voice.channel ? `<a:here:907106477867687956>` + `<#${member.voice.channel.id}>` : 'Currently Not On Any Voice/stage Channel')
            .setTimestamp()
            // .setImage(bannerUrl)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            // .setImage(urlb)
        // Add More Fields If Want
        message.channel.send({
            embeds: [Embed]
        })
    }
    })

    }
}