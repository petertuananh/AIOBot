const client = require('../../AIOBot.js');
const config = require('../../JSON/config.json');
const { MessageEmbed, Message } = require('discord.js');
const db = require('quick.db');
const { mem } = require("node-os-utils");
const { on } = require("events");
    client.on('guildMemberAdd', (member) => updateMembers(member.guild))

        const updateMembers = (guild) => {
            const guildID = db.get(`membercountguild-${guild.id}`)
            const membercountchannel = db.get(`membercountchannel-${guild.id}`);
            if (guild.id == guildID){
                
            const channel = guild.channels.cache.get(membercountchannel)
            try{
            channel.setName(`〔🌏〕Total : ${guild.memberCount.toLocaleString()}`) // Set Channel Name
            }catch{
                return;
            }
        }
    }
