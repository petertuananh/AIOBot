const { Player } = require("discord-player");
const { voice } = require("../../AIOBot.js");
const client = require('../../AIOBot.js');
const config = require('../../JSON/config.json');
const player = new Player(client, {
    ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25,
    },
});
client.on("voiceStateUpdate", async (oldState, newState) => {
    if(newState.channelId && newState.channel.type === "GUILD_STAGE_VOICE" && newState.guild.me.voice.suppress) {
        try{
            return newState.guild.me.voice.setSuppressed(false)
        }catch (e) {
            return;
        }
    }
})
module.exports = player