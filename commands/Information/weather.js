const { MessageEmbed } = require('discord.js')
const config = require('../../JSON/config.json');
const db = require("quick.db");
const weather = require('weather-js')

module.exports = {
    name: "weather",
    category: "Information",
    aliases: ['weathercity', 'wea'],
    description: "Weather information of a city",
    cooldown: "5",
    cooldown: 5,
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args, prefix) => {

        const errorCity = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`[WEA] ☁`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Lí do:`, `Vui lòng cho biết tỉnh hoặc thành phố`, false)
            .addField(`Cách dùng:`, `${prefix}weather [tên tỉnh/thành phố]`, false)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())

        if(!args[0]) return message.channel.send({ embeds: [errorCity]})
      
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
        
        if(err) message.channel.send(err.message);

        if(result.length === 0) {
            const errorCity2 = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`[WEA] ☁`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .addField(`Reason:`, `Please indicate a valid province or city`, false)
            .addField(`Usage:`, `${prefix}weather [location]`, false)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            message.channel.send({ embeds: [errorCity2]})
            return undefined;
        }

            var current = result[0].current;
            var location = result[0].location;

            const embed = new MessageEmbed()
            .setAuthor(`[WEA] weather situation ☁`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
                .setDescription(`Weather ${current.observationpoint}`)
                // .setThumbnail(current.imageUrl)
                .setColor("GREEN")
                .addField('Timezone', `UTC ${location.timezone}`, true)
                // .addField('Loại Độ', `Độ ${location.degreetype}`, true)
                .addField('Temperature', `${current.temperature}°${location.degreetype}`, true)
                .addField('Fells', `${current.feelslike}°${location.degreetype}`, true)
                .addField('Sky text', `${current.skytext}`, true)
                .addField('Wind', `${current.windspeed}`, true) // windspeed winddisplay
                .addField('Humidity ', `${current.humidity}%`, true)
                .addField('Update at', `${current.day} ${current.date}`, true)
                // .addField('**Day**', `${current.day}`, true)
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
                .setImage(db.get(`banner-${message.guild.id}`))
            message.channel.send({embeds : [embed]})

        });
    }
}