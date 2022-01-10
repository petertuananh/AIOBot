const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
        name: 'feed',
        description: 'feed someone',
        aliases: ["feed"],
        category: "roleplay",
        usage: '<user>',
        accessableby: "",
    run: async (client, message, args) => {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://nekos.life/api/v2/img/feed");
              const embed = new Discord.MessageEmbed()
             .setColor('#ff4242')
              
             .setDescription(`${message.author} is feeding ${victim}`)
          .setImage(body.url)
           .setTimestamp()
      
        message.channel.send({embeds: [embed]});
        
    }
}