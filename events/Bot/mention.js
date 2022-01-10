const client = require('../../AIOBot.js');
const db = require("quick.db");
const config = require('../../JSON/config.json');
const {
    MessageEmbed,
    MessageActionRow,
    MessageSelectMenu,
    MessageButton
} = require('discord.js')
client.on('messageCreate', async message => {
    if(!message.guild) return;
    if (message.author.bot) return false;
    const prefix = db.get(`prefix-${message.guild.id}`)
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    const pf = prefix || config.prefix
    if (message.content == client.user || message.content == client.user.tag || message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`){
        const row = new MessageActionRow().addComponents(
            new MessageButton()
            .setStyle("LINK")
            .setURL(config.invite)
            .setEmoji('<:LinkVIP:915188532228792330>')
            .setLabel('Invite'),
            new MessageButton()
            .setStyle("LINK")
            .setURL(config.support)
            .setEmoji('<a:dev:927042918827577365>')
            .setLabel('Support'),
        )
        const embed = new MessageEmbed()
        .setColor(`RED`)
        .setTitle(`<:Information:912139638741811240> Hello!`)
        .setDescription(`
        **<a:here:907106477867687956> Prefix: ${pf}**\n**<a:here:907106477867687956> Use ${pf}help for all commands!**`)
        .setFooter(`${client.user.username}`)
        message.channel.send({
            embeds: [embed],
            components: [row]
        })
    };
})