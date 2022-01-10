const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
        name: 'slap',
        description: 'Slap someone',
        aliases: ["slap"],
        category: "roleplay",
        usage: '<user>',
        accessableby: "",
    run: async (client, message, args) => {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://nekos.life/api/v2/img/slap");
              const embed = new Discord.MessageEmbed()
             .setColor('#ff4242')
              
             .setDescription(`${message.author} slap ${victim}`)
          .setImage(body.url)
           .setTimestamp()
      
        message.channel.send({embeds: [embed]});
        
    }
}

// const { MessageEmbed } = require("discord.js");
// const nekos = require("nekos.life");
// const colors = require('../../botconfig/colors.json')
// const {
//   sfw: { slap },
// } = new nekos();
// module.exports = {
//     name: "slap",
//     description: "Get's a slap reaction!",
//     aliases: ["SLAP", "Slap"],
//     usage: "<user>",
//     accessableby: "",
//   run: async (client, message, args) => {
//     const { url } = await slap().catch(() => {});

//     if (!url) return message.channel.send(`Could not connect to nekos.life`);

//     const embed = new MessageEmbed();

//     if (
//       message.mentions.members.size &&
//       message.mentions.members.first().id === client.user.id
//     ) {
//       return message.channel.send(
//         `${
//           [`Ouch! How dare you slap me!`, `Stop that!`, `It hurts! ;-;`][
//             Math.floor(Math.random() * 2)
//           ]
//         }`
//       );
//     } else if (
//       message.mentions.members.size &&
//       message.mentions.members.first().id === message.author.id
//     ) {
//       return message.channel.send(`Wai~ Seriously!?`);
//     } else if (message.mentions.members.size) {
//         .setColor('#ff4242')
//           .setDescription(`${message.member} slapped ${message.mentions.members.first()}!`)
//           .setImage(url)
//       return message.channel.send({embeds: [embed]});
//     } else {
//       return message.channel.send(
//         `${message.member}, are you practicing to slap or something?`
//       );
//     }
//   },
// };