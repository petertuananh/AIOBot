const { MessageEmbed } = require('discord.js');
const { client, status } = require('discord.js');
const config = require('../../JSON/config.json');
const db = require("quick.db");
module.exports = {
    name: "serverinfo",
    aliases: ['svin4', 'svinfo'],
    category: 'Information',
    description: "View server infomation",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {
		let region;
		switch (message.guild.region) {
		case 'europe':
			region = '🇪🇺 Europe';
			break;
		case 'us-east':
			region = '🇺🇸 us-east';
			break;
		case 'us-west':
			region = '🇺🇸 us-west';
			break;
		case 'us-south':
			region = '🇺🇸 us-south';
			break;
		case 'us-central':
			region = '🇺🇸 us-central';
			break;
		case 'singapore':
			region = 'singapore';
			break;
		default:
			region = 'Unknown';
		}

		const Embed = new MessageEmbed()
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.setColor('#f3f3f3')
			.setTitle(`${message.guild.name} server stats`)
			.setImage(db.get(`banner-${message.guild.id}`))
			.addFields(
				{
					name: 'Owner: ',
					value: `<@${message.guild.ownerId}>`,
					inline: true,
				},
				{
					name: 'Users: ',
					value: `There are ${message.guild.memberCount} users!`,
					inline: true,
				},
				// {
				// 	name: 'Members: ',
				// 	// value: `There are ${message.guild.members.cache.filter((m) => m.user.bot).size} bots!`,
				// 	value: `There are ${message.guild.members.cache.filter((m) => m.user).size} members!`,
				// 	inline: true,
				// },
				// {
				// 	name: 'Members Online: ',
				// 	value: message.guild.members.cache.filter(member => member.presence.status !== "online").size,
				// 	inline: true,
				// },
				// {
				// 	name: 'Members Offline: ',
				// 	value: message.guild.members.cache.filter(member => member.presence.status !== "offline").size,
				// 	inline: true,
				// },
				{
					name: 'Total Bots: ',
					// value: `There are ${message.guild.members.cache.filter((m) => m.user.bot).size} bots!`,
					value: `There are ${message.guild.members.cache.filter((m) => m.user.bot).size} bots!`,
					inline: true,
				},
				{
					name: 'Creation Date: ',
					value: message.guild.createdAt.toLocaleDateString('en-us'),
					inline: true,
				},
				{
					name: 'Roles Count: ',
					value: `There are ${message.guild.roles.cache.size} roles in this server.`,
					inline: true,
				},
				{
					name: '🗺 Region: ',
					value: region,
					inline: true,
				},
				{
					name: 'Verified: ',
					value: message.guild.verified ? 'Server is verified' : 'Server isn\'t verified',
					inline: true,
				},
				{
					name: 'Boosters: ',
					value: message.guild.premiumSubscriptionCount >= 1 ? `There are ${message.guild.premiumSubscriptionCount} Boosters` : 'There are no boosters',
					inline: true,
				},
				{
					name: 'Emojis: ',
					value: message.guild.emojis.cache.size >= 1 ? `There are ${message.guild.emojis.cache.size} emojis!` : 'There are no emojis',
					inline: true,
				},
			);
			return message.reply({ embeds: [Embed] })
	},
};