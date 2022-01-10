const Discord = require('discord.js');
const db = require("quick.db");
const api = require('covid19-vn');
const {laysodep} = require('../../functions/laysodep');
// const axios = require('axios')
const config = require('../../JSON/config.json');
module.exports = {
    name: "invitetracker",
    // aliases: ['corona', 'covid-19'],
    category: 'Information',
    // description: "Information about the Covid-19 epidemic in the world and Vietnam",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {

        const { guild } = message
  
        guild.fetchInvites().then((invites) => {
          const inviteCounter = {
            bob: 19,
            joe: 30,
          }
    
          invites.forEach((invite) => {
            const { uses, inviter } = invite
            const { username, discriminator } = inviter
    
            const name = `${username}#${discriminator}`
    
            inviteCounter[name] = (inviteCounter[name] || 0) + uses
          })
    
          let replyText = 'Invites:'
    
          const sortedInvites = Object.keys(inviteCounter).sort(
            (a, b) => inviteCounter[b] - inviteCounter[a]
          )
    
          console.log(sortedInvites)
    
          sortedInvites.length = 3
    
          for (const invite of sortedInvites) {
            const count = inviteCounter[invite]
            replyText += `\n${invite} has invited ${count} member(s)!`
          }
    
          message.reply(replyText)
        })
    }
}


// module.exports = {
//     commands: 'invites',
//     callback: (message) => {
        
//       },
//   }