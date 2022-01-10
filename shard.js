// const { ShardingManager } = require('discord.js');
// const config = require('./JSON/config.json')

// let manager = new ShardingManager('./AIOBot.js', {
//     token: config.token,
//     totalShards: 02,
// });

// manager.on('shardCreate', shard => {
//     console.log(`[Shards]: Lauched shard ${shard.id}`)
// })

// manager.spawn();




// const { ShardingManager } = require("discord.js")
// const config = require('./JSON/config.json')

// let manager = new ShardingManager('./AIOBot.js', {
//     // token: config.token,
//     // totalShards: 4,

//     autoSpawn: config.sharding.autoSpawn,
//     respawn: config.sharding.respawn,
//     totalShards: config.sharding.shardsNumber,
//     token: login.discord.token
// })

// manager.on('shardCreate', shard => {
//     console.log(`[SHARDS]: Launched shard ${shard.id}`)
// })

// manager.spawn();




// console.clear()
const config = require('./JSON/config.json')
const { ShardingManager } = require('discord.js');
const ascii = require('ascii-table');

let table = new ascii("Shard status");
table.setHeading("Id", "Status");

const manager = new ShardingManager('./AIOBot.js', {
    token: config.token,
    totalShards: 4,
    mode: "process"
});

manager.spawn(manager.totalShards, 10000);

manager.on('shardCreate', async (shard) => {
    table.addRow(shard.id, `Launched shard #${shard.id}`)
    console.log(table.toString());
});