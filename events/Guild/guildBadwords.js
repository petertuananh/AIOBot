const client = require('../../AIOBot.js');
const Discord = require('discord.js');
const db = require('quick.db');
const {
    is_url
} = require('../../functions/url');
const config = require('../../JSON/config.json');
client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (!message.guild) return;

    if (!message.member.permissions.has("ADMINISTRATOR")) {
        if(await db.has(`swear-${message.guild.id}`) === false) return;

        const words = await db.get(`badwords-${message.guild.id}`)
        const array = [];
        words.forEach((x) => {
            array.push(`${x.word}`);
        });

        for (let i = 0; i < array.length; i++) {
            if (message.content.includes(array[i])) {
                message.delete();
                const embed1 = new Discord.MessageEmbed()
                .setAuthor(`ANTI-BADWORD ❌`, client.user.displayAvatarURL())
                .setThumbnail(db.get(`thumb-${message.guild.id}`))
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setDescription(`**${message.member.user.username}** just say \`${array[i]}\`\n`)
                .setColor("RED")
                .setImage(db.get(`banner-${message.guild.id}`))
            return message.channel.send({embeds: [embed1]})
            }
        }


        // if (message.content.includes(badwords)) 
        //     message.delete().catch(err => {})
        //     const embed1 = new Discord.MessageEmbed()
        //         .setTitle(`❌ ${client.user.username} Permissions !`)
        //         .setTimestamp()
        //         .setFooter(client.user.username, client.user.displayAvatarURL())
        //         .setDescription(`Từ bạn vừa nói nằm trong danh sách cấm của máy chủ này!`)
        //         .setColor("RED")
        //     return message.channel.send({embeds: [embed1]})
    }

    // const array = [];
    //     words.forEach((x, i) => {
    //         array.push(`\`${i + 1}\` > **${x.word}** | \`Người Thêm : ${x.author}\``);
    // });
})

// message.delete().catch(err => {})
// const embed1 = new Discord.MessageEmbed()
//     .setTitle(`❌ ${client.user.username} Permissions !`)
//     .setTimestamp()
//     .setFooter(client.user.username, client.user.displayAvatarURL())
//     .setDescription(`Bạn không được phép nói từ \`${m}\` ở máy chủ này`)
//     .setColor("RED")
// return message.channel.send({embeds: [embed1]})