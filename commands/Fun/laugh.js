const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
        name: 'laugh',
        description: 'Laughing at someone',
        aliases: ["laugh"],
        category: "roleplay",
        usage: '<user>',
        accessableby: "",
    run: async (client, message, args) => {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://nekos.best/api/v1/laugh");
              const embed = new Discord.MessageEmbed()
             .setColor('#ff4242')
              
          .setDescription(`${message.author} is laughing at ${victim}`)
          .setImage(body.url)
           .setTimestamp()
      
        message.channel.send({embeds: [embed]});
        
    }
}