const client = require('../../AIOBot.js');
const config = require('../../JSON/config.json');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const db = require('quick.db');
const {
    createCanvas,
    loadImage,
    registerFont
} = require('canvas');
const { channels } = require('../../AIOBot.js');
client.on('voiceStateUpdate', async (oldState, newState) => {
    // chan.setParent("427382662240534535")
    // db.get(`voicehub.${oldState.guild.id}`)
    // if (newState.id == oldState.guild.id){
    if (newState.channelId == "929667568166391858"){
    const ch = await oldState.guild.channels.create(oldState.member.displayName, {
        type: 'GUILD_VOICE',
        permissionOverwrites: [
        {
            id: oldState.id,
            deny: ['VIEW_CHANNEL'],
        },
        ],
    })
    // ch.id
    // let channel = oldState.guild.channels.cache.find(x => x.name === oldState.member.displayName)
    // if (channel){
        oldState.setChannel(ch.id)
    // }
    // if (newState == null){
        // if (oldState.member.displayName == channel){
            // oldState.channel.delete()
        // }
    // }
    }
});