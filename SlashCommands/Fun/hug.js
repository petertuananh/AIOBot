const {Client, Interaction} = require('discord.js')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "hug",
    description: "hug someone",
    type: 'CHAT_INPUT',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */


    options: [
        {
            name: "user",
            description: "User to hug",
            type: 6,
            required: true
        }
    ],

    botPerms: ["SEND_MESSAGE"],
    execute: async (client, interaction) => {
        try {
            const helpEmbed = new MessageEmbed()
      .setColor('RANDOM')
      // .setTitle(`${interaction.member.user.tag} just pat someone!`)
    //   .setTitle(`https://nekos.best/api/v1/pat/021.gif`)
    .setImage(`https://nekos.best/api/v1/hug/015.gif`)
    //   .setFooter("Requested by @" + interaction.member.user.tag);
            interaction.reply({ embeds: [helpEmbed] })
        } catch (err) {
            console.log("Something went wrong =>",err);
        }
    },
};