// const { MessageEmbed } = require('discord.js');
// const db = require('quick.db')
// module.exports = {
//     name: "add",
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
//         if (!args[1]) {
//             return message.channel.send(`:x: Pls type the Item to add!`)
//         }
//         if (!args[2]) {
//             return message.channel.send(`:x: Pls type the item price!`)
//         }
//         if (!args[3]) {
//             return message.channel.send(`:x: Pls type Item img link!`)
//         }
//         const newItem = new MessageEmbed()
//         .setTitle(`:tada: New Item ${args[0]}`)
//         .addField(`Item`, `${args[1]}`)
//         .addField(`Price`, `${args[2]}`)
//         .setImage(`${args[3]}`)
//         msg = await message.channel.send({ embeds: [newItem] })
//         await msg.react ("🛒")
//         message.delete()
//         db.set(`code${args[0]}`, args[0])
//         db.set(`name${args[0]}`, args[1])
//         db.set(`price${args[0]}`, args[2])
//         db.set(`img${args[0]}`, args[3])
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