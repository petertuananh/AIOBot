const Discord = require('discord.js');
const api = require('covid19-vn');
const db = require("quick.db");
const {laysodep} = require('../../functions/laysodep');
const axios = require('axios')
const config = require('../../JSON/config.json');
module.exports = {
    name: "covid2",
    aliases: ['corona', 'covid-19'],
    category: 'Information',
    description: "Information about the Covid-19 epidemic in the world and Vietnam",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {

        const baseUrl = 'https://corona.lmao.ninja/v2';

        let url; let response; let
            corona;

        try {
            url = args[0] ? `${baseUrl}/countries/${args[0]}` : `${baseUrl}/all`;
            response = await axios.get(url);
            corona = response.data;
        } catch (error) {
            return message.channel.send(`<a:no:865963806483808256> ***${args[0]}*** doesn't exist, or data isn't being collected`);
        }

        const helpEmbed = new MessageEmbed()
            .setTitle(args[0] ? `${args[0].toUpperCase()} Stats` : 'Total Corona Cases World Wide')
            .setColor("RANDOM")
            .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
            .setImage(db.get(`banner-${message.guild.id}`))
            .addFields(
                {
                    name: 'Total Cases:',
                    value: corona.cases.toLocaleString(),
                    inline: true,
                },
                {
                    name: 'Total Deaths:',
                    value: corona.deaths.toLocaleString(),
                    inline: true,
                },
                {
                    name: 'Total Recovered:',
                    value: corona.recovered.toLocaleString(),
                    inline: true,
                },
                {
                    name: 'Active Cases:',
                    value: corona.active.toLocaleString(),
                    inline: true,
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true,
                },
                {
                    name: 'Critical Cases:',
                    value: corona.critical.toLocaleString(),
                    inline: true,
                },
                {
                    name: 'Today Recoveries:',
                    value: corona.todayRecovered.toLocaleString().replace('-', ''),
                    inline: true,
                },
                {
                    name: 'Todays Deaths:',
                    value: corona.todayDeaths.toLocaleString(),
                    inline: true,
                },
            );

        return message.channel.send({ embeds: [helpEmbed] })
    }
}