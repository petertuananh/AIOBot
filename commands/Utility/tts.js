const { MessageEmbed } = require('discord.js');
const { on } = require('events');
const db = require('quick.db')
const config = require('../../JSON/config.json');
const axios = require("axios");
const { connect } = require('http2');
const { getAudioUrl } = require('google-tts-api')
module.exports = {
  name : "tts",
//   aliases : ['awc', 'setwelcome'],
  category: 'Utility',
  cooldown: 5,
  description: "Text to speech!",
//   UserPerms: ["ADMINISTRATOR"],
//   BotPerms: ["ADMINISTRATOR"],
//   premiumOnly: true,
  run : async(client, message, args, prefix) => {
    if (!args[0]) return;
    const string = args.join(' ');
    if (string.length > 200)
    return;

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
    return;
    const audioURL = await getAudioUrl(string, {
        lang: 'vi',
        slow: false,
        host: 'https://translate.google.com',
        timeout: 10000,
    });
    try {
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play(audioURL);
            dispatcher.on('finish', () => {
                voiceChannel.leave();
            })
        })
    } catch {
        message.channel.send(`Bot lỗi!`)
    }
  }
}