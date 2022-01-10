const client = require('../../AIOBot.js');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const config = require('../../JSON/config.json');
client.on('guildMemberAdd', async(member) => {

  const welcomeChannelCheck = await db.has(`autowelcome-${member.guild.id}`);
  const Welcomeimg = await db.get(`welcome-${member.guild.id}`)
  const embed = new MessageEmbed()
  .setColor("GREEN")
  .setAuthor(`LOBBY 🥳`, client.user.displayAvatarURL())
  .setThumbnail(db.get(`thumb-${member.guild.id}`))
  .setDescription(`<@${member.id}> just join ${member.guild.name}\nNow our server have ${member.guild.memberCount} users`)
  .setImage(Welcomeimg)
  .setTimestamp()
  .setFooter(client.user.username, client.user.displayAvatarURL())

  if (welcomeChannelCheck) {
    const getwelcomeChannelCheck = await db.get(`autowelcome-${member.guild.id}`)
    const welcomeChannel = member.guild.channels.cache.get(getwelcomeChannelCheck)
    try{
    welcomeChannel.send({ embeds: [embed] })
    }catch{
      return;
    }
  }
})