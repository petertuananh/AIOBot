const { Discord, MessageEmbed } = require("discord.js");
const ms = require("ms")
const db = require("quick.db");
const config = require('../../JSON/config.json');

module.exports = {
    name: 'ticket-add',
    aliases: ['tk-add'],
    category: 'Utility',
    description: 'Add new ticket!',
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["MANAGE_ROLES"],
    run: async (client, message, args, prefix) => {
		if(message.channel.name.includes('ticket-')) {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
			if(!member) {
				const wrong = new MessageEmbed()
					.setTitle(`Ticket system 🎫`)
					.setDescription(`<:Error:915231514856390698> Incorrect Usage! Correct Usage:${prefix}tickket-add <member>`)
					.setFooter("Requested by @" + message.author.username);
				return message.channel.send({embeds: [wrong]})
			}
			try{
				message.channel.permissionOverwrites.edit(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				}).then(() => {
					const sucesss = new MessageEmbed()
					.setTitle(`Ticket system 🎫`)
					.setDescription(`<a:vv:915199999078457404> Successfully added ${member} to ${message.channel}`)
					.setFooter("Requested by @" + message.author.username);
					message.channel.send({embeds: [sucesss]})
				});
			}
			catch(e) {
				const wrong = new MessageEmbed()
					.setTitle(`Ticket system 🎫`)
					.setDescription(`<:Error:915231514856390698> An error occurred, please try again!`)
					.setFooter("Requested by @" + message.author.username);
				return message.channel.send({embeds: [wrong]})
			}
		}
	},
};