const backup = require('discord-backup');
const {
    MessageEmbed,
    Discord
} = require("discord.js")
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    name: "backup-load",
    aliases: ['bk-load'],
    category: 'Bot',
    description: "Load the backup!",
    cooldown: "5",
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
    const backupID = args[0]

    backup.fetch(backupID).then(() => {

        backup.load(backupID, message.guild).then(() => {

            return message.author.send('Backup loaded successfully!');
    
        }).catch((err) => {
    
            if (err === 'No backup found')
                return message.channel.send(':x: No backup found for ID '+backupID+'!');
            else
                return message.author.send(':x: An error occurred: '+(typeof err === 'string') ? err : JSON.stringify(err));
    
        });

    }).catch(() => {
        return message.channel.send(':x: No backup found for ID '+backupID+'!');
    });
    }
};
