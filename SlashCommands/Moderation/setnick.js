const { Client, Interaction, MessageEmbed, Message } = require("discord.js");

module.exports = {
    name: "setnick",
    description: "Set new nick name to user",
    type: 'CHAT_INPUT',
    options: [
    {
        name: "user",
        description: "User to change nickname",
        type: 6,
        required: true

    },
    {
        name: "nickname",
        description: "New nickname",
        type: 3,
        required: true,

    },
],
        /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    botPerms: ["MANAGE_NICKNAMES"],
    Permissions: ["MANAGE_NICKNAMES"],


    execute: async (client, interaction) => {
        try {
            interaction.reply({ content: "Nickname command is not ready yet", ephemeral: true})
            const args = interaction.options._hoistedOptions;
            // console.log(args);
            

            const user = args.find(x => x.name === "user");
            const nickname = args.find(x => x.name === "nickname");

            const embed = new MessageEmbed().setColor("RED")

            if (!user.member.manageable) {

                embed.setDescription(`:x: You can't change ${user.member.toString()}'s nickname`);
                return interaction.reply({embeds: [embed]})
            }

            const oldNick = user.member.nickname ? user.member.nickname : user.member.user.username;

            await user.setNickname(nickname.value);

            embed.interaction(`:white_check_mark: ${user.member.toString()}'s Nickname changed`).setFooter(`From ${oldNick} to ${nickname.value}`);
            await interaction.reply({embeds: [embed] });




        } catch (err) {
            console.log("Something went wrong => ", err);
        }
    },
};

