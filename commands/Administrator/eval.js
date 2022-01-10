const { MessageEmbed } = require('discord.js')
const { inspect } = require('util')
const config = require('../../JSON/config.json');
module.exports = {
    name: 'eval',
    aliases: ['evaluates'],
    cooldown: 5,
    category: 'Administrator',
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    description: 'Translate eval into a JS string',
    ownerOnly: true,

    run: async (client, message, args, prefix) => {

        const command  = args.join(' ')

        const embed1 = new MessageEmbed()
        .setAuthor(`[ADMIN] Evaluated 💠`, client.user.displayAvatarURL())
        .setThumbnail(config.thumbnail)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("RED")
        .setDescription(`Eval test command!`)
        if (!command ) return message.channel.send({embeds : [embed1]})

        try {
            const evaled = await eval(command)
            let palabras = ["token", "secret", "destroy", "clone"]
            if (palabras.some(word => message.content.toLowerCase().includes(word))) {
                const embed = new MessageEmbed()
                    .setAuthor(`[ADMIN] Evaluated 💠`, client.user.displayAvatarURL())
                    .setThumbnail(config.thumbnail)
                    .setDescription(`Can't send \`${palabras}\` 😡`)
                    .setColor("RED")
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setImage(config.embedbanner)
                    .setTimestamp()
                return message.channel.send({embeds : [embed]})
            }

            const embed2 = new MessageEmbed()
            .setAuthor(`[ADMIN] Evaluated 💠`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .setColor("RED")
            .addField("Type", `\`\`\`prolog\n${typeof(evaled)}\`\`\``)
            // .addField(`Tốc độ`, `\`\`\`ytml\n${Date.now() - message.createdTimestamp}ms\`\`\``)
            .addField("Code", `\`\`\`js\n${command}\`\`\``)
            .addField("Output", `\`\`\`js\n${inspect(evaled, { depth: 0}) }\`\`\``)
            .setImage(config.embedbanner)
            message.channel.send({ embeds : [embed2] })
            
        } catch (err) {
            // console.log(err)
            const embed2 = new MessageEmbed()
            .setAuthor(`[ADMIN] Evaluated 💠`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .setDescription(`Have an error !`)
            .setColor("RED")
            .addField("Code", `\`\`\`js\n${command}\`\`\``)
            .addField("Error", `\`\`\`js\n${err.message}\`\`\``)
            .setImage(config.embedbanner)
          message.channel.send({ embeds : [embed2] })
        }
    }
}