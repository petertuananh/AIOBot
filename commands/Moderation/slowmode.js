const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: "slowmode",
    // aliases: [`mcount`, `membercount`],
    category: 'Moderation',
    description: "Turn on slowmode!",
    cooldown: 5,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["MANAGE_CHANNELS"],
    run: async (client, message, args, prefix) => {
		if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.channel.send(':x: You do not have **MANAGE_CHANNELS** permission!')

		if (!args[0]) {
			// return message.channel.send(':x: You did not specify a time!')
			const helpEmbed = new MessageEmbed()
        		.setColor('RANDOM')
        		.setTitle(`:x: You did not specify a time!`)
        		.setFooter("Requested by @" + message.author.username);
			return message.reply({ embeds: [helpEmbed] })
		}

		const currentCooldown = message.channel.rateLimitPerUser;

		const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

		const embed = new MessageEmbed()
			.setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

		if (args[0] === 'off') {
			const helpEmbed = new MessageEmbed()
        		.setColor('RANDOM')
        		.setTitle(`:white_check_mark: Channel cooldown is already off`)
        		.setFooter("Requested by @" + message.author.username);
			if (currentCooldown === 0) 
			
        	return message.reply({ embeds: [helpEmbed] })

			const Embed = new MessageEmbed()
        	.setColor('RANDOM')
        	.setTitle(`:white_check_mark: Slowmode is disable!`)

        .setFooter("Requested by @" + message.author.username);
          return message.reply({ embeds: [Embed] })
		}

		const time = ms(args[0]) / 1000;

		if (Number.isNaN(time)) {
			// return message.channel.send(`:x: Not a valid time, please try again! EX: ***${client.prefix}slowmode 5s***`)
			const helpEmbed = new MessageEmbed()
        		.setColor('RANDOM')
        		.setTitle(`:x: Not a valid time, please try again! EX: ${client.prefix}slowmode 5s`)
        		.setFooter("Requested by @" + message.author.username);
			return message.reply({ embeds: [helpEmbed] })
		}

		if (time >= 21600) {
			// return message.channel.send(':x: That slowmode limit is too high, please enter anything lower than 6 hours.')
			const helpEmbed = new MessageEmbed()
        		.setColor('RANDOM')
        		.setTitle(`:x: That slowmode limit is too high, please enter anything lower than 6 hours.`)
        		.setFooter("Requested by @" + message.author.username);
			return message.reply({ embeds: [helpEmbed] })
		}

		if (currentCooldown === time) {
			// return message.channel.send(`:x: Slowmode is already set to ${args[0]}`);
			const helpEmbed = new MessageEmbed()
        		.setColor('RANDOM')
        		.setTitle(`:x: Slowmode is already set to ${args[0]}`)
        		.setFooter("Requested by @" + message.author.username);
			return message.reply({ embeds: [helpEmbed] })
		}

		// embed.setTitle('Slowmode Enabled')
		// 	.addField('Slowmode: ', args[0])
		// 	.addField('Reason: ', reason)
		// 	.setColor('#ff0000');

		const msg = await message.channel.setRateLimitPerUser(time, reason);
		// return msg.send(embed);
        // message.channel.send(":white_check_mark:: Unable " + args[0] + " slowmode")
		const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:white_check_mark: Enable ${args[0]} slowmode!`)
        .setFooter("Requested by @" + message.author.username);
        message.reply({ embeds: [helpEmbed] })
	},
};