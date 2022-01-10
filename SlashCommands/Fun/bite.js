const {Client, client, Message, Interaction} = require('discord.js')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "bite",
    description: "Bite someone",
    type: 'CHAT_INPUT',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */


    options: [
        {
            name: "user",
            description: "User to bite",
            type: 6,
            required: true
        }
    ],

    botPerms: ["SEND_MESSAGE"],
    execute: async (client, interaction) => {
        try {
            const helpEmbed = new MessageEmbed()
      .setColor('RANDOM')
    //   .setTitle(`${interaction.member.user.tag} just bite ${}`)
        .setImage(`https://nekos.best/api/v1/bite/013.gif`)
    //   .setFooter("Requested by @" + interaction.member.user.tag);
            interaction.reply({ embeds: [helpEmbed] })
        } catch (err) {
            console.log("Something went wrong =>",err);
        }
    },
};