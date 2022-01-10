const client = require('../../AIOBot.js');
const config = require('../../JSON/config.json');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { mem } = require("node-os-utils");
const { on } = require("events");
const { Message } = require('discord.js');





client.on('channelCreate', async (channel, user) => {
    // console.log(`Ok0`)
    // db.delete(`masschtime`)
    // const guildid = db.get(`massch.${channel.guild.id}`)
    const masschcount = db.get(`masstime.${channel.guild.id}`)
    // if (channel.guild.id == guildid){
        if (masschcount == "null"){
            db.set(`masstime.${channel.guild.id}`, 1)
            // console.log(`Ok1`)
        }else{
            db.add(`masstime.${channel.guild.id}`, 1)
            // console.log(`Ok2`)
        }
    // }
    if (masschcount == 3){
        setTimeout(function () {
            db.delete(`masstime.${channel.guild.id}`)
            // console.log(`Ok3`)
        }, 30000);
    }
    if (masschcount == 5){
        // console.log(`Ok4`)
        db.delete(`masstime.${channel.guild.id}`)
        // console.log(channel.)
    }
})
