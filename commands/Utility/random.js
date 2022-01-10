const {MessageEmbed} = require("discord.js");
const db = require("quick.db");
module.exports = {
    name: "random",
    aliases: ['rd'],
    description: `Random number`,
    cooldown: 5,
    category: "Utility",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setColor("RED")
            .setTitle(`🥲 Random`)
        const number = args[0]
        const rand1 = Math.floor(Math.random() * 100000)
        if (!number) {
            embed.setDescription(`Your number: **${rand1}**`)
            return message.channel.send({
                embeds : [embed]
            })
        }else{
            if (isNaN(number)) {
                embed.setDescription(`Value must be number!`)
                return message.channel.send({
                    embeds : [embed]
                })
            }
            if (number < 2) {
                embed.setDescription(`Number must be higher than 2`)
                return message.channel.send({
                    embeds : [embed]
                })
            }
            if (number > 100000) {
                embed.setDescription(`Number must be less than 100000`)
                return message.channel.send({
                    embeds : [embed]
                })
            }
            const rand2 = Math.floor(Math.random() * number)
            embed.setDescription(`Your number: **${rand2}**`)
            return message.channel.send({
                embeds : [embed]
            }) 
        }

    }
}