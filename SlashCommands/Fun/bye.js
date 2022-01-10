const {Client, Interaction} = require('discord.js')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "bye",
    description: "Bye someone",
    type: 'CHAT_INPUT',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */


    options: [
        {
            name: "bye",
            description: "Bye...",
            type: 6,
            required: true
        }
    ],

    botPerms: ["SEND_MESSAGE"],
    execute: async (client, interaction) => {
        try {
            const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
      // .setTitle(`${interaction.member.user.tag} just bite someone!`)
    //   .setTitle(`https://nekos.best/api/v1/pat/021.gif`)
      .setImage(`https://scr.vn/wp-content/uploads/2020/07/H%C3%ACnh-n%E1%BB%81n-%C4%91%E1%BB%99ng-t%E1%BA%A1m-bi%E1%BB%87t.gif`)
    //   .setFooter("Requested by @" + interaction.member.user.tag);
            interaction.reply({ embeds: [helpEmbed] })
        } catch (err) {
            console.log("Something went wrong =>",err);
        }
    },
};