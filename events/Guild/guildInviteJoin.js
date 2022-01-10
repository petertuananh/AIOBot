const client = require('../../AIOBot.js');
const discord = require('discord.js');
const config = require('../../JSON/config.json');
const db = require('quick.db')
client.on('guildCreate', (guild) => {
    const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))

    const newGuildEmbed = new discord.MessageEmbed()
    .setColor("RED")
    // .setAuthor('Máy chủ : ' + guild.name, guild.iconURL({
    //     dynamic: true
    // }))
    .setAuthor(`[BOT] Thank you for invited ${client.user.username} 🥰`, client.user.displayAvatarURL())
    // .setThumbnail(db.get(`thumb-${guild.id}`))
    .addField(`Prefix`, `\`${config.prefix}\``, true)
    .addField(`Use`, `\`${config.prefix}help\``, true)
    .addField(`If you have any problem`, `Contact | <@${config.ownerID}>`, true)
    // .addField(`${client.user.username} gửi lời nói thay lời DiozVN muốn nói`, `Chúc bạn một ngày tốt lành và vui vẻ! 😘♥`)
    // .addField(`${client.user.username} From Peter Tuan Anh with luv!`)
    .setTimestamp()
    .setThumbnail(guild.iconURL())
    .setImage(config.embedbanner)
    .setFooter(client.user.username, client.user.displayAvatarURL());

    channel.send({ embeds: [newGuildEmbed]});
    const GuildEmbed = new discord.MessageEmbed()
    .setTitle(`🥰 They add ${client.user.username} to the server`)
    .setThumbnail(guild.iconURL)
    .addField(`**Server Name**`, `\`\`\`${guild.name}\`\`\``)
    .addField(`**Server ID**`, `\`\`\`${guild.id}\`\`\``)
    .addField(`**Other**`, `\`\`\`+ ${guild.memberCount} users\`\`\``)
    // .addFields(`**Total**`, 
    // `\`\`\`
    // ${client.guilds.cache.size} servers
    // ${client.channels.cache.size} channels
    // ${client.guilds.cache.map((guild) => guild.memberCount).reduce((p, c) => p + c)} users
    // \`\`\``)
    // .addField(`**Invite link**`, `\`\`\`${guild.channel.createInvite({ maxAge: 0, maxUses: 0 })}\`\`\``)
    .setImage(guild.iconURL())
    client.channels.cache.get(config.guildlog).send({ embeds: [GuildEmbed]});
});