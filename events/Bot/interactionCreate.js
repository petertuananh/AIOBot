const { Client, Interaction, MessageEmbed, Message } = require('discord.js');
/**
 * 
     * @param {Client} client 
     * @param {Interaction} interaction 
 */
module.exports = async (client, interaction) => {
    try {
        if (interaction.isCommand()) {
            const cmd = client.slashCommands.get(interaction.commandName);
            if (!cmd) return interaction.reply({content: "Something went wrong"});


            const embed = new MessageEmbed().setColor("RED");



            if (!interaction.guild.me.permissions.has("SEND_MESSAGES", "EMBED_LINKS")) {
                embed.setDescription(`:x: I need \`SEND_MESSAGES\` & \`EMBED_LINKS\` Permission`)
                return await interaction.member.send({embeds:[embed], ephemeral: true})
            }




            if (!interaction.member.permissions.has(cmd.permissions || [])){
                embed.setDescription(`:x: You need these permissions \`\`\`${cmd.permissions.join(", ")}\`\`\``)
                return await interaction.reply({embeds:[embed], ephemeral: true})
            }



            if (!interaction.guild.me.permissions.has(cmd.botPerms || [])){
                embed.setDescription(`:x: I need these permissions \`\`\`${cmd.permissions.join(", ")}\`\`\``)
                return await interaction.reply({embeds:[embed], ephemeral: true})
            }



            const channelPerms = interaction.channel.permissionsFor(interaction.guild.me).toArray();

            const checkArr = [];
            const chPerms = cmd.channelPerms || [];

            
            channelPerms.forEach((x) => (chPerms.includes(x) ? checkArr.push(true) : checkArr.push(false)))

            // console.log(checkArr);
            if (checkArr.includes(false) && !checkArr.includes(true) && chPerms.length) {
                embed.setDescription(`I need these permission for ${interaction.channel.toString()} Channel \`\`\`${chPerms.join
                    (", ")}\`\`\``)
                return await interaction.reply({embeds:[embed], ephemeral: true})
            }



            cmd.execute(client, interaction);
        }
    } catch (err) {
        console.log("Something went wrong => ",err);
    }

};