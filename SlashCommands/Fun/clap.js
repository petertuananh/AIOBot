const {Client, Interaction} = require('discord.js')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "clap",
    description: "Clap",
    type: 'CHAT_INPUT',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */

    botPerms: ["SEND_MESSAGE"],
    execute: async (client, interaction) => {
        try {
            interaction.reply(`👏`)
        } catch (err) {
            console.log("Something went wrong =>",err);
        }
    },
};