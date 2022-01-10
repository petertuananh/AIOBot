const Discord = require('discord.js');
const db = require("quick.db");
const api = require('covid19-vn');
const {laysodep} = require('../../functions/laysodep');
// const axios = require('axios')
const config = require('../../JSON/config.json');
module.exports = {
    name: "covid",
    aliases: ['corona', 'covid-19'],
    category: 'Information',
    description: "Information about the Covid-19 epidemic in the world and Vietnam",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {

            // const res = await axios.get('https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=1&fullData=false')
            // const res2 = await axios.get('https://disease.sh/v3/covid-19/vaccine/coverage/countries/vietnam?lastdays=1&fullData=true')
            let data = await api.all();
            let data2 = await api.countries({ country: 'vietnam'});
            // let data3 = await api.vaccine().timeline();
            // let data4 = await api.coverage({ country: 'vietnam'});
            let d = new Date(data.updated);
            let fulldate = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
            const embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(`Covid-19 status 🌎`, client.user.displayAvatarURL())
                .setThumbnail(db.get(`thumb-${message.guild.id}`))
                // .setDescription(`Số ca nhiễm COVID-19`)
                // .addField('Số ca đã tiêm vacxin', `**Tổng** | ${laysodep(data3.date)} đã tiêm`,true)
                .addField('Number of cases tested', `**total** | \`${laysodep(data.tests)} shift\`\n**Vietnam** | \`${laysodep(data2.tests)}\``,true) 
                .addField('number of infections',`**total** | \`${laysodep(data.cases)} shift\`\n**Vietnam** | \`${laysodep(data2.cases)}\``,true) // \nTăng | ${laysodep(data.todayCases)} ca
                .addField('number of deaths', `**total** | \`${laysodep(data.deaths)} shift\`\n**Vietnam** | \`${laysodep(data2.deaths)}\``, true) // \nTăng | ${laysodep(data.todayDeaths)} ca
                .addField('number of severe cases ', `**total** | \`${laysodep(data.critical)} shift\`\n**Vietnam** | \`${laysodep(data2.critical)}\``, true)
                .addField('number of recoveries', `**total** | \`${laysodep(data.recovered)} shift\`\n**Vietnam** | \`${laysodep(data2.recovered)}\``, true)
                .addField('Number of countries infected', `**total** | \`${laysodep(data.affectedCountries)} nation\``, true)
                .addField('Update', `\`${fulldate}\``, true)
                // .setFooter('Nguồn: worldometers.info')
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setImage(db.get(`banner-${message.guild.id}`))
            message.channel.send({
                embeds: [embed]
            })
    }
}