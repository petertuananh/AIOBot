const {Client, client, Message, Interaction} = require('discord.js')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "serverinfo",
    description: "Ping bot",
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
      .setColor('RANDOM')
      .setTitle(`:x: This command isn't finish!`)
    //   .setDescription(`${client.ws.ping}ms`)
    //   .setFooter("Requested by @" + interaction.member.user.tag);
            interaction.reply({ embeds: [helpEmbed] })
        } catch (err) {
            console.log("Something went wrong =>",err);
        }
    },
};