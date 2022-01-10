const { Discord, MessageEmbed } = require("discord.js");
const config = require('../../JSON/config.json');
const db = require("quick.db");
module.exports = {
    name: "mute",
    // aliases: [`mcount`, `membercount`],
    category: 'Moderation',
    description: "Mute someone!",
    cooldown: 5,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["MANAGE_CHANNELS"],
    run: async (client, message, args, prefix) => {
    
    // if (!message.member.permissions.has("MANAGE_ROLES")) {
    //   // return message.channel.send("Sorry but you do not have permission to mute anyone");
    //   const helpEmbed = new MessageEmbed()
    //     .setColor('RANDOM')
    //     .setTitle(`:x: You're missing MANAGE_ROLE to mute member!`)
    //     .setFooter("Requested by @" + message.author.username);
    //       return message.reply({ embeds: [helpEmbed] })   
    // }

    // if (!message.guild.me.permissions.has("MANAGE_ROLES")) {
    //   // return message.channel.send("I do not have permission to manage roles.");
    //   const helpEmbed = new MessageEmbed()
    //     .setColor('RANDOM')
    //     .setTitle(`:x: Bot is missing MANAGE_ROLE to mute member!`)
    //     .setFooter("Requested by @" + message.author.username);
    //       return message.reply({ embeds: [helpEmbed] })   
    // }

    const user = message.mentions.members.first();
    
    if(!user) {
      // return message.channel.send("Please mention the member to who you want to mute")
      const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:x: Pls mention the user!`)
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter("Requested by @" + message.author.username);
        
          return message.reply({ embeds: [helpEmbed] })   
    }
    if(message.mentions.users.first().bot) {
      // return message.channel.send(":x: You can not warn bots")
      const helpEmbed = new MessageEmbed()
        		.setColor('RANDOM')
        		.setTitle(`:x: You can not mute bots`)
            .setImage(db.get(`banner-${message.guild.id}`))
        		.setFooter("Requested by @" + message.author.username);
			return message.reply({ embeds: [helpEmbed] })
    }
    if(user.permissions.has("ADMINISTRATOR")) {
      // return message.channel.send("Please mention the member to who you want to mute")
      const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:x: You can't mute Admin!`)
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter("Requested by @" + message.author.username);
          return message.reply({ embeds: [helpEmbed] })   
    }
    
    if(user.id === message.author.id) {
      // return message.channel.send("I won't mute you -_-");
      const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:x: You can't mute yourself!`)
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter("Requested by @" + message.author.username);
          return message.reply({ embeds: [helpEmbed] })   
    }
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      // return message.channel.send("Please Give the reason to mute the member")
      const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:x: Pls type reason to mute!`)
        .setImage(db.get(`banner-${message.guild.id}`))
        .setFooter("Requested by @" + message.author.username);
          return message.reply({ embeds: [helpEmbed] })   
    }
    
  //TIME TO LET MUTED ROLE
    
    let role = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!role) {
      const muterole = await message.guild.roles.create({
        name : "Muted",
        permissions: []
    })
    message.guild.channels.cache.forEach(async (channel, id) => {
      await channel.permissionOverwrites.edit(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS : false
      })
  })
    }
    
    
   if(user.roles.cache.has(role)) {
      // return message.channel.send("Given User is already muted")
      const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:x: The user is already muted!`)
        .setFooter("Requested by @" + message.author.username);
          return message.reply({ embeds: [helpEmbed] })   
    }
    user.roles.add(role, `Muted by ${message.author.username} with reason: ${args[1]}`)
    
// await message.channel.send(`You muted **${message.mentions.users.first().username}** For \`${reason}\``)
const Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:white_check_mark: You muted ${message.mentions.users.first().username} For \`${reason}\`!`)
        .setFooter("Requested by @" + message.author.username);
        await message.reply({ embeds: [Embed] })   
    
  }
};
