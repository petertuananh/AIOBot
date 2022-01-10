const {MessageEmbed} = require('discord.js');
const { on } = require('events');
const config = require('../../JSON/config.json');
const db = require('quick.db')

module.exports = {
    name: 'antiping-on',
    // aliases: ['afking'],
    category: 'Protection',
    description: 'Mute who is ping everyone 5 times!',
    cooldown: 5,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],
    premiumOnly: true,
    run: async (client, message, args) => {
        
        const antiBotOn = new MessageEmbed()
        .setAuthor(`[Protection]`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor('BLUE')
            .setDescription(`:shield: Anti-ping mode turned on!`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))
            .setTimestamp();
            
        // if (message.member.permissions.has("ADMINISTRATOR")) 
        await db.set(`pingeveryone-${message.guild.id}-${message.author.id}`, message.guild.id);
        if (message.guild.id === db.set(`pingeveryone-${message.guild.id}-${message.author.id}`, message.guild.id)) {
            return message.channel.send({embeds: [antiBotOn]})
        }
        
    }
}