const config = require('../../JSON/config.json');
const db = require("quick.db");
const {
    MessageEmbed,
    MessageActionRow,
    MessageSelectMenu,
    MessageButton
} = require('discord.js')
module.exports = {
    name: "contact",
    aliases: [`support`],
    category: 'Bot',
    description: `Owner contact`,
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {

        const row = new MessageActionRow().addComponents(
            new MessageButton()
            // .setCustomId('discord')
            .setStyle("LINK")
            .setURL('https://discords.com/bio/p/peter0001')
            .setLabel('Discord'),

            new MessageButton()
            // .setCustomId('youtube')
            .setStyle("LINK")
            .setURL('https://www.youtube.com/channel/UCKjyqJTHQsJQcizfPnDQHoQ')
            .setLabel('Youtube'),

            new MessageButton()
            // .setCustomId('github')
            .setStyle("LINK")
            .setURL('https://github.com/PeterTuanAnh2008/')
            .setLabel('Github')

        )

        const embed = new MessageEmbed()
            .setAuthor(`[BOT] Contact 📞`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("RANDOM")
            .setDescription("You need contact?")
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))
        message.channel.send({embeds: [embed],components: [row]})
    }
}