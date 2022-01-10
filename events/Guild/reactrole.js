const client = require('../../AIOBot.js');
const config = require('../../JSON/config.json');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { mem } = require("node-os-utils");
const { on } = require("events");

client.on('messageReactionAdd', async(reaction, user, message) => {
    const messageID = db.get(`messagereact`)
    const iconreact = db.get(`iconreact`)
    const reactrole = db.get(`reactrole`)
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === messageID){
        if(reaction.emoji.name === iconreact) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(reactrole)
            user.send(`You have new role!`)
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    const messageID = db.get(`messagereact`)
    const iconreact = db.get(`iconreact`)
    const reactrole = db.get(`reactrole`)
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === messageID){
        if(reaction.emoji.name === iconreact) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(reactrole)
            user.send(`One removed the role from you!`)
        }
    }
})