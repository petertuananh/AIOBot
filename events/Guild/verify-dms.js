// const client = require('../../AIOBot.js');
// const config = require('../../JSON/config.json');
// const { MessageEmbed, MessageAttachment } = require('discord.js');
// const db = require('quick.db');
// const {
//     createCanvas,
//     loadImage,
//     registerFont
// } = require('canvas')
// const path = require('path')
// client.on('messageReactionAdd', async(reaction, user, message) => {
//     const messageID = db.get(`messverify.${reaction.message.guild.id}`) // Mess ID
//     const iconreact = "✅"
//     const reactrole = db.get(`roleverify.${reaction.message.guild.id}`) // Role ID
//     if(reaction.message.partial) await reaction.message.fetch();
//     if(reaction.partial) await reaction.fetch();
//     if(user.bot) return;
//     if(!reaction.message.guild) return;
//     if(reaction.message.id === messageID){
//         if(reaction.emoji.name === iconreact) {
//             const number = "9"
// const letter1 = Math.floor(Math.random() * number)
// const letter2 = Math.floor(Math.random() * number)
// const letter3 = Math.floor(Math.random() * number)
// const letter4 = Math.floor(Math.random() * number)
// const letter5 = Math.floor(Math.random() * number)
// const letter6 = Math.floor(Math.random() * number)
// function makeid(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * 
//  charactersLength));
//    }
//    return result;
// }
// const letter7 = makeid(1)
// const letter8 = makeid(1)
// const letter9 = makeid(1)
// const letter10 = makeid(1)
// registerFont(path.join(__dirname, '../../', 'font/ComicSansMS3.ttf'), { family: 'ComicSansMS3' }); // eslint-disable-line max-len
//         const canvas = createCanvas(1000, 333) // Canvas Size
//         const ctx = canvas.getContext('2d') // Making 2D
//         let backgroundimage = await loadImage('https://cdn.discordapp.com/attachments/891181757649526794/929197690594680862/unknown.png')
//         ctx.font = '45px ComicSansMS3'
//         ctx.textAlign = 'center'
//         ctx.t
//         ctx.drawImage(backgroundimage, 0, 0, canvas.width, canvas.height) // For Making Image
//         ctx.fillStyle = '#00FFFF' // 
//         ctx.fillText(`${letter1}    ${letter2}    ${letter7}    ${letter3}    ${letter8}    ${letter4}    ${letter5}`, 430, 175)

//         const attachment = new MessageAttachment(canvas.toBuffer(), 'rank.png')
//             const embed = new MessageEmbed()
//             .setColor('#00FFFF')
//             .setDescription(`<:TDN_security:927045324193808384> Type the verify **Greenish Blue** code in image here! Ex: **35z1U60**`)
//             // const channel = reaction.message.guild.members.cache.get(user.id)
//             const captcha = reaction.message.channel.send({
//                 embeds: [embed],
//                 files: [attachment]
//             }).then(msg => {
//                 setTimeout(() => msg.delete(), 20000)
//             })

//             const filter = m => (m.content.includes(`${letter1}${letter2}${letter7}${letter3}${letter8}${letter4}${letter5}`) && m.author.id != client.user.id);
//             const channel = reaction.message.channel;
//             const collector = channel.createMessageCollector(filter, { time: 20000 });
//             collector.on('collect', m => {
//             if (m.author.bot) return
//             if (m.content == `${letter1}${letter2}${letter7}${letter3}${letter8}${letter4}${letter5}`) {
//                 reaction.message.guild.members.cache.get(user.id).roles.add(reactrole, `Verify successfully!`)
//                 const success = new MessageEmbed()
//                 .setColor('BLUE')
//                 .setTitle(`<:Success:912138764174884894> You have verify successfully!`)
//                 .setFooter(`Test!`)
//                 reaction.message.guild.members.cache.get(user.id).roles.add(reactrole) // Add role
//                 reaction.message.channel.send({embeds: [success]})
//                 .then(msgs => {
//                     setTimeout(() => msgs.delete(), 3000)
//                 })


//                 // captcha.then(msgt => {
//                 //     setTimeout(() => msgt.delete(), 0)
//                 // })
//                 m.delete()
//             }else{
//                 const success = new MessageEmbed()
//                 .setColor('RED')
//                 .setTitle(`<:deny_topgg:915231851285717003> Wrong captcha!`)
//                 .setFooter(`Test!`)
//                 // reaction.message.guild.members.cache.get(user.id).send({embeds: [success]})
//                 m.delete()
//             }
//             })
//             collector.on('end', collected => {
//                 const success = new MessageEmbed()
//                 .setColor('RED')
//                 .setTitle(`<:deny_topgg:915231851285717003> Time out, pls verify again!`)
//                 .setFooter(`Test!`)
//                 // reaction.message.guild.members.cache.get(user.id).send({embeds: [success]})
//             });
//         }

//     }
// })