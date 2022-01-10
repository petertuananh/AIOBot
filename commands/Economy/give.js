const { MessageEmbed } = require('discord.js')
const db = require('quick.db') 
const config = require('../../JSON/config.json');
module.exports = {
    name: "givemoney",
    aliases: [`give`],
    category: 'Economy',
    description: "Give money to user!",
    cooldown: 5,
    run: async (client, message, args, prefix) => {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const embed = new MessageEmbed()
            .setAuthor(`<a:money:915396544587522048> ACOIN`, client.user.displayAvatarURL())
            .addField(`Reason:`, `Please indicate the recipient`, false)
            .addField(`Usage:`, `\`\`${prefix}givemoney @[tag] [money]\`\``, false)
            .setFooter(`<:pnv_logomoney:924834919027449956> Economy System`)
            .setTimestamp()
            .setColor('RED')
        if(!user) return message.channel.send({embeds: [embed]})
        
        const money = args[1]

        const embed1 = new MessageEmbed()
            .setAuthor(`ACOIN 💸`, client.user.displayAvatarURL())
            .addField(`Reason:`, `Please indicate the amount you want to add`, false)
            .addField(`Usage:`, `\`\`${prefix}givemoney @[tag] [money]\`\``, false)
            .setFooter(`<:pnv_logomoney:924834919027449956> Economy System`)
            .setTimestamp()
            .setColor('RED')
        if(!money) return message.channel.send({embeds: [embed1]})

        const embed2 = new MessageEmbed()
            .setAuthor(`<a:money:915396544587522048> ACOIN`, client.user.displayAvatarURL())
            .addField(`Reason:`, `\`${money}\` must be number!`, false)
            .setFooter(`<:pnv_logomoney:924834919027449956> Economy System`)
            .setTimestamp()
            .setColor('RED')
        if(isNaN(parseInt(args[1]))) return message.channel.send({embeds: [embed2]})
        const sl = db.get(`money-{message.author.id}`)
        if (sl < 0){
            return message.channel.send(`Thiếu tiền sao gửi:)))`)
        }

        db.add(`money-${user.id}`, money)
        db.subtract(`money-${message.author.id}`, money)


        const embed3 = new MessageEmbed()
            .setTimestamp()
            .setFooter(`<:pnv_logomoney:924834919027449956> Economy System`)
            .setColor('RANDOM')
            .setAuthor(`<a:money:915396544587522048> ACOIN`, client.user.displayAvatarURL())
            .setDescription(`${user}  **${money} | 💸**`)
            .addField('Sender', `${message.author.username}`)
        message.channel.send({embeds: [embed3]})
    }
}