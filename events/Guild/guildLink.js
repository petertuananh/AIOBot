// Không tương thích với eval

const client = require('../../AIOBot.js');
const Discord = require('discord.js');
const db = require('quick.db');
const {
    is_url
} = require('../../functions/url');
const config = require('../../JSON/config.json');
client.on('messageCreate', async message => {
    const blockLink = db.get(`blockLink.${message.channel.id}`)
    if (message.channel.id === blockLink){
    if (message.author.bot) return;
    if (!message.guild) return;

    if (!message.member.permissions.has("ADMINISTRATOR")) {
        let blacklisted = [
            'http',
            'https',]
            let foundInText = false;
            for (var i in blacklisted) {
                if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
            }
            if (foundInText) {
                await message.delete()
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`[PERMISSIONS]  ❌`, client.user.displayAvatarURL())
                    .setThumbnail(config.thumbnail)
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setDescription(`You can't send link in this channel!\n ${message.author.username}`)
                    .setColor("RED")
                return message.channel.send({
                    embeds: [embed]
                })
                
            }
    }
    }
})

client.on('messageUpdate', async (oldMessage, newMessage) => {
    const blockLink = db.get(`blockLink.${newMessage.channel.id}`)
    if (newMessage.channel.id === blockLink){
    // if (newMessage.author.bot) return;
    if (!newMessage.guild) return;

    if (!newMessage.member.permissions.has("ADMINISTRATOR")) {
        let blacklisted = [
            'http',
            'https',]
            let foundInText = false;
            for (var i in blacklisted) {
                if (newMessage.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
            }
            if (foundInText) {
                await newMessage.delete()
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`[PERMISSIONS]  ❌`, client.user.displayAvatarURL())
                    .setThumbnail(config.thumbnail)
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setDescription(`Hey ${newMessage.author.username}\nYou can't send link in this channel!`)
                    .setColor("RED")
                return newMessage.channel.send({
                    embeds: [embed]
                })
                
            }
    }
    }
})