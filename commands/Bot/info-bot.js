// const { MessageEmbed } = require('discord.js');
// const packageJSON = require('../../package.json');
// const { mem, cpu, os } = require('node-os-utils');
// const moment = require('moment');
// const { stripIndent } = require('common-tags');
// const config = require('../../JSON/config.json')
// const { xoakitu } = require('../../functions/xoakitu.js');

require("moment-duration-format");
const Discord = require("discord.js");
const db = require("quick.db");
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
// const { button } = require('discord-buttons');
const packageJSON = require('../../package.json');
const { mem, cpu } = require('node-os-utils');
const moment = require('moment');
const { stripIndent } = require('common-tags');
const config = require('../../JSON/config.json')
const { xoakitu } = require('../../functions/xoakitu.js');
// const config = require('../../JSON/config.json');
let os = require("os");
module.exports = {
    name: 'infobot',
    aliases: ['stats', 'infobot', 'botinfo', 'bot-info'],
    category: 'Bot',
    description: 'View bot infomation',
    cooldown: 5,
    UserPerms: ["SEND_MESSAGES"],
    BotPerms: ["SEND_MESSAGES"],

    run: async (client, message, args, prefix) => {
        const row = new MessageActionRow().addComponents(
            new MessageButton()
            .setStyle("LINK")
            .setURL(config.invite)
            .setEmoji('<:bot:927042499694956555>')
            .setLabel('Invite me'),
            new MessageButton()
            .setStyle("LINK")
            .setURL(config.support)
            .setEmoji('<:ServerTag:926995884829470770>')
            .setLabel('Support'),
            new MessageButton()
            .setStyle("LINK")
            .setURL(config.botWebsite)
            .setEmoji('🔗')
            .setLabel('Website'),
        )
        const member = client
        const creadtedAt = member.user.createdAt
        const [month, day, year] = [creadtedAt.getMonth()+1, creadtedAt.getDate(), creadtedAt.getFullYear()];
        const c = `${day}/${month}/${year}`
        const discordJSVersion = packageJSON.dependencies["discord.js"];
        const devDependencies = packageJSON.devDependencies["node"];
        const botVersion = packageJSON.version;
        let days = Math.floor(client.uptime / 86400000)
        let hours = Math.floor(client.uptime / 3600000) % 24
        let minutes = Math.floor(client.uptime / 60000) % 60
        let seconds = Math.floor(client.uptime / 1000) % 60
        const helpEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Bot Infomation')
        .setURL(config.botWebsite)
        .setAuthor('AIO Bot', client.user.displayAvatarURL(), config.botWebsite)
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
        .addFields(
            { name: '<:staff:926998224647127122> Bot info', value: 
            `
            <a:trai_dat:915232089593483304> Joined **${client.guilds.cache.size}** servers 
            <a:trai_dat:915232089593483304> In **${client.channels.cache.size}** channels 
            <a:trai_dat:915232089593483304> Playing with **${client.guilds.cache.map((guild) => guild.memberCount).reduce((p, c) => p + c)}** users` },)
        .addField(`🕐 Uptime`, `\`${days}d : ${hours}h : ${minutes}m : ${seconds}s\` `)
        .addField("🤖 CPU", `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``)
        .addField("🤖 Arch", `\`${os.arch()}\``, true)
        .addField("\u200b", `\u200b`, true)
        .addField("💻 Platform", `\`\`${os.platform()}\`\``, true)
        .addField('🛠 Info Create', `**・Owner: <@${config.ownerID}>\n**・Created:** \`${c}\`\n**・Online:** \`24/7\``, true)
        .addField("\u200b", `\u200b`, true)
        .addField('💻 Info Version', `**・Bot:** \`${botVersion}\`\n**・D.JS:** \`${xoakitu(discordJSVersion)}\`\n**・NodeJS:** \`${xoakitu(devDependencies)}\``, true)
        .addField(":ping_pong: API Latency", `\`${client.ws.ping}ms\``, true)
        // .addField('⭐ Info Other', `**・Website:** \`${config.botWebsite}\`\n`, true)
        // .addField(`Invite Link`, `[**Click to invite**](${config.invite})`)
        // .addField("Support Server", `[**Click to invite**](${config.support})`)
        // .addField("Website", `[**Click to invite**](${config.botWebsite})`)
        .setImage(config.banner)
        .setTimestamp()
        .setFooter("Requested by @" + message.author.username);
        message.channel.send({
            embeds: [helpEmbed],
            components: [row]
        })

    }
}
