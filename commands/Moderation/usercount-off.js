const Discord = require("discord.js");

const config = require('../../JSON/config.json');
const db = require('quick.db');
module.exports = {
    name: "usercount-off",
    // aliases: [`mcount`, `membercount`],
    category: 'Moderation',
    description: "Off Member count",
    cooldown: 5,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],

    run: async (client, message, args, prefix) => {
            db.delete(`membercountchannel-${message.guild.id}`);
            db.delete(`membercountguild-${message.guild.id}`);
            const successCount = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(`COUNT ✅`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`User count: off!`)
            // .addField(`Note`, `It is recommended to set a voice channel`)
            // .addField(`Member count`, `🗣 | ${message.guild.memberCount} user!`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        message.channel.send({
            embeds: [successCount]
        })
        }
        
}