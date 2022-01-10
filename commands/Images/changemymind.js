const { Client, Message, MessageAttachment } = require("discord.js")
const { Canvas } = require('canvacord')

module.exports = {
    name: "changemymind",
    category: "Images",
    description: "A img with your text!",
    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.author;

        msg =
        `${args.join(" ")}`

        const image = await Canvas.changemymind(msg)

        message.channel.send(
            // new MessageAttachment({files: [image]}, 'image.gif')
            {files: [image]}
        )
    }
}