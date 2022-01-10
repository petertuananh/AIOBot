const { Client, Message, MessageAttachment } = require("discord.js")
const { Canvas } = require('canvacord')

module.exports = {
    name: "wanted",
    category: "Images",
    description: "wanted",
    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.author;

        const avatar = user.displayAvatarURL({ format: 'png'});

        const image = await Canvas.wanted(avatar)

        message.channel.send(
            // new MessageAttachment({files: [image]}, 'image.gif')
            {files: [image]}, 'image.gif'
        )
    }
}