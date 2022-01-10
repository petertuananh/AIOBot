// Không tương thích với eval

const client = require('../../AIOBot.js');
const Discord = require('discord.js');
const db = require('quick.db');
const {
    is_url
} = require('../../functions/url');
const config = require('../../JSON/config.json');
client.on('messageCreate', async message => {
    const blockinvLink = db.get(`blockinvLink.${message.channel.id}`)
    if (message.channel.id === blockinvLink){
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.member.permissions.has("ADMINISTRATOR")) {
        let blacklisted = [
            'discord.gg',
            'https://discord.gg',
            'discord.com/invite',]
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
                    .setDescription(`You can't send invite link in this channel!`)
                    .setColor("RED")
                return message.channel.send({
                    embeds: [embed]
                })
                
            }
    }
    }
})