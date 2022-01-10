const {
    MessageEmbed
} = require('discord.js')
const db = require('quick.db')
const client = require('../../AIOBot.js');
const config = require('../../JSON/config.json');
client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (!message.guild) return;


    if (await db.fetch(`afk-${message.author.id}`)) {

        const info = await db.get(`afk-${message.author.id}`);
        const user = message.member
        await db.delete(`afk-${message.author.id}`);

        try {
            await message.member.setNickname(null)
        } catch (err) {
            // console.error(err)
            // const AFKAliases = new MessageEmbed()
            //     .setAuthor(`AFK ❌`, client.user.displayAvatarURL())
            //     .setThumbnail(client.user.displayAvatarURL())
            //     .setDescription('Error !')
            //     .setColor("RED")
            //     .setFooter(client.user.username, client.user.displayAvatarURL())
            //     // .setImage(config.embedbanner)
            //     .setTimestamp();
                
            // message.channel.send({
            //     embeds: [AFKAliases]
            // })
            return
        }

        const afterAFK = new MessageEmbed()
        .setAuthor(`AFK`, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`${message.author.username} have cameback!`)
            .addField(`Reason`, `${info}`)
            .setColor("GREEN")
            .setFooter(client.user.username, client.user.displayAvatarURL())
            // .setImage(config.embedbanner)
            .setTimestamp();
        message.channel.send({
            embeds: [afterAFK]
        })

    }

    const mentionedMember = message.mentions.members.first();
    if (mentionedMember) {
        if (await db.fetch(`afk-${message.mentions.members.first().id}`)) {
            const tagAFK = new MessageEmbed()
            .setAuthor(`AFK`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
                .setDescription(`${mentionedMember.user.username} is now AFk!`)
                .addField(`Reason`, await db.fetch(`afk-${message.mentions.members.first().id}`))
                .setColor("RED")
                .setFooter(client.user.username, client.user.displayAvatarURL())
                // .setImage(config.embedbanner)
                .setTimestamp();
            message.channel.send({
                embeds: [tagAFK]
            });
        } else return;
    }

})