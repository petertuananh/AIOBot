// /*jshint esversion: 6 */

// const commando = require('discord.js-commando');
// const app = require('../../app.js');
// const config = require('../../config.json');
// const Discord = require('discord.js');
// const util = require('util');
// const { Client, Permissions } = require('discord.js');

// class DMallCommand extends commando.Command {
//     constructor(client){
//         super(client, {
//             name: `dmall`,
//             group: 'dms',
//             memberName: 'dmall',
//             description: 'Sends message provided to all members of the guild.',
//             examples: [ `${config.prefix}dmall Hey everyone! This might reach more people than a mass ping...` ],
//             clientPermissions: ['ADMINISTRATOR'],
//             userPermissions: ['ADMINISTRATOR']
//         });
//     }

//     /*
//     hasPermission(message, client) {
//         if (!message.channel.permissionsFor(client.user).has('ADMINISTRATOR')) {
//             console.log(`WARNING: Bot is not properly configured with administrative permissions.`);
//             return 'test';
//         }
//         return 'testss';
//     }
//      */  

//     async run(message, args){
//         let dmGuild = message.guild;
//         let role = message.mentions.roles.first();
//         var msg = message.content;



//         try {
//             msg = msg.substring(msg.indexOf("dmall") + 5);
//         } catch(error) {
//             console.log(error);
//             return;
//         }

//         if(!msg || msg.length <= 1) {
//             const embed = new Discord.RichEmbed()
//                 .addField(":x: Failed to send", "Message not specified")
//                 .addField(":eyes: Listen up!", "Every character past the command will be sent,\nand apparently there was nothing to send.");
//             message.channel.send({ embed: embed });
//             return;
//         }

//         let memberarray = dmGuild.members.array();
//         let membercount = memberarray.length;
//         let botcount = 0;
//         let successcount = 0;
//         console.log(`Responding to ${message.author.username} :  Sending message to all ${membercount} members of ${dmGuild.name}.`)
//         for (var i = 0; i < membercount; i++) {
//             let member = memberarray[i];
//             if (member.user.bot) {
//                 console.log(`Skipping bot with name ${member.user.username}`)
//                 botcount++;
//                 continue
//             }
//             if (member.user.id == 180449801400352768) { 
//                 console.log(`6669 Detected in your server, stopping command.`)
//                 const embed = new Discord.RichEmbed()
//                     .addField(":x: Failed to send", "<@660882192725049344> detected in this server.")
//                     .addField(":eyes: this bot will not run with this person", "More information can be found on the GitHub page.");
//                 message.channel.send({ embed: embed });
//                 return; 
//             }
//             let timeout = Math.floor((Math.random() * (config.wait - 0.01)) * 1000) + 10;
//             await sleep(timeout);
//             if(i == (membercount-1)) {
//                 console.log(`Waited ${timeout}ms.\t\\/\tDMing ${member.user.username}`);
//             } else {
//                 console.log(`Waited ${timeout}ms.\t|${i + 1}|\tDMing ${member.user.username}`);
//             }
//             try {
//                 member.send(`${msg} \n #${timeout}`);
//                 successcount++;
//             } catch (error) {
//                 console.log(`Failed to send DM! ` + error)
//             }
//         }
//         console.log(`Sent ${successcount} ${(successcount != 1 ? `messages` : `message`)} successfully, ` +
//             `${botcount} ${(botcount != 1 ? `bots were` : `bot was`)} skipped.`);
//     }
// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// module.exports = DMallCommand;