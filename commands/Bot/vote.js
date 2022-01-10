const {
    MessageEmbed
} = require("discord.js")
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    // name: "vote",
    aliases: ['votesv'],
    category: 'Bot',
    // description: "Vote máy chủ ElainaGB Community",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, prefix) => {
        const vote = new MessageEmbed()
            .setAuthor(`[BOT] Vote máy chủ ✏️`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("RANDOM")
            .addField(`ElainaGB Community`,`[**Nhấn Vào Đây**](https://top.gg/servers/911073413068619776/vote)`)
            // .addField(`Vote Server VGC`, `https://top.gg/servers/906579412823183411/vote`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();

        return message.channel.send({embeds : [vote]})
    }
}