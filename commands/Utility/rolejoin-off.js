const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
  name : "rolejoin-off",
  aliases: ['rolejoin-disable', 'rjoin-off', 'rjoin-disable'],
  category: 'Utility',
  cooldown: 5,
  description: "Off auto role",
  UserPerms: ["MANAGE_ROLES"],
  BotPerms: ["ADMINISTRATOR"],
  run : async(client, message) => {
    
    await db.delete(`autorole-${message.guild.id}`);

    const successRole = new MessageEmbed()
        .setColor("RED")
        .setAuthor(`[UTILITY] Hệ Thống Tự Động Vai Trò ✅`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
        .setDescription(`Đã tắt vai trò tự động khi vào`)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setImage(db.get(`banner-${message.guild.id}`))

    message.channel.send({ embeds: [successRole] })
  }
}