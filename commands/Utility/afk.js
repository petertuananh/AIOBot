const {
    MessageEmbed
} = require('discord.js')
const config = require('../../JSON/config.json');
const db = require('quick.db')

module.exports = {
    name: 'afk',
    aliases: ['afking'],
    category: 'Utility',
    description: 'AFK mode',
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args) => {
        // const isADMIN = new MessageEmbed()
        // .setAuthor(`AFK`, client.user.displayAvatarURL())
        // .setThumbnail(db.get(`thumb-${message.guild.id}`))
        //     .setColor('RED')
        //     .setDescription(`${client.user.username} can't change your nick name!`)
        //     .setFooter(client.user.username, client.user.displayAvatarURL())
        //     .setImage(db.get(`banner-${message.guild.id}`))
        //     .setTimestamp();
            
        // if (message.member.permissions.has("ADMINISTRATOR")) 
        // return message.channel.send({embeds: [isADMIN]})
        const reason = args.join(' ');

        const whatReason = new MessageEmbed()
        .setAuthor(`AFK`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor('RED')
            .setDescription('Please tell me the reason')
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setImage(db.get(`banner-${message.guild.id}`))
            .setTimestamp();

        if (!reason) return message.channel.send({
            embeds: [whatReason]
        })

        const AFKPrefix = `[AFK] `

        try {
            await db.set(`afk-${message.author.id}`, reason);
            const AFKEmbed = new MessageEmbed()
            .setAuthor(`AFK`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
                .setDescription(`${message.author.username} started afk!`)
                .addField(`Afk reason`, `${reason}`)
                .setColor("GREEN")
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setImage(db.get(`banner-${message.guild.id}`))
                .setTimestamp();
            message.channel.send({
                embeds: [AFKEmbed]
            })
        } catch (err) {
            // console.log(err)
            // const AFKError = new MessageEmbed()
            // .setAuthor(`AFK`, client.user.displayAvatarURL())
            // .setThumbnail(db.get(`thumb-${message.guild.id}`))
            //     .setDescription(`Error!`)
            //     .setColor("RED")
            //     .setFooter(client.user.username, client.user.displayAvatarURL())
            //     .setImage(db.get(`banner-${message.guild.id}`))
            //     .setTimestamp();
            // message.channel.send({
            //     embeds: [AFKError]
            // })
            return;
        }

        try {
            await message.member.setNickname(AFKPrefix + message.member.user.username)
        } catch (err) {
            // console.error(err)
            // const AFKAliases = new MessageEmbed()
            //     .setTitle(`${client.user.username} AFK !`)
            //     .setDescription('Error!')
            //     .setColor("RED")
            //     .setFooter(client.user.username, client.user.displayAvatarURL())
            //     .setImage(db.get(`banner-${message.guild.id}`))
            //     .setTimestamp();
            // message.channel.send({ embeds : [AFKAliases]})
            return;
        }
    }
}