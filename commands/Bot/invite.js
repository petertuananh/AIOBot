const {
    MessageEmbed
} = require("discord.js")
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    name: "invite",
    aliases: ['inv'],
    category: 'Bot',
    description: "Invite me to your server",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, prefix) => {
        const invite = new MessageEmbed()
            .setAuthor(`[BOT] Invite me to your server 🤝`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("RANDOM")
            .addField(`${client.user.username}`,`[**Click to invite**](${config.invite})`)
            // .addField(`${client.user.username}`,`[**Nhấn Để Mời**](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
            // .addField(`Vote Server VGC`, `https://top.gg/servers/906579412823183411/vote`)
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();

        return message.channel.send({embeds : [invite]})
    }
}