const Discord = require("discord.js");
const config = require('../../JSON/config.json');
const db = require("quick.db");
module.exports = {
    // name: "giverole",
    // aliases: ["purge", "clearmsgs"],
    cooldown: 5,
    description: "Give the role to someone!",
    UserPerms: ["MANAGE_ROLES"],
    BotPerms: ["ADMINISTRATOR"],
    category: 'Moderation',
    run: async (client, message, args, prefix) => {
		const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
		// message.delete();
		// const helpEmbed = new MessageEmbed()
        // .setColor('RANDOM')
        // .setTitle(`:x: You do not have MANAGE_ROLES permission`)
        // .setFooter("Requested by @" + message.author.username);
		// if (!message.member.permissions.has('MANAGE_ROLES')) 
		
        //   return message.reply({ embeds: [helpEmbed] })

		  const MEmbed = new Discord.MessageEmbed()
		  .setTitle(':x: Incorrect usage, It\'s `<mention> <role>')
		  .setColor('RANDOM')
		  .setFooter(new Date().toLocaleString());

		if (!args[0] || !args[1]){
            return message.reply({ embeds: [MEmbed] });
		}
			const embed2 = new Discord.MessageEmbed()
			.setColor("RED")
			.setAuthor(`ROLE ❌`, client.user.displayAvatarURL())
			.setThumbnail(client.user.displayAvatarURL())
			.setTimestamp()
			.addField(`Reason:`, `Your role is not enough to do that!`, false)
			.setFooter(client.user.username, client.user.displayAvatarURL())
			if (message.member.roles.highest.position <= member.roles.highest.position) {
			return message.channel.send({embeds: [embed2]})
			}else{

if(message.author.id === user.id) {
      // return message.channel.send(":x: You can not warn yourself")
      const helpEmbed = new Discord.MessageEmbed()
        		.setColor('RANDOM')
        		.setTitle(`:x: You can not giverole yourself`)
				.setImage(db.get(`banner-${message.guild.id}`))
        		.setFooter("Requested by @" + message.author.username);
				
			return message.reply({ embeds: [helpEmbed] })
	
    }
		try {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
			const roleName = message.guild.roles.cache.find((r) => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

			const alreadyHasRole = member._roles.includes(roleName.id);
			const helpEmbed = new Discord.MessageEmbed()
        	.setColor('RANDOM')
        	.setTitle(`:x: User already has that role`)
			.setImage(db.get(`banner-${message.guild.id}`))
        	.setFooter("Requested by @" + message.author.username);
			if (alreadyHasRole)
			
          	return message.reply({ embeds: [helpEmbed] })    
		  	try{
			const MEmbed = new Discord.MessageEmbed()
				.setTitle(`Role Name: ${roleName.name}`)
				.setDescription(`:white_check_mark: ${message.author} has successfully given the role ${roleName} to ${member.user}`)
				.setColor('RANDOM')
				.setImage(db.get(`banner-${message.guild.id}`))
				// .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
				.setFooter("Requested by @" + message.author.username);
			try{
				
			await member.roles.add(roleName)
            message.reply({ embeds: [MEmbed] });
			}catch{
				const Embed = new Discord.MessageEmbed()
        	.setColor('RANDOM')
        	.setTitle(`:x: I don't have perms to do that!`)
			.setImage(db.get(`banner-${message.guild.id}`))
        	.setFooter("Requested by @" + message.author.username);
			message.reply({ embeds: [Embed] });
			}


			}catch (err) {
				const Embed = new Discord.MessageEmbed()
        	.setColor('RANDOM')
        	.setTitle(`:x: I don't have perms to do that!`)
			.setImage(db.get(`banner-${message.guild.id}`))
        	.setFooter("Requested by @" + message.author.username);
			message.reply({ embeds: [Embed] });
			}
		}catch(err) {
			const Embed = new Discord.MessageEmbed()
        	.setColor('RANDOM')
        	.setTitle(`:x: Try to give a role that exists next time...`)
			.setImage(db.get(`banner-${message.guild.id}`))
        	.setFooter("Requested by @" + message.author.username);
			message.reply({ embeds: [Embed] });
		}
	}
	},
};