// const { MessageEmbed } = require('discord.js');
// const db = require('quick.db')
// module.exports = {
//     name: "buy",
//     // aliases: [`pausemusic`],
//     category: 'Music',
//     description: "Tạm dừng phát nhạc trong kênh voice",
//     cooldown: 5,
//     // UserPerms: ["SEND_MESSAGE"],
//     // BotPerms: ["SEND_MESSAGE"],
//     run: async (client, message, args, prefix) => {
//         if (!args[0]) {
//             return message.channel.send(`:x: Pls type item code!`)
//         }
        
        
//         const code = db.get(`code${args[0]}`)
//         const name = db.get(`name${args[0]}`)
//         const price = db.get(`price${args[0]}`)
//         const img = db.get(`img${args[0]}`)





//         const newItem = new MessageEmbed()
//         .setTitle(`Your item ${name}`)
//         .addField(`Code`, code)
//         .addField(`Price`, price)
//         .setImage(img)
//         message.channel.send({ embeds: [newItem] })
//         // db.set(`messid`, msg.id)
//         // db.set(`item`, args[0])
//         // db.set(`price`, args[1])
//         // db.set(`img`, args[2])


//         // client.on('messageReactionAdd', async(reaction, user) => {
//         //     if(reaction.message.partial) await reaction.message.fetch();
//         //     if(reaction.partial) await reaction.fetch();
//         //     if(user.bot) return;
//         //     if(!reaction.message.guild) return;
//         //     if(reaction.bot) return;
//         //     // if(reaction.message.id === message.id){
//         //         if(reaction.emoji.name === '🛒') {
//         //             const newItem = new MessageEmbed()
//         //             .setTitle(`:tada: New Item`)
//         //             // .addField(`Item`, item)
//         //             // .addField(`Price`, price)
//         //             // .setImage(img)
//         //             user.send({ embeds: [newItem] })
//         //         }
//         //     // }
//         // })
//     }
// }