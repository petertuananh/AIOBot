// console.clear();
require('events').defaultMaxListeners = 15;
const Discord = require('discord.js');
const { createConnection } = require('mysql');
const http = require('http');
const express = require("express");
const config = require('./JSON/config.json')
const app = express();
const server = http.createServer(app);
const { GiveawaysManager } = require("discord-giveaways");
// const { con } = require('./mysql.js')
const client = new Discord.Client({
  restTimeOffset: 0,
  allowedMentions: {
    parse: ["roles", "users", /*"everyone"*/ ],
    repliedUser: false,
  },
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_BANS,
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    Discord.Intents.FLAGS.GUILD_WEBHOOKS,
    Discord.Intents.FLAGS.GUILD_INVITES,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    Discord.Intents.FLAGS.GUILD_PRESENCES,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
  disableEveryone: true,
  partials: ["USER", "CHANNEL", "MESSAGE", "GUILD_MEMBERS", "REACTION"]
});

module.exports = client;

// import

const fs = require('fs');

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
client.cooldowns = new Discord.Collection();
client.logger = require('./Utils/Logger');
client.slashCommands = new Discord.Collection();
client.delay = ms => new Promise(res => setTimeout(res, ms));
client.embedCollection = new Discord.Collection();
client.interactions = new Discord.Collection();
client.snipes = new Discord.Collection();

["command", "event"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
let con = createConnection(config.mysql);

con.connect(err => {
  if (err) return console.log(err);
  console.log(`MySQL has been connected as ${config.mysql.user}!`);
});

console.log(`Command count ${client.commands.size}`)



client.giveawaysManager = new GiveawaysManager(client, {
  storage: ".file database",
  updateCountdownEvery: 3000,
  default: {
      botsCanWin: false,
      embedColor: "#FF0000",
      reaction: "<a:congratulation:918701219789307915>"
  }
});
process.on('unhandledRejection', err => {
  client.logger.error(`Have an error: ${err.message}.`);
  console.log(err);
});



// app.set('dashboard', __dirname + '/dashboard')
// app.set('view engine', 'pug');

// app.get("/", (req, res) => {
//     res.render('index')
// });
// app.get("/docs", (req, res) => {
//     res.render('docs')
// });

// app.get("/status", (req, res) => {
//   res.render('docs')
// });

// app.get("/src-code", (req, res) => {
//   res.render('src-code')
// });
// const listener = server.listen(config.port, function () {
//     console.log(`Stating AIO Bot website......`)
//     console.log(`IP: ${config.domain} Port: ${config.port}`)
// })

process.on('warning', (warning) => {
  console.log(warning.stack);
});
client.login(config.token).catch(e => client.logger.error(e.message));