const { Client, Message, MessageAttachment, MessageEmbed } = require("discord.js")
const { Canvas } = require('canvacord')

module.exports = {
    name: "blur",
    category: "Images",
    description: "Blur your avatar!",
    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.author;

        const avatar = user.displayAvatarURL({ format: 'png'});

        const image = await Canvas.blur(avatar)
        const Embed = new MessageEmbed()
        message.channel.send(
            // new MessageAttachment({files: [image]}, 'image.gif')
            {files: [image]}, 'image.gif'
        )
    }
}