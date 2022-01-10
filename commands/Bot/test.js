// const {MessageEmbed} = require("discord.js")
// const db = require("quick.db");
// const config = require('../../JSON/config.json');
// const { con } = require('../../Utils/mysql')
// module.exports = {
//     name: "test1",
//     aliases: ['inv'],
//     category: 'Bot',
//     description: "Invite me to your server",
//     cooldown: "5",
//     // UserPerms: ["SEND_MESSAGE"],
//     // BotPerms: ["SEND_MESSAGE"],
//     run: async (client, message, prefix) => {
//         con.query(`SELECT * FROM admin_user WHERE id`, async function (err, data) {
//             console.log(data)
//         })

//     }
// }