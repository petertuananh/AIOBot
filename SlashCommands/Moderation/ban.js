const {Client, Interaction} = require('discord.js')

module.exports = {
    name: "ban",
    description: "Ban someone",
    type: 'CHAT_INPUT',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */


    options: [
        {
            name: "user",
            description: "User to ban",
            type: 6,
            required: true
        }
    ],



    permissions: ["BAN_MEMBERS"],
    botPerms: ["BAN_MEMBERS"],
    execute: async (client, interaction) => {
        try {
            interaction.reply({content: "Ban command is not ready yet", ephemera: "true"})
        } catch (err) {
            console.log("Something went wrong =>",err);
        }
    },
};