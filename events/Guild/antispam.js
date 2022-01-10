const usersMap = new Map();
const LIMIT = 5;
const TIME = 7000;
const DIFF = 3000;
const client = require('../../AIOBot.js');
const { MessageEmbed } = require('discord.js');
const config = require('../../JSON/config.json');
const db = require('quick.db');
const { mem } = require("node-os-utils");
const { on } = require("events");
client.on('messageCreate', async(message) => {
    if (!message.member.permissions.has('ADMINISTRATOR')){
    if(!message.guild) return;
    const antispam = db.get(`antispam-${message.guild.id}`);
    if (message.guild.id === antispam) {
    if(message.author.bot) return;
    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        if(difference > DIFF) {
            clearTimeout(timer);
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() => {
                usersMap.delete(message.author.id);
                // console.log('Removed from map.')
            }, TIME);
            usersMap.set(message.author.id, userData)
        }
        else {
            ++msgCount;
            if(parseInt(msgCount) === LIMIT) {
                let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');
                if(!muterole) {
                    const muterole = await message.guild.roles.create({
                        name : "Muted",
                        // permissions: []
                    })
                    message.guild.channels.cache.forEach(async (channel, id) => {
                      await channel.permissionOverwrites.edit(muterole, {
                          SEND_MESSAGES: false,
                          ADD_REACTIONS : false
                      })
                  })
                }
                message.member.roles.add(muterole);
                message.channel.send('You have been muted!');
                // setTimeout(() => {
                //     message.member.roles.remove(muterole);
                //     message.channel.send('You have been unmuted!')
                // }, TIME);
            } else {
                userData.msgCount = msgCount;
                usersMap.set(message.author.id, userData);
            }
        }
    }
    else {
        let fn = setTimeout(() => {
            usersMap.delete(message.author.id);
        }, TIME);
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage : message,
            timer : fn
        });
    }
}
}
})