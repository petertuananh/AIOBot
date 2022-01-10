const config = require('../../JSON/config.json');
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const fetch = require('node-fetch')
module.exports ={
    name: 'djs-docs',
    aliases: ['djs', 'djsdocs'],
    category: 'Search',
    description: 'D.JS Docs search',
    cooldown: 5,
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],

    run: async (client, message, args, prefix) => {
        const query = args.slice().join(' ')

        const errorQuery = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`DJS Docs 🔍`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Reason:`, `Please indicate what you are looking for`, false)
            .addField(`Usage:`, `${prefix}djs-docs [content]`, false)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        if(!query) return message.channel.send({embeds: [errorQuery]}) // If No Query Is Searched
        const url = 'https://djsdocs.sorta.moe/v2/embed?src=stable&q=' + query // From Here BOT Will Send Docs. // <v2> Can Be Chnaged To <v1> // <stable> Can Be Changed To <master>

        let response
        try {
            response = await fetch(url).then(res => res.json())
        }
        catch (e) {

            const errorNoRun = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`DJS Docs 🔍`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Reason:`, `Error, pls try again!`, false)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

            return message.channel.send({embeds: [errorNoRun]})    
        }

        const pkg = response
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`DJS Docs 🔍`, client.user.displayAvatarURL())
        .setThumbnail('https://avatars.githubusercontent.com/u/26492485?s=200&v=4') // We Will Keep Discord.JS Thumbnail // You Can Keep Any Thumbnail
        .setAuthor(pkg.author.name, pkg.author.icon_url)
        .setDescription(pkg.description)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        .setImage(db.get(`banner-${message.guild.id}`))
        // .setFooter(`Requested By`)
        // If The Docs Searched Has Fields
        if(pkg.fields) {embed.addFields(pkg.fields)}
        // If The Docs Searched Has Title
        if(pkg.title) {embed.setTitle(pkg.title)}
        message.channel.send({embeds: [embed]})
    }
}