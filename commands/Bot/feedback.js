const {
    MessageEmbed
} = require('discord.js')
const db = require("quick.db");
const config = require('../../JSON/config.json');
module.exports = {
    name: "feedback",
    aliases: [`gopy`],
    category: 'Bot',
    description: `Suggestions for bots`,
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {

        const feedback = args.join(" ");
        const guild = client.channels.cache.get(config.feedback)

        const embed = new MessageEmbed()
            .setTitle(`🆘 ${client.user.username} FeedBack !`)
            .setColor("RANDOM")
            .setDescription(`Vui lòng cho biết điều bạn cần góp ý`)
            .addField(`Cách dùng`, `${prefix}feedback [điều muốn góp ý]`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))
        if (!feedback) return message.channel.send({
            embeds: [embed]
        });

        const embed1 = new MessageEmbed()
            .setAuthor(`[BOT] FeedBack 📄`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("RANDOM")
            .addField('Name', message.author.toString(), false)
            .addField('Server', message.guild.name, true)
            .addField('Server ID', message.guild.id, true)
            .addField('Suggest', feedback, false)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        const embed2 = new MessageEmbed()
            .setAuthor(`[BOT] FeedBack 📄`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor("RANDOM")
            .setDescription(`Thanks for your suggest ${client.user.username} ! 😆`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))

        message.channel.send({
            embeds: [embed2]
        });


        guild.send({
            embeds: [embed1]
        })
    }
}