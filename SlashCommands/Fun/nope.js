const {Client, Interaction} = require('discord.js')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "nope",
    description: "Nope somethings...",
    type: 'CHAT_INPUT',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */


    options: [
        {
            name: "user",
            description: "",
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
    .setImage(`https://tenor.com/view/ch%C3%B3-kh%C3%B4ng-l%E1%BA%AFc%C4%91%E1%BA%A7u-kh%C3%B4ng%C4%91%E1%BB%93ng-%C3%BD-t%E1%BB%ABch%E1%BB%91i-gif-12806622`)
    //   .setFooter("Requested by @" + interaction.member.user.tag);
            interaction.reply({ embeds: [helpEmbed] })
        } catch (err) {
            console.log("Something went wrong =>",err);
        }
    },
};