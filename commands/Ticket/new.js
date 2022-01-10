const { Discord, MessageEmbed } = require("discord.js");
const ms = require("ms")
const db = require("quick.db");
const config = require('../../JSON/config.json');

module.exports = {
    name: 'ticket-new',
    aliases: ['tk-new'],
    category: 'Utility',
    description: 'Create new ticket!',
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
		if(message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.id}`)) {
			const ahave = new MessageEmbed()
					.setTitle(`Ticket system 🎫`)
					.setDescription(`<:Error:915231514856390698> You already have a ticket!`)
					.setFooter("Requested by @" + message.author.username);
			return message.channel.send({embeds: [ahave]})
		}

		message.guild.channels.create(`ticket-${message.author.id}`, {
			permissionOverwrites: [
				{
					id: message.author.id,
					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
				},
				{
					id: message.guild.roles.everyone,
					deny: ['VIEW_CHANNEL'],
				},
			],
			type: 'text',
		}).then(async channel => {
			// message.reply(`you have successfully created a ticket! Please click on ${channel} to view your ticket.`);
			const cres = new MessageEmbed()
					.setTitle(`Ticket system 🎫`)
					.setDescription(`<a:vv:915199999078457404> Your ticket ${channel}`)
					.setFooter("Requested by @" + message.author.username);
			message.channel.send({embeds: [cres]})


			const sendtk = new MessageEmbed()
					.setTitle(`Ticket system 🎫`)
					.setDescription(`${message.author} Here is your ticket. Ticket close: ${prefix}ticket-close`)
					.setFooter("Requested by @" + message.author.username);
			channel.send({embeds: [sendtk]})

			const logchannel = message.guild.channels.cache.find(channel => channel.name === 'ticket-logs');
			if(logchannel) {
				const sendtk = new MessageEmbed()
					.setTitle(`Ticket system 🎫`)
					.setDescription(`<@${message.author.id}> created ticket in <#${channel.id}>`)
					.setFooter("Requested by @" + message.author.username);
				logchannel.send({embeds: [sendtk]})
			}else if (!logchannel){
				message.guild.channels.create('ticket-logs', { type: 'text', permissionOverwrites: [ { id: message.author.id, deny: ['VIEW_CHANNEL'], }, ], })
			}
		})
	},
};