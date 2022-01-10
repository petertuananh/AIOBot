const Discord = require('discord.js');
const superagent = require('superagent');
const axios = require('axios')
const config = require('../../JSON/config.json')
module.exports = {
        name: 'hug',
        description: 'Hugs people',
        aliases: ["hug"],
        category: "roleplay",
        usage: '<user>',
        // accessableby: "",
    run: async (client, message, args) => {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        let res = await axios.get(encodeURI(`https://api.huyapi.ga/v2/?type=hug&api_key=${config.huyapikey}`));
        // const { body } = await superagent
        //   .get("https://nekos.life/api/v2/img/hug");
              const embed = new Discord.MessageEmbed()
             .setColor('#ff4242')
              
          .setDescription(`${message.author} just hugged ${victim}`)
          .setImage(res.data.url)
           .setTimestamp()
      
        message.channel.send({embeds: [embed]});
        
    }
}