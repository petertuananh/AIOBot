const { Util, MessageEmbed, Permissions } = require("discord.js");
const { parse } = require("twemoji-parser");
const Color = "RANDOM";
const config = require('../../JSON/config.json');
const db = require("quick.db");
module.exports = {
    name: "addemoji",
    aliases: ["addnewemoji"],
    description: "Add emoji to server",
    cooldown: 5,
    UserPerms: ["MANAGE_EMOJIS_AND_STICKERS"],
    BotPerms: ["MANAGE_EMOJIS_AND_STICKERS"],
    category: 'Moderation',
    nodms: true,
    run: async(client, message,args, prefix) => {
      if(!message.content.startsWith(prefix)) return;

      const errorEmoji = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`[MOD] Add emoji ❌`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Reason:`, `Pls provide the emoji`, false)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

      const emoji = args[0];
      if(!emoji) return message.channel.send({embeds: [errorEmoji]});
      
      let customemoji = Util.parseEmoji(emoji);
      
      if(customemoji.id) {
        const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? "gif" : "png"}`;
        const name = args.slice(1).join(" ");
        message.guild.emojis.create(
          `${Link}`,
          `${name || `${customemoji.name}`}`
          );
          
          const Added = new MessageEmbed()
          .setColor(Color)
          .setAuthor(`[MOD] Add emoji ✅`, client.user.displayAvatarURL())
          .setThumbnail(db.get(`thumb-${message.guild.id}`))
          .setImage(db.get(`banner-${message.guild.id}`))
          .setDescription(`Added success!\nName: ${name || `${customemoji.name}`}\nView: [Click here](${Link})`);
          return message.channel.send({ embeds: [Added] });
      } else {
        const error1Emoji = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`Add emoji ❌`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Reason:`, `Please specify a valid emoji`, false)
            .setTimestamp()
            .setImage(db.get(`banner-${message.guild.id}`))
            .setFooter(client.user.username, client.user.displayAvatarURL())

        let CheckEmoji = parse(emoji, { assetType: "png" });
        if (!CheckEmoji[0])
        return message.channel.send({embeds: [error1Emoji]});
        
        message.channel.send(`You can use normal emoji without adding to the server`);
      }
    }
  }