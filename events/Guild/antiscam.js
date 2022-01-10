const client = require('../../AIOBot.js');
const config = require('../../JSON/config.json');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { mem } = require("node-os-utils");
const { on } = require("events");
client.on('messageCreate', async message => {
    const jsondata = require('../../JSON/antiscam.json');
    for (const i of jsondata) {
      const ai = i["url"].replace("http://", "").replace("https://", "").replace("/*", "").replace("www.", "")
      if (message.content.toLowerCase().includes(ai)) {
        try {
          message.delete();
        }catch{
          return
        }
        const Embed = new MessageEmbed()
        .setTitle('⚖️  Detected scam link!')
        .setDescription(`
        > Link: **||${i["url"].replace("/*", "")} ||**
        > Type: **${i["type"].replace("_", "")}**
        > Level: **${i["level"]}**
        `)
        .setColor("RED")
        .setFooter(`Sent by ${message.author.username}`)
        message.channel.send({ embeds: [Embed] });
      }
    }
  });