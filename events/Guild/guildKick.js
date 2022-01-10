// const client = require('../../AIOBot.js');
// const discord = require('discord.js');
// const config = require('../../JSON/config.json');
// const db = require('quick.db')
// client.on('guildDelete', (guild) => {

//     const GuildEmbed = new discord.MessageEmbed()
//     .setTitle(`😭 They kicked ${client.user.username} off the server`)
//     .setThumbnail(guild.iconURL)
//     .addField(`**Server Name**`, `\`\`\`${guild.name}\`\`\``)
//     .addField(`**Server ID**`, `\`\`\`${guild.id}\`\`\``)
//     .addField(`**Other**`, `\`\`\`- ${guild.memberCount} users\`\`\``)
//     // .addField(`**Invite link**`, `\`\`\`${guild.channel.createInvite({ maxAge: 0, maxUses: 0 })}\`\`\``)
//     .setImage(guild.iconURL())





    
//     client.channels.cache.get(config.guildlog).send({ embeds: [GuildEmbed]});
// });