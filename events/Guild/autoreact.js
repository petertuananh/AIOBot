// const client = require(`../../AIOBot`)
// const config = require(`../../JSON/config.json`);
// const { MessageEmbed } = require(`discord.js`);
// const db = require(`quick.db`)

// client.on('messageCreate', react => {
//     const reactChannel = db.get(`reactchannel-${react.channel.id}-${react.guild.id}`)
//     if (react.channel.id === reactChannel){
//         const emo = db.get(`reactemoji-${react.channel.id}-${react.guild.id}`)
//         react.channel.react(emo);
//     }
// })