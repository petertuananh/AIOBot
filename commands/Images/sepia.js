const { Client, Message, MessageAttachment } = require("discord.js")
const { Canvas } = require('canvacord')

module.exports = {
    name: "sepia",
    category: "Images",
    description: "sepia",
    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.author;

        const avatar = user.displayAvatarURL({ format: 'png'});

        const image = await Canvas.sepia(avatar)

        message.channel.send(
            // new MessageAttachment({files: [image]}, 'image.gif')
            {files: [image]}, 'image.gif'
        )
    }
}