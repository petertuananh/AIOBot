const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
  name : "autogoodbye",
  aliases : ['agb', 'setgoodbye'],
  category: 'Utility',
  cooldown: 5,
  description: "Auto mode to announce goodbye",
  UserPerms: ["ADMINISTRATOR"],
  BotPerms: ["ADMINISTRATOR"],
  run : async(client, message, args, prefix) => {

    const goodbyeChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

    const errorGoodbye = new MessageEmbed()
    .setColor("RED")
    .setAuthor(`Goodbye ❌`, client.user.displayAvatarURL())
    .setThumbnail(db.get(`thumb-${message.guild.id}`))
    .addField(`Reason:`, `No goodbye channel specified`, false)
    .addField(`Usage:`, `${prefix}autogoodbye #<channel>`, false)
    .setTimestamp()
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setImage(db.get(`banner-${message.guild.id}`))

    if (!goodbyeChannel) return message.channel.send({ embeds: [errorGoodbye] })
    if (!args[1]){
      const Goodbye = new MessageEmbed()
    .setColor("RED")
    .setAuthor(`Goodbye ❌`, client.user.displayAvatarURL())
    .setThumbnail(db.get(`thumb-${message.guild.id}`))
    .addField(`Reason:`, `Goodbye image not specified`, false)
    .addField(`Usage:`, `${prefix}autogoodbye #[channel] [goodbye img link]`, false)
    .setTimestamp()
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setImage(db.get(`banner-${message.guild.id}`))
    return message.channel.send({ embeds: [Goodbye] })
    }
    await db.set(`Goodbye-${message.guild.id}`, args[1]);
    await db.set(`autogoodbye-${message.guild.id}`, goodbyeChannel.id);

    const successGoodbye = new MessageEmbed()
        .setColor("GREEN")
        .setAuthor(`Goodbye ✅`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
        .setDescription(`The goodbye notification channel has been set as ${goodbyeChannel.name}`)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setImage(db.get(`banner-${message.guild.id}`))

    message.channel.send({ embeds: [successGoodbye] })

  }
}