    const {
        MessageEmbed
    } = require('discord.js')
    const db = require('quick.db') // npm i quick.db
    const ms = require('parse-ms') // npm i parse-ms
    const config = require('../../JSON/config.json');
    module.exports = {
        name: "coinflip",
        aliases: [`cf`],
        category: 'Economy',
        description: "Coin Flip",
        cooldown: 5,
        // UserPerms: ["ADMINISTRATOR"],
        // BotPerms: ["ADMINISTRATOR"],
        // premiumOnly: true,
        // ownerOnly: true,
        run: async (client, message, args, prefix) => {
            if (!args[0]){
                return message.channel.send(`:x: Pls type the money`)
            }
            


            function doRandHT() {
                var rand = [`HEADS`,`TAILS`];
                return rand[Math.floor(Math.random()*rand.length)]; 
            }
            const re = doRandHT()
            if (re === 'HEADS'){
                // console.log(`+`)
                db.add(`money-$message.author.id}`, args[0])
            }else if (re === 'TAILS'){
                // console.log(`-`)
                db.subtract(`money-${message.author.id}`, args[0])
            }
                const embed = new MessageEmbed()
                .setTitle(`Coin Flip`)
                .setDescription(doRandHT())
                .setColor("RANDOM")
                message.channel.send({embeds: [embed]})
        }
    }








    // function heads() {
    //     console.log(`+`)
    //     db.add(`money-$message.author.id}`, args[0])
    //     const embed = new MessageEmbed()
    //         .setTitle(`Coin Flip`)
    //         .setDescription(`You won ${args[0]} money!`)
    //         .setColor("RANDOM")
    //     message.channel.send({embeds: [embed]})
    // }
    // function tails() {
    //     console.log(`-`)
    //     db.subtract(`money-${message.author.id}`, args[0])
    //     const Embed = new MessageEmbed()
    //         .setTitle(`Coin Flip`)
    //         .setDescription(`You lost ${args[0]} money!`)
    //         .setColor("RANDOM")
    //     message.channel.send({embeds: [Embed]})
    // }