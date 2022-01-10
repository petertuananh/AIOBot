const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: 'shardinfo',
    aliases: ['shard'],
    category: 'Bot',
    cooldown: 5,
    description: "See bot sharding",
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
        const promise = await client.shard.broadcastEval(c => {
            return [c.shard.ids[0], c.guilds.cache.size, c.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0), c.channels.cache.size, c.uptime, process.memoryUsage().heapUsed, process.memoryUsage().heapTotal]
        });
        let final = "";
        for (const value of promise) {
            // final += `\`Shard ${parseInt(value[0]) + 1}:\` \n> Server: **${(value[1])}**\n> Member: **${(value[2])}**\n> Số kênh: **${(value[3])}**\n> Uptime: **${moment.duration(value[4]).format("d:hh:mm:ss")}s**\n> Heap RAM: **${(value[5])}**\n> Total Heap RAM: **${(value[6])}**\n`;
            final += `<a:here:907106477867687956> **Shard** ${parseInt(value[0]) + 1}: \n- Server: **${(value[1])}**\n- Member: **${(value[2])}**\n- Channel: **${(value[3])}**\n- Uptime: **${moment.duration(value[4]).format("d:hh:mm:ss")}s**\n`;
        }
        const Info = new Discord.MessageEmbed()
            .setColor("RANDOM")
            // .setAuthor("Sharding", "https://cdn.discordapp.com/avatars/890994209950150717/0506c236cd47e1e43c6f4e0ffa019be6.webp?size=2048", "https://aiobot.elainateam.xyz/")
            .setTitle(`🖥️ [SHARDING]`)
            .setDescription(final)
            .setFooter("Your server: shard " + (parseInt(message.guild.shardId) + 1) + "!");
        message.channel.send({ embeds: [Info] });
    }
}