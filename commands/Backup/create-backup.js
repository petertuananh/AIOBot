const backup = require('discord-backup');
const {
    MessageEmbed
} = require("discord.js")
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    name: "backup-create",
    aliases: ['bk-cre'],
    category: 'Bot',
    description: "Create server backup!",
    cooldown: "5",
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, prefix) => {

    // If the member doesn't have enough permissions

    backup.create(message.guild).then((backupData) => {

        return message.channel.send('Backup created! Here is your ID: `'+backupData.id+'`! Use `'+config.prefix+'backup-load '+backupData.id+'` to load the backup on another server!');

    }).catch(() => {

        return message.channel.send(':x: An error occurred, please check if the bot is administrator!');

    });
    }
};
