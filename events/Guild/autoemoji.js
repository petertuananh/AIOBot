const client = require('../../AIOBot.js');
const config = require('../../JSON/config.json');
const {
    MessageEmbed
} = require('discord.js');
const { prefix } = require('../../JSON/config.json');
const db = require('quick.db');
const axios = require("axios");


client.on('messageCreate', async message => {
    if (message.author.bot) return;
  
    const twebhooks = [];
    const list = [];
    const embeds = [];
    const servere = [];
  
    list.push(message.content);
    if (message.content.includes(`:`)) {
      const guild = client.guilds.cache.map((e) => e)
      for (const a of guild) {
        if (a.members.cache.has(`${message.author.id}`)) {
          servere.push(a);
        }
      }
      for (const es of servere) {
        const emo = es.emojis.cache.map((e) => e);
        for (const i of emo) {
          if (!list[0].includes(`<:${i.name}:`)) {
            if (!list[0].includes(`<a:${i.name}:`)) {
              if (i.available) {
                list.push(list[0].replace(`:${i.name}:`, `${i}`));
                list.shift();
              }
            }
          }
        }
      }
      if (list[0] != message.content) {
        try {
          message.delete();
        } catch{
          console.log("lỗi xóa");
        }
        if (message.attachments.size > 0) {
        const file = [];
        const attach = await message.attachments.map((e) => e);
          for (const at of attach) {
            if (at.contentType != null) {
              if (at.contentType.startsWith("image")) {
                const embd = new MessageEmbed().setTitle(at.name).setImage(at.url);
                embeds.push(embd);
              }
            
              if (!at.contentType.startsWith("image")) {
                file.push(`[${at.name}](${at.url})`);
              }
            }
            if (at.contentType == null) {
              file.push(`[${at.name}](${at.url})`);
            }
          }
          if (file.length > 0) {
            const mbd = new MessageEmbed().setTitle(`Attachments`).setDescription(file.join('\n'));
            embeds.push(mbd);
          }
        }
        if (message.reference != null) {
          const replied = await message.channel.messages.fetch(message.reference.messageId);
          const embd = new MessageEmbed().setDescription(`**[Reply to](${replied.url}) :** ${replied.content}`).setAuthor({ name: replied.author.username, iconURL: replied.author.displayAvatarURL(), url: replied.url })
          embeds.push(embd);
        }
        const ameo = await message.channel.fetchWebhooks()
        ameo.forEach(val => {
          if (val.owner.id == client.user.id) {
            twebhooks.push(val);
          }
        });
        if (twebhooks[0] != null) {
          twebhooks[0].send({
            content: list[0],
            username: message.member.nickname || message.author.username,
            avatarURL: message.author.displayAvatarURL(),
            embeds: embeds
          });
        }
        if (twebhooks[0] == null) {
          const wh = await message.channel.createWebhook(client.user.username)
          wh.send({
            content: list[0],
            username: message.member.nickname || message.author.username,
            avatarURL: message.author.avatarURL(),
            embeds: embeds
          });
        }
      }
    }
  });