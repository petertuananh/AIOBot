const {Client, Interaction} = require('discord.js')

module.exports = {
    name: "unban",
    description: "Unban someone",
    type: 'CHAT_INPUT',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    options: [
        {
            name: "user",
            description: "User to Unban",
            type: 2,
            required: true
        }
    ],
    execute: async (client, interaction) => {
        try {
            interaction.reply({content: "Unban command is not ready yet", ephemera: "true"})
        } catch (err) {
            console.log("Something went wrong =>",err);
        }
    },
};



// const {Client, Interaction} = require('discord.js')

// module.exports = {
//     name: "kick",
//     description: "Kick someone",
//     type: 'CHAT_INPUT',
//     /**
//      * 
//      * @param {Client} client 
//      * @param {Interaction} interaction 
//      */

//     options: [
//         {
//             name: "user",
//             description: "User to kick",
//             type: 6,
//             required: true
//         }
//     ],


//     permissions: ["KICK_MEMBERS"],
//     botPerms: ["KICK_MEMBERS"],
//     execute: async (client, interaction) => {
//         try {
//             interaction.reply({content: "Kick command is not ready yet", ephemera: "true"})
//         } catch (err) {
//             console.log("Something went wrong =>",err);
//         }
//     },
// };