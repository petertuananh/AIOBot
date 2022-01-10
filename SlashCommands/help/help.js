const {Client, Interaction} = require('discord.js')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "help",
    description: "Help command",
    type: 'CHAT_INPUT',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */


    // options: [
    //     {
    //         name: "user",
    //         description: "User to pat",
    //         type: 6,
    //         required: true
    //     }
    // ],

    botPerms: ["SEND_MESSAGE"],
    execute: async (client, interaction) => {
        // interaction.reply(`:x: Sr but slash help command have a problem! Pls use .help instead!`)
        try {
            const helpEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Help command')
        .setURL('https://mtsa.xyz/')
        .setAuthor('AIO Bot', 'https://cdn.discordapp.com/avatars/901264884937932851/470bfe4de123dfff0314609d4c2976ad.png?size=1024', 'https://mtsa.xyz')
        .setDescription(':x: Sr but slash help command have a problem! Pls use .help instead!')
        .setThumbnail('https://cdn.discordapp.com/avatars/901264884937932851/470bfe4de123dfff0314609d4c2976ad.png?size=1024')
        // .addFields(
        //     { name: '<a:Here:907106477867687956> Utility', value: '``embed`` ``reminder`` ``cfs`` ``say`` ``ping`` ``info`` ``serverinfo`` ``about`` ``weather`` ``covid`` ``userinfo`` ``rolecheck`` ``avatar`` ``time`` ``cal`` ' },
        //         { name: '<a:Here:907106477867687956> Fun command', value: '``like`` ``dknow`` ``bite`` ``clap`` ``cry`` ``pat`` ``kiss`` ``shy`` ``nope`` ``hello`` ``bye`` ``hug``' },
        //         // { name: '\u200B', value: '\u200B' },
        //         { name: '<a:Here:907106477867687956> Afk command', value: '``afk`` ``wait`` ``wait1`` ``wait1h`` ``wait1d`` ``busy`` ``free`` ' },
        //         { name: '<a:Here:907106477867687956> Music command', value: '``back`` ``clearmusic`` ``filter`` ``loop`` ``nowplaying`` ``pause`` ``play`` ``progress`` ``queue`` ``resume`` ``save`` ``search`` ``seek`` ``shuffle`` ``skip`` ``stop`` ``volume``' },
        //         // { name: '<a:Here:907106477867687956> NSFW command', value: '||``girl`` ``man`` ``porn`` ``ass`` ``pussy`` ``dick``||' },
        //         // { name: 'Calculator', value: '``Ex: .cal 1 + 2``' },
        //         // { name: 'Clock', value: '``Ex: .time vn``' },
        //         { name: '<a:Here:907106477867687956> Games', value: '``dice`` ``baucua``' },
        //         // { name: '<a:Here:907106477867687956> Server protection', value: '``antiraid`` ``antibot`` ``ghostping``' },
        //         { name: '<a:Here:907106477867687956> Moderation', value: '``badword`` ``kick`` ``ban`` ``unban````slowmode 1s, 5m, 2h,...`` ``warn`` ``warnings`` ``resetwarn`` ``giverole`` ``removerole`` ``clear`` ``mute`` ``unmute`` ' },
        //         { name: '<a:Here:907106477867687956> Other features', value: '``afk system`` ``connect`` ``welcome message``' },
        //         { name: '<a:Here:907106477867687956> Inter-server messaging usage', value: 'command: .connect <channel_id>'
        //         ,value: '``to chat public: .. <your message>``' },
        //         { name: '<a:Here:907106477867687956> Report to Admin', value: '``.report <your content>``' },
        // )
        // .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter("Requested by @" + interaction.member.user.tag);
            interaction.reply({ embeds: [helpEmbed] })
        } catch (err) {
            console.log("Something went wrong =>",err);
        }
    },
};