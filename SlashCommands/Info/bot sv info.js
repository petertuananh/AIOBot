const {Client, client, Message, Interaction} = require('discord.js')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "botinfo",
    description: "Bot server info",
    type: 'CHAT_INPUT',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    botPerms: ["SEND_MESSAGE"],
    execute: async (client, interaction) => {
        try {
            const helpEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Bot Hosting')
        .setURL('https://mtsa.xyz/')
        .setAuthor('AIO Bot', 'https://cdn.discordapp.com/avatars/901264884937932851/470bfe4de123dfff0314609d4c2976ad.png?size=1024', 'https://mtsa.xyz')
        // .setDescription('Bot prefix: "."')
        .setThumbnail('https://cdn.discordapp.com/avatars/901264884937932851/470bfe4de123dfff0314609d4c2976ad.png?size=1024')
        .addFields(
            { name: 'OS', value: '``Windows server 2019 Datacenter x64``' },
            { name: 'CPU', value: '``Intel core I3-2100 @ 3.10GHz``' },
            { name: 'Ram', value: '``6.0 GB DIMM DDR3``' },
            { name: 'GPU', value: '``Unknown``' },
            { name: 'Uptime', value: `${process.uptime()} hours`},
            { name: 'Database', value: '``Unknown``' },
            // { name: '\u200B', value: '\u200B' },
            // { name: 'Ram used', value: `${window.performance.memory}` },
        )
        // .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
            interaction.reply({ embeds: [helpEmbed] })
        } catch (err) {
            console.log("Something went wrong =>",err);
        }
    },
};