const {
    MessageEmbed
} = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
    name: "removebadwords",
    aliases: [`removebws`, `rbws`],
    category: 'Moderation',
    description: "Delete banned badwords",
    cooldown: 5,
    UserPerms: ["MANAGE_GUILD"],
    BotPerms: ["MANAGE_GUILD"],
    run: async (client, message, args, prefix) => {
        const pog = db.get(`badwords-${message.guild.id}`)
        const word = args.join(' ')

        const embed = new MessageEmbed()
            .setAuthor(`Anti-badword ❌`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setDescription(`Please indicate the word you want to delete!`)
            .addField(`Usage`, `${prefix}removebadwords [badwords]`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setColor("RED")
            .setImage(db.get(`banner-${message.guild.id}`))

        if (!word) return message.channel.send({
            embeds: [embed]
        })

        if (pog) {
            const data = pog.find((x) => x.word.toLowerCase() === word.toLowerCase());
            const embed1 = new MessageEmbed()
                .setAuthor(`Anti-badword ✅`, client.user.displayAvatarURL())
                .setThumbnail(db.get(`thumb-${message.guild.id}`))
                .setDescription(`Can't find \`${word}\`!`)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setColor("RED")
                .setImage(db.get(`banner-${message.guild.id}`))

            if (!data) return message.channel.send({
                embeds: [embed1]
            })

            const yes = pog.indexOf(data);
            delete pog[yes];

            const filter = pog.filter((x) => {
                return x != null && x != '';
            });

            db.set(`badwords-${message.guild.id}`, filter);
            const embed2 = new MessageEmbed()
                .setTitle(`✅ ${client.user.username} BadWords`)
                .setDescription(`Removed \`${word}\` successfully!`)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setColor("GREEN")
                .setImage(db.get(`banner-${message.guild.id}`))
            message.channel.send({
                embeds: [embed2]
            })
        } else {
            const embed3 = new MessageEmbed()
                .setTitle(`❌ ${client.user.username} BadWords`)
                .setDescription(`Can't find the word!`)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setColor("RED")
                .setImage(db.get(`banner-${message.guild.id}`))
            message.channel.send({
                embeds: [embed3]
            })
        }
    }
}