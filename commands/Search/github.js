const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
const config = require('../../JSON/config.json');
const db = require('quick.db')
module.exports ={
    name: 'github',
    aliases: ['gh'],
    category: 'Search',
    description: 'Show info on github',
    cooldown: 5,
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],

    run: async (client, message, args, prefix) => {
        const name = args.join(' ')

        const errorName = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`Github 🔍`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Reason:`, `Please indicate the name you are looking for`, false)
            .addField(`Usage:`, `${prefix}github [user]`, false)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        if(!name) return message.channel.send({embeds: [errorName]}) // If User Is Not Found On GitHub
        const url = `https://api.github.com/users/${name}` // Link From BOT Will Get Info

        let response
        try{
            response = await fetch(url).then(res => res.json())
        }
        catch(e) {
            const errorNoRun = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`Github 🔍`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Reason:`, `An error occurred, please try again later`, false)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

            return message.channel.send({embeds: [errorNoRun]})
        }

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Github 🔍`, client.user.displayAvatarURL())
        .setThumbnail(response.avatar_url)
        .addField(`Username`, `${response.login}`) //(${response.id})
        .addField('Des', response.bio ? response.bio : 'No Bio') // Bio Of User Searched
        .addField('Link', response.html_url)
        .addField('Repositories', response.public_repos.toLocaleString()) // Repos Of User Searched
        .addField('Follower', response.followers.toLocaleString()) // Followers Of User Searched
        // .addField('Following:-', response.following.toLocaleString()) // How Many Following Of User Searched
        // .addField('Email:-', response.email ? response.email : 'No Email') // Email Of User Searched
        // .addField('Company:-', response.company ? response.commands : 'No Company') // Company Of User Searched
        .addField('Location', response.location ? response.location : 'Not Added yet') // Location Of User Searched
        .setImage(db.get(`banner-${message.guild.id}`))
        message.channel.send({embeds: [embed]})
    }
}