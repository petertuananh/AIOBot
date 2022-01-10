const { Util, MessageEmbed, Permissions } = require("discord.js");
const Color = "RANDOM";
const config = require('../../JSON/config.json');
const db = require("quick.db");
const ticket = require("tickets-discord");
module.exports = {
    name: "ticket-open",
    aliases: ["addnewemoji"],
    description: "Add emoji to server",
    cooldown: 5,
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["MANAGE_CHANNELS"],
    category: 'Moderation',
    run: async(client, message,args, prefix) => {
        const Tchannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        ticket.setup(message, message.channel.id);
    }
}