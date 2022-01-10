const client = require('../../AIOBot.js');

client.on('messageDelete',  (message) => {
    let snipes = client.snipes.get(message.channel.id);
    client.snipes.set(message.channel.id, snipes)
})