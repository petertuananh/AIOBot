const {MessageEmbed} = require('discord.js');
const { on } = require('events');
const config = require('../../JSON/config.json');
const db = require('quick.db')

module.exports = {
    name: 'antijoin-on',
    // aliases: ['afking'],
    category: 'Protection',
    description: 'Block any user join server!',
    cooldown: 5,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],
    premiumOnly: true,
    run: async (client, message, args) => {
        
        const antiBotOn = new MessageEmbed()
        .setAuthor(`[Protection]`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor('BLUE')
            .setDescription(`:shield: Antijoin mode turned on!`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))
            .setTimestamp();
        // if (message.member.permissions.has("ADMINISTRATOR")) 
        db.set(`antijoin-${message.guild.id}`, message.guild.id);
        return message.channel.send({embeds: [antiBotOn]})
    }
}