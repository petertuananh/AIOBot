const fetch = require("node-fetch");

const { Util, MessageEmbed, Permissions } = require("discord.js");
const { parse } = require("twemoji-parser");
const Color = "RANDOM";
const config = require('../../JSON/config.json');
const db = require("quick.db");
module.exports = {
    name: "addroleeveryone",
    // aliases: ["addnewemoji"],
    description: "Add emoji to server",
    cooldown: 5,
    UserPerms: ["MANAGE_ROLES"],
    BotPerms: ["MANAGE_ROLES"],
    category: 'Moderation',
    nodms: true,
    run: async(client, message,args, prefix) => {
      // let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")  
  
      if(!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`❌ **You cant use this!**`);

      const fetchedRole = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[0]) || message.guild.roles.cache.find(r => r.name == args[0]);
         
      message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.add(fetchedRole))
//       const nouser = new MessageEmbed()
//         .setColor(`RED`)
//       .setTitle(`❌ Please mention a role to add to everyone!`)
//       .setDescription(`Usage: \`${client.config.prefix}addroletoeveryone @Role\``)
            
//             if(!fetchedRole) return message.reply({ embeds: [nouser] });
//                 const confirmEmbed = new MessageEmbed()
//                 .setTitle(`✅ The role: **\`${fetchedRole.name}\`** Has Been Added To All Members!`)
//                 .setDescription(`_It might take a few \`mins\` or \`hours\` to add depending on your server size!_`)
//                 .setColor(`GREEN`)
//                 .setTimestamp();
// message.reply({ embeds: [confirmEmbed] })  
      
      } 
    }