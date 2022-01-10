const { Discord, MessageEmbed } = require("discord.js");
const config = require('../../JSON/config.json');
const db = require('quick.db')
module.exports = {
    name: "autoreact",
    // aliases: [`mcount`, `membercount`],
    category: 'Moderation',
    description: "Mute someone!",
    cooldown: 5,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["MANAGE_CHANNELS"],
    run: async (client, message, args, prefix) => {
        const reactchannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
		if (!args[0]){
			const helpEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`Usage:`)
	  .setDescription(`🔒: .lock on | 🔓: .lock off`)
	  .setImage(db.get(`banner-${message.guild.id}`))
      .setFooter("Requested by @" + message.author.username);
      return message.reply({ embeds: [helpEmbed] })
		}
		if (args[0] === 'on') {
            db.set(`reactchannel-${message.channel.id}-${message.guild.id}`, reactchannel);
            db.set(`reactemoji-${message.channel.id}-${react.guild.id}`, args[1]);
		} if (args[0] === 'off') {
			db.delete(`reactemoji-${message.channel.id}-${react.guild.id}`);
            db.delete(`reactchannel-${message.channel.id}-${message.guild.id}`);
		}
		return '';
	},
};