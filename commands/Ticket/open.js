const Discord = require("discord.js");
const ms = require("ms")
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    name: 'ticket-open',
    aliases: ['tk-op'],
    category: 'Utility',
    description: 'Open new ticket!',
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
		if (message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			try {
				message.channel.permissionOverwrites.edit(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				})
					.then(() => {
						message.channel.send(`Successfully re-opened ${message.channel}`);
					});
			}
			catch (e) {
				return message.channel.send('An error occurred, please try again!');
			}
		}
		else {
			return message.reply(
				'you cannot use this command here. Please use this command on a closed ticket.',
			);
		}
	},
};