const {MessageEmbed} = require('discord.js');
const { on } = require('events');
const config = require('../../JSON/config.json');
const db = require('quick.db')

module.exports = {
    name: 'antispam-on',
    // aliases: ['afking'],
    category: 'Protection',
    description: 'Mute any user spam!',
    cooldown: 5,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],
    premiumOnly: true,
    run: async (client, message, args) => {
        
        const antiBotOn = new MessageEmbed()
        .setAuthor(`[Protection]`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor('BLUE')
            .setDescription(`:shield: Antispam mode turned on!`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))
            .setTimestamp();
        // if (message.member.permissions.has("ADMINISTRATOR")) 
        db.set(`antispam-${message.guild.id}`, message.guild.id);
        return message.channel.send({embeds: [antiBotOn]})
    }
}