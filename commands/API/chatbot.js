// const { MessageEmbed } = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, Discord } = require('discord.js');
const axios = require('axios')
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    name: "chatbotkey",
    category: ['API'],
    description: "Get free chat bot key!",
    cooldown: "86400",

    run: async (client, message, args) => {
        let res = await axios.get(encodeURI(`https://chatbot.elainateam.xyz/create?owner_key=${config.cbownerkey}&total=${config.cbapikeyreq}`));
        const key = res.data.key_id
        const embed = new MessageEmbed()
            .setTitle(`<:message:923997977104756786> Elaina ChatBot API free key!`)
            .setFooter(`Limit ${config.cbapikeyreq} req`)
            .setDescription(`Your api key: \`\`\`${key}\`\`\``)
            .setColor("GREEN")
	    const Embed = new MessageEmbed()
            .setTitle(`<:message:923997977104756786> Please check your DMs!`)
            .setColor("GREEN")
        const row = new MessageActionRow().addComponents(
            new MessageButton()
            .setStyle("LINK")
            .setURL('https://discords.com/bio/p/peter0001')
            .setEmoji('🛒')
            .setLabel('Buy'),
            new MessageButton()
            .setStyle("LINK")
            .setURL('https://discords.com/bio/p/peter0001')
            .setEmoji('📖')
            .setLabel('Guide'),
            new MessageButton()
            .setStyle("LINK")
            .setURL(`https://api.elainateam.xyz/chatbot?key=${key}&msg=hello`)
            .setEmoji('🔗')
            .setLabel('Example'),
            )
        
        message.author.send({
            embeds: [embed],
            components: [row]
        })
	    message.channel.send({embeds: [Embed]})
        }
}