const { Client, Message, MessageAttachment } = require("discord.js")
const { Canvas } = require('canvacord')

module.exports = {
    name: "prison",
    category: "Images",
    description: "Male your avatar in prison",
    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.author;

        const avatar = user.displayAvatarURL({ format: 'png'});

        const image = await Canvas.jail(avatar)

        message.channel.send(
            // new MessageAttachment({files: [image]}, 'image.gif')
            {files: [image]}, 'image.gif'
        )
    }
}