const client = require('../../AIOBot.js');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const config = require('../../JSON/config.json');
client.on('guildMemberRemove', async(member) => {

  const goodbyeChannelCheck = await db.has(`autogoodbye-${member.guild.id}`);
  const Goodbye = await db.get(`Goodbye-${member.guild.id}`)
  const embed = new MessageEmbed()
  .setColor("RED")
  .setAuthor(`LOBBY 😥`, client.user.displayAvatarURL())
  .setThumbnail(db.get(`thumb-${member.guild.id}`))
  .setDescription(`<@${member.id}> just left ${member.guild.name}\nAnd now our server have ${member.guild.memberCount} users left!`)
  .setImage(Goodbye)
  .setTimestamp()
  .setFooter(client.user.username, client.user.displayAvatarURL())
  
  if (goodbyeChannelCheck) {
    const getgoodbyeChannelCheck = await db.get(`autogoodbye-${member.guild.id}`)
    const goodbyeChannel = member.guild.channels.cache.get(getgoodbyeChannelCheck)

    goodbyeChannel.send({ embeds: [embed] })
  }
})