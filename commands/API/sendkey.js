const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, Discord } = require('discord.js');
const axios = require('axios')
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    name: "sendkey",
    category: ['API'],
    description: "Get free chat bot key!",
    cooldown: "1",
    ownerOnly: true,
    run: async (client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLocaleLowerCase())
        if (!member){
            const Embed = new MessageEmbed()
            .setTitle(`<:message:923997977104756786> Must provide the user!`)
            .setColor("GREEN")
            message.channel.send({embeds: [Embed]})
        }
        if (!args[1]){
            const Embed = new MessageEmbed()
            .setTitle(`<:message:923997977104756786> Must provide the req time!`)
            .setColor("GREEN")
            message.channel.send({embeds: [Embed]})
        }
        let res = await axios.get(encodeURI(`https://api.elainateam.xyz/create?owner_key=${config.cbownerkey}&total=${args[1]}`));
        const embed = new MessageEmbed()
            .setTitle(`<:message:923997977104756786> Elaina ChatBot API premium key!`)
            .setFooter(`Limit ${args[1]} req`)
            .setDescription(`Your api key: \`\`\`${res.data.key_id}\`\`\``)
            .setColor("GREEN")
	    const Embed = new MessageEmbed()
            .setTitle(`<:message:923997977104756786> Sent!`)
            .setColor("GREEN")
        const row = new MessageActionRow().addComponents(
            new MessageButton()
            .setStyle("LINK")
            .setURL('https://discords.com/bio/p/peter0001')
            .setEmoji('📖')
            .setLabel('Guide'),
            )
        
        member.send({
            embeds: [embed],
            components: [row]
        })
	    message.channel.send({embeds: [Embed]})
        }
}