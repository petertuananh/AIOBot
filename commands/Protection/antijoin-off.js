const {MessageEmbed} = require('discord.js')
const config = require('../../JSON/config.json');
const db = require('quick.db')

module.exports = {
    name: 'antijoin-off',
    // aliases: ['afking'],
    category: 'Protection',
    description: 'Turn off antijoin mode!',
    cooldown: 5,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],
    premiumOnly: true,
    run: async (client, message, args) => {
        const antiBotOn = new MessageEmbed()
        .setAuthor(`[Protection]`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor('BLUE')
            .setDescription(`:shield: Antijoin mode turned off!`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))
            .setTimestamp();
        // if (message.member.permissions.has("ADMINISTRATOR")) 
        await db.delete(`antijoin-${message.guild.id}`, message.guild.id);
        return message.channel.send({embeds: [antiBotOn]})
    }
}