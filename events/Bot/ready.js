const client = require('../../AIOBot.js');
const config = require('../../JSON/config.json');
// const express = require('express');
// const server = express();
// const port = 3000 || 3001;

const activities = [
    {
        name: config.botWebsite,
        type: 'WATCHING'
    },
    // {
    //     name: '! Peter#0001',
    //     type: 'STREAMING'
    // },
    {
        name: `${config.nofi}`,
        type: 'WATCHING'
    }
];

client.on('ready', (message) => {
    console.log(`[SERVER INFO] ${client.user.username} ready !`);
    client.user.setPresence({
        status: 'dnd',
        activity: activities[0]
    });
    let activity = 1;
    setInterval(() => {
        activities[2] = {
            name: `${client.guilds.cache.size} server!`,
            type: 'WATCHING'
        };
        // activities[3] = {
        //     // name: `${client.users.cache.size} user!`,
        //     name: client.guilds.cache.map((guild) => guild.memberCount).reduce((p, c) => p + c)+" users",
        //     type: 'LISTENING'
        // };
        activities[4] = {
            // name: `${client.users.cache.size} user!`,
            name: `DM me to chatbot!`,
            type: 'PLAYING'
        };
        if (activity > 4) activity = 0;
        client.user.setActivity(activities[activity]);
        activity++;
    }, 2000);
    
    // server.get("/info", function(req, res) {
    //     res.status(200).send(clientDetails)
    // })

    // server.listen(port)
    // client.channels.cache.get(config.startlog).send(`<:online:918646699482820628> ${client.user.username} just started!`)

})


// client.on('ready', () => {
//     console.log(`[BOT INFO] Đăng nhập vào ${client.user.username} thành công !`)

//     setInterval(() => {
//         const statuses = [
//             `diozbot.gg | ${config.prefix}help`,
//             `${client.guilds.cache.size} servers | ${client.users.cache.size} members`,
//             `Have a nice day 😋❤️`,
//         ]

//         const status = statuses[Math.floor(Math.random() * statuses.length)]
//         client.user.setActivity(status, { type: "WATCHING"}) // Can Be WATCHING, STREAMING, LISTENING
//     }, 2000) // Second You Want to Change Status, This Cahnges Every 2 Seconds
//   });