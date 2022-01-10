const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
  name : "rolejoin-on",
  aliases: ['rolejoin-enable', 'rjoin-on', 'rjoin-enable'],
  category: 'Utility',
  cooldown: 5,
  description: "On auto role",
  UserPerms: ["MANAGE_ROLES"],
  BotPerms: ["ADMINISTRATOR"],
  premiumOnly: true,
  run : async(client, message, args, prefix) => {
    
    const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);

    const errorRole = new MessageEmbed()
        .setColor("RED")
        .setAuthor(`[UTILITY] Hệ Thống Tự Động Vai Trò ❌`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
        .addField(`Lí do:`, `Chưa chỉ định vai trò`, false)
        .addField(`Cách dùng:`, `${prefix}rolejoin-on @[tên vai trò]`, false)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setImage(db.get(`banner-${message.guild.id}`))

    if(!role) return message.channel.send({ embeds: [errorRole] })
    
    await db.set(`autorole-${message.guild.id}`, role.id);

    const successRole = new MessageEmbed()
        .setColor("RED")
        .setAuthor(`[UTILITY] Hệ Thống Tự Động Vai Trò ✅`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
        .setDescription(`Đã đặt vai trò ${role.name} tự động khi vào`)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setImage(db.get(`banner-${message.guild.id}`))

    message.channel.send({ embeds: [successRole] })
  }
}