const discord = require("discord.js");
const config = require('../../JSON/config.json');
const db = require("quick.db");
module.exports = {
    name: "clear",
    aliases: ["purge", "clearmsgs"],
    cooldown: 5,
    description: "Purge message",
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["MANAGE_CHANNELS"],
    category: 'Moderation',
    run: async (client, message, args, prefix) => {
        const deleteMessage = new discord.MessageEmbed()
        .setAuthor(`CLEAR 🧹`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
        .setColor('RED')
        .addField(`Reason:`, `The amount to be deleted has not been specified`, false)
        .addField(`Usage:`, `${prefix}clear [1 to 99]`, false)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setImage(db.get(`banner-${message.guild.id}`))
        .setTimestamp();


        const deleteCount = parseInt(args[0], 10);

        if (!deleteCount || deleteCount < 1 || deleteCount > 99)
        return message.channel.send({ embeds : [deleteMessage]})

        const fetched = await message.channel.messages.fetch({
            limit: deleteCount
        });


        await message.channel.bulkDelete(fetched, true).catch(err => console.log(`Error, can't clear because : ${err}`));

        const deleteMessageSuccess = new discord.MessageEmbed()
            .setAuthor(`CLEAR 🧹`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor('BLUE')
            .setDescription(`Cleared ${deleteCount} messages!`)
            .addField(`Note`, `Messages older than 14 days will not be deleted`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))
            .setTimestamp();

        return message.channel.send({ embeds: [deleteMessageSuccess]});

    }
};