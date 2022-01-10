/*jshint esversion: 6 */

// const commando = require('discord.js-commando');
const app = require('../../AIOBot.js');
const config = require('../../JSON/config.json');
const Discord = require('discord.js');

module.exports = {
    // name: "dmonline",
    aliases: ['inv'],
    category: 'Bot',
    description: "Invite me to your server",
    cooldown: "5",
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, prefix) => {
        let dmGuild = message.guild;
        let role = message.mentions.roles.first();
        let msg = "";
        let OnlineMembers = [];
        let interest;
        // let memberarray = dmGuild.members.array();
        // let membercount = memberarray.length;
        // let botcount = 0;
        // for (var i = 0; i < membercount; i++) {
        //     let member = memberarray[i];
        //     if (member.user.bot) {
        //         botcount++;
        //         continue
        //     }
        //     if (member.presence.status == 'online') {
        //         OnlineMembers.push(member);
        //     }
        // }

        message.reply('you now have *ten minutes* to send the message that you would like to massDM here.')
        // Await !vote messages
        const filter = m =>  message.author.id === m.author.id;
        // Errors: ['time'] treats ending because of the time limit as an error
        message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => msg = collected.content)
            .catch(message.reply('you did not enter any input!'));
        
        
        message.reply('you now have *ten minutes* to send the message that you would like to massDM here.').then(() => {
            const filter = m => message.author.id === m.author.id;
        
            message.channel.awaitMessages(filter, { time: 600000, max: 1, errors: ['time'] })
                .then(messages => {
                    msg = messages.content;
                })
                .catch(() => {
                    message.reply('you did not enter any input!');
                });
        });
        message.author.send(`You are selecting *${OnlineMembers.length}* members`);
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 60000, max: 1, maxMatches: 1 });
        collector.on('collect', message2 => {
            msg = message2.content;
        })
        let wait = 0
        while (msg = "") {
            wait++;
            setTimeout(function(){
                return
            }, 2000);
        }
        

        message.reply(`type *"Y"* to begin sending the following message to **${OnlineMembers.length} members**, and *"N"* to forget it.\n\n${msg} \n #random`).then(() => {
            const filter = m => message.author.id === m.author.id;
        
            message.channel.awaitMessages(filter, { time: 600000, maxMatches: 1, errors: ['time'] })
                .then(messages => {
                    interest = messages.first().content;
                })
                .catch(() => {
                    message.reply('you did not enter any input!');
                });
        });
        if (messages.first().content != "N") {
            if(!msg || msg.length <= 1) {
                const embed = new Discord.RichEmbed()
                    .addField(":x: Failed to send", "Message not specified")
                    .addField(":eyes: Listen up!", "Uh Oh!");
                message.channel.send({ embed: embed });
                return;
            }
    
            let memberarray = OnlineMembers;
            let membercount = memberarray.length;
            let botcount = 0;
            let successcount = 0;
            console.log(`Responding to ${message.author.username} :  Sending message to all ${membercount} members of .`)
            for (var i = 0; i < membercount; i++) {
                let member = memberarray[i];
                if (member.user.bot) {
                    console.log(`Skipping bot with name ${member.user.username}`)
                    botcount++;
                    continue
                }
                let timeout = Math.floor((Math.random() * (config.wait - 0.01)) * 1000) + 10;
                await sleep(timeout);
                if(i == (membercount-1)) {
                    console.log(`Waited ${timeout}ms.\t\\/\tDMing ${member.user.username}`);
                } else {
                    console.log(`Waited ${timeout}ms.\t|${i + 1}|\tDMing ${member.user.username}`);
                }
                try {
                    member.send(`${msg} \n #${timeout}`);
                    successcount++;
                } catch (error) {
                    console.log(`Failed to send DM! ` + error)
                }
            }
            console.log(`Sent ${successcount} ${(successcount != 1 ? `messages` : `message`)} successfully, ` +
                `${botcount} ${(botcount != 1 ? `bots were` : `bot was`)} skipped.`);
        }
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
