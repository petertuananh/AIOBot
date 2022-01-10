const { Client, Mesage, MessageEmbed } = require('discord.js')
const child = require('child_process')

module.exports  = {
    name: "cmd",
    // aliases: [`guildsbot`],
    category: 'Bot',
    description: `Command!`,
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
	ownerOnly: true,
    run: async (client, message, args, prefix) => {

        const command = args.join(" ")
        if(!command) return message.reply('```Pls type the command!```')

        child.exec(command, (err, res) => {
            if(err) return console.log(err);
            // message.channel.send(`\`\`\`${res.slice(0, 2000), { code: 'js'}}\`\`\``)
            message.channel.send(res.slice(0, 2000), { code: 'js'})
        })

    }
}