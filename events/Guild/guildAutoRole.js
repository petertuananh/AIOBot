const client = require('../../AIOBot.js');
const db = require("quick.db")
const config = require('../../JSON/config.json');
client.on('guildMemberAdd', async(member) => {
  const role = await db.has(`autorole-${member.guild.id}`);
  if(role === true) {
    member.roles.add(await db.get(`autorole-${member.guild.id}`))
  }
})