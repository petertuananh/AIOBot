const {
    MessageEmbed
} = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: "badwords",
    aliases: [`bws`, `bwords`],
    category: 'Moderation',
    description: "Show list of badwords",
    cooldown: 5,
    // UserPerms: ["MANAGE_GUILD"],
    // BotPerms: ["MANAGE_GUILD"],
    run: async (client, message, args, prefix) => {

        const words = db.get(`badwords-${message.guild.id}`);

        if (words && words.length) {

            const array = [];

            words.forEach((x, i) => {
                array.push(`**${i + 1}/ [${x.word}] added by ${x.author}**`);
            });

            const embed = new MessageEmbed()
                .setAuthor(`Anti-badword ❓`, client.user.displayAvatarURL())
                .setThumbnail(db.get(`thumb-${message.guild.id}`))
                .setFooter(message.author.tag, message.author.displayAvatarURL())
                .setColor("GREEN")
                .addField(`Danh sách từ badwords`, `${array.join('\n')}`)
                .setTimestamp()
                .setImage(db.get(`banner-${message.guild.id}`))
                .setFooter(client.user.username, client.user.displayAvatarURL())

            return message.channel.send({
                embeds: [embed]
            })
        } else {
            const embed1 = new MessageEmbed()
                .setAuthor(`Anti-badword ❓`, client.user.displayAvatarURL())
                .setThumbnail(db.get(`thumb-${message.guild.id}`))
                .setDescription(`No words have been added yet!`)
                .addField(`Usage`, `${prefix}addbadwords [badwords]`)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setImage(db.get(`banner-${message.guild.id}`))
                .setColor("RED")
            message.channel.send({
                embeds: [embed1]
            })
        }

        // return message.channel.send({
        //     embed: embed
        // });
    }
}