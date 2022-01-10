const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
        name: 'bored',
        description: 'bored at someone',
        aliases: ["bored"],
        category: "roleplay",
        usage: '<user>',
        accessableby: "",
    run: async (client, message, args) => {
        const { body } = await superagent
          .get("https://nekos.best/api/v1/bored");
              const embed = new Discord.MessageEmbed()
             .setColor('#ff4242')
              
          .setDescription(`${message.author} is bored`)
          .setImage(body.url)
           .setTimestamp()
      
        message.channel.send({embeds: [embed]});
        
    }
}