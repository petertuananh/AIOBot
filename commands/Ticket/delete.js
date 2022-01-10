const { Discord, MessageEmbed } = require("discord.js");
const ms = require("ms")
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    name: 'ticket-delete',
    aliases: ['afking'],
    category: 'Utility',
    description: 'AFK mode',
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
		if(message.channel.name.includes('ticket-')) {
			message.channel.delete();
		}
		else {
      const del = new MessageEmbed()
					.setTitle(`Ticket system 🎫`)
					.setDescription(`<:Error:915231514856390698> You cannot use this command here, use in you ticket!`)
					.setFooter("Requested by @" + message.author.username);
					message.channel.send({embeds: [del]})
			// return message.reply('you cannot use this command here. Please use this command when you want to delete a ticket.');
		}
	},
};