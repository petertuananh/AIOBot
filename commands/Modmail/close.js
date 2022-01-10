const { Util, MessageEmbed, Permissions } = require("discord.js");
const Color = "RANDOM";
const config = require('../../JSON/config.json');
const db = require("quick.db");
const ticket = require("tickets-discord");
module.exports = {
    name: "ticket-close",
    aliases: ["addnewemoji"],
    description: "Add emoji to server",
    cooldown: 5,
    UserPerms: ["MANAGE_EMOJIS_AND_STICKERS"],
    BotPerms: ["MANAGE_EMOJIS_AND_STICKERS"],
    category: 'Moderation',
    run: async(client, message,args, prefix) => {
        ticket.close(message.channel);
    }
}