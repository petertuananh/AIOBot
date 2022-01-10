const client = require('../../AIOBot.js');
const config = require('../../JSON/config.json');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { mem } = require("node-os-utils");
const { on } = require("events");
client.on('messageCreate', async message => {
    if(!message.guild) return;
    // db.delete(`pingeveryone_${message.guild.id}_${message.author.id}`)
    let pingeveryone = db.get(`pingeveryone_${message.guild.id}_${message.author.id}`)
    // if(message.mentions.everyone){
    //     db.delete(`pingeveryone_${message.guild.id}_${message.author.id}`)
    // }
    if (message.guild.id == pingeveryone)
        console.log(`ok`)
    if(message.mentions.everyone){
        if(pingeveryone === null) {
            db.set(`pingeveryone_${message.guild.id}_${message.author.id}`, 1)
        }else{
            db.add(`pingeveryone_${message.guild.id}_${message.author.id}`, 1)
        }
        // console.log(`Ok`)
    }
    let ping = db.get(`pingeveryone_${message.guild.id}_${message.author.id}`)
    if(ping === 3) {
        let role = message.guild.roles.cache.find(x => x.name === "Muted")
        const author = message.author
        if(!role) {
            const muterole = await message.guild.roles.create({
                name : "Muted",
                permissions: []
            })
            message.guild.channels.cache.forEach(async (channel, id) => {
              await channel.permissionOverwrites.edit(muterole, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS : false
              })
          })
        }
        message.member.roles.add(role)
        if(message.author.bot){
            message.member.ban()
        }
    }
    if(ping === 1) {
        
        // db.delete(`pingeveryone_${message.guild.id}_${message.author.id}`)
        setTimeout(function () {
            db.delete(`pingeveryone_${message.guild.id}_${message.author.id}`)
        }, 20000);
    }
    
})