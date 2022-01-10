const Discord = require("discord.js");
const ms = require("ms")
const db = require("quick.db");
const config = require('../../JSON/config.json');
const sourcebin = require('sourcebin_js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ticket-close',
    aliases: ['tk-close'],
    category: 'Utility',
    description: 'Close the ticket!',
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
		if(message.channel.name.includes('ticket-')) {
			// const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			if(message.member.permissions.has('ADMINISTRATOR') || message.channel.name === `ticket-${message.author.id}`) {
					try {
						message.channel.permissionOverwrites.edit(member.user, {
							VIEW_CHANNEL: false,
							SEND_MESSAGES: false,
							ATTACH_FILES: false,
							READ_MESSAGE_HISTORY: false,
						}).then(() => {
							message.channel.send(`Successfully closed ${message.channel}`);
						});
					}
					catch(e) {
						return message.channel.send('An error occurred, please try again!');
					}
				// });
                // message.channel.delete()
			}
		}
		// else {
		// 	return message.reply('you cannot use this command here. Please use this command when you\'re closing a ticket.');
		// }
	},
};