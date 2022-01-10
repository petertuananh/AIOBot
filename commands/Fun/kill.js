const Discord = require('discord.js');
const superagent = require('superagent');
const axios = require('axios')
const config = require('../../JSON/config.json')
module.exports = {
        // name: 'kill',
        description: 'Kills people',
        aliases: ["hug"],
        category: "roleplay",
    run: async (client, message, args) => {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        let res = await axios.get(encodeURI(`https://api.huyapi.ga/v2/?type=kill&api_key=${config.huyapikey}`));
              const embed = new Discord.MessageEmbed()
            .setColor('#ff4242')
            .setDescription(`${message.author} just kill ${victim}`)
            .setImage(res.data.url)
            .setTimestamp()
        message.channel.send({embeds: [embed]});
        
    }
}