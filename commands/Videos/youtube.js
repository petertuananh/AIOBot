const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, Discord } = require('discord.js');
const fetch = require('node-fetch')
const { DiscordTogether } = require('discord-together');

module.exports = {
    name: 'youtube',
    description: 'Start ytb together!',
    aliases: ["yt", "ytb"],
    category: "Videos",
run: async (client, message, args) => {
        

        const embed = new MessageEmbed()
            .setColor("RED")
            .setTitle(`**<:Youtube:915188560414535700> Youtube**`)

        const channel = message.member.voice.channel;

        if (!channel) {
            embed.setDescription(`**> You have to join a voice channel!**`)
            return message.channel.send({
                embeds: [embed]
            });
        }

        if (!channel == message.guild.me.voice.channel) {
            embed.setDescription(`**> You and me must join the same channel!**`)
            return message.channel.send({
                embeds: [embed]
            });
        }

        const discordTogether = new DiscordTogether(client);
        discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
            const row = new MessageActionRow().addComponents(
                new MessageButton()
                .setStyle("LINK")
                .setURL(`${invite.code}`)
                .setEmoji('<:Youtube:915188560414535700>')
                .setLabel('Start'),
            )
            embed.setDescription(`**> Click the button to start!**`)
            message.channel.send({
                embeds: [embed],
                components: [row]
            })
        })


    }
}