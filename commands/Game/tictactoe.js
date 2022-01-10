const { MessageEmbed } = require('discord.js')

// const { MessageButton, MessageActionRow } = require('discord-buttons')
const config = require('../../JSON/config.json');
module.exports = {
    name: "ttt",
    category: "Game",
    aliases: ['tictactoe'],
    description: "Caro game",
    cooldown: "5",
    cooldown: 5,
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setAuthor(`Update Soon ❌`, client.user.displayAvatarURL())
        .setThumbnail(db.get(`thumb-${message.guild.id}`))
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        .setDescription(`Updating!`)
        message.channel.send({embeds : [embed]})
        // const opponent = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        // if (!opponent) return message.channel.send("Vui lòng chỉ định một người để chơi!")

        // const fighters = [message.member.id, opponent.id].sort(() => (Math.random() > .5) ? 1 : -1)
        // const Args = {
        //     user: 0,
        //     a1: {
        //         style: "gray",
        //         label: "➖",
        //         disabled: false
        //     },
        //     a2: {
        //         style: "gray",
        //         label: "➖",
        //         disabled: false
        //     },
        //     a3: {
        //         style: "gray",
        //         label: "➖",
        //         disabled: false
        //     },
        //     b1: {
        //         style: "gray",
        //         label: "➖",
        //         disabled: false
        //     },
        //     b2: {
        //         style: "gray",
        //         label: "➖",
        //         disabled: false
        //     },
        //     b3: {
        //         style: "gray",
        //         label: "➖",
        //         disabled: false
        //     },
        //     c1: {
        //         style: "gray",
        //         label: "➖",
        //         disabled: false
        //     },
        //     c2: {
        //         style: "gray",
        //         label: "➖",
        //         disabled: false
        //     },
        //     c3: {
        //         style: "gray",
        //         label: "➖",
        //         disabled: false
        //     }
        // }

        // const { MessageButton, MessageActionRow } = require('discord-buttons')

        // const owin = new MessageButton()
        //     .setLabel('⭕ won')
        //     .setStyle('green')
        //     .setID("owin")
        //     .setDisabled()

        // const xwin = new MessageButton()
        //     .setLabel('❌ won')
        //     .setStyle('red')
        //     .setID("xwin")
        //     .setDisabled()

        // const tie = new MessageButton()
        //     .setLabel('⭕ Tie ❌')
        //     .setStyle('blurple')
        //     .setID("tie")
        //     .setDisabled()

        // const fail = new MessageButton()
        //     .setLabel('➖')
        //     .setStyle('grey')
        //     .setID("fail")
        //     .setDisabled()

        // const msg = await message.channel.send(`**TicTacToe** | <@!${Args.userid}>'s turn (⭕)`)
        // tictactoe(msg)
        // async function tictactoe(m) {
        //     Args.userid = fighters[Args.user]
        //     const won = {
        //         "⭕": false,
        //         "❌": false
        //     }
        //     if (Args.a1.label == "⭕" && Args.b1.label == "⭕" && Args.c1.label == "⭕") won["⭕"] = true
        //     if (Args.a2.label == "⭕" && Args.b2.label == "⭕" && Args.c2.label == "⭕") won["⭕"] = true
        //     if (Args.a3.label == "⭕" && Args.b3.label == "⭕" && Args.c3.label == "⭕") won["⭕"] = true
        //     if (Args.a1.label == "⭕" && Args.b2.label == "⭕" && Args.c3.label == "⭕") won["⭕"] = true
        //     if (Args.a3.label == "⭕" && Args.b2.label == "⭕" && Args.c1.label == "⭕") won["⭕"] = true
        //     if (Args.a1.label == "⭕" && Args.a2.label == "⭕" && Args.a3.label == "⭕") won["⭕"] = true
        //     if (Args.b1.label == "⭕" && Args.b2.label == "⭕" && Args.b3.label == "⭕") won["⭕"] = true
        //     if (Args.c1.label == "⭕" && Args.c2.label == "⭕" && Args.c3.label == "⭕") won["⭕"] = true
        //     if (won["⭕"] != false) return m.edit(`<@!${Args.userid}>'s ⭕ won!`, owin)
        //     if (Args.a1.label == "❌" && Args.b1.label == "❌" && Args.c1.label == "❌") won["❌"] = true
        //     if (Args.a2.label == "❌" && Args.b2.label == "❌" && Args.c2.label == "❌") won["❌"] = true
        //     if (Args.a3.label == "❌" && Args.b3.label == "❌" && Args.c3.label == "❌") won["❌"] = true
        //     if (Args.a1.label == "❌" && Args.b2.label == "❌" && Args.c3.label == "❌") won["❌"] = true
        //     if (Args.a3.label == "❌" && Args.b2.label == "❌" && Args.c1.label == "❌") won["❌"] = true
        //     if (Args.a1.label == "❌" && Args.a2.label == "❌" && Args.a3.label == "❌") won["❌"] = true
        //     if (Args.b1.label == "❌" && Args.b2.label == "❌" && Args.b3.label == "❌") won["❌"] = true
        //     if (Args.c1.label == "❌" && Args.c2.label == "❌" && Args.c3.label == "❌") won["❌"] = true
        //     if (won["❌"] != false) return m.edit(`${opponent}'s ❌ won!`, xwin)
        //     const a1 = new MessageButton()
        //         .setStyle(Args.a1.style)
        //         .setLabel(Args.a1.label)
        //         .setID('a1')
        //         .setDisabled(Args.a1.disabled);
        //     const a2 = new MessageButton()
        //         .setStyle(Args.a2.style)
        //         .setLabel(Args.a2.label)
        //         .setID('a2')
        //         .setDisabled(Args.a2.disabled);
        //     const a3 = new MessageButton()
        //         .setStyle(Args.a3.style)
        //         .setLabel(Args.a3.label)
        //         .setID('a3')
        //         .setDisabled(Args.a3.disabled);
        //     const b1 = new MessageButton()
        //         .setStyle(Args.b1.style)
        //         .setLabel(Args.b1.label)
        //         .setID('b1')
        //         .setDisabled(Args.b1.disabled);
        //     const b2 = new MessageButton()
        //         .setStyle(Args.b2.style)
        //         .setLabel(Args.b2.label)
        //         .setID('b2')
        //         .setDisabled(Args.b2.disabled);
        //     const b3 = new MessageButton()
        //         .setStyle(Args.b3.style)
        //         .setLabel(Args.b3.label)
        //         .setID('b3')
        //         .setDisabled(Args.b3.disabled);
        //     const c1 = new MessageButton()
        //         .setStyle(Args.c1.style)
        //         .setLabel(Args.c1.label)
        //         .setID('c1')
        //         .setDisabled(Args.c1.disabled);
        //     const c2 = new MessageButton()
        //         .setStyle(Args.c2.style)
        //         .setLabel(Args.c2.label)
        //         .setID('c2')
        //         .setDisabled(Args.c2.disabled);
        //     const c3 = new MessageButton()
        //         .setStyle(Args.c3.style)
        //         .setLabel(Args.c3.label)
        //         .setID('c3')
        //         .setDisabled(Args.c3.disabled);
        //     const a = new MessageActionRow()
        //         .addComponents([a1, a2, a3])
        //     const b = new MessageActionRow()
        //         .addComponents([b1, b2, b3])
        //     const c = new MessageActionRow()
        //         .addComponents([c1, c2, c3])
        //     const buttons = {
        //         components: [a, b, c]
        //     }
        //     m.edit(`**TicTacToe** | <@!${Args.userid}>'s turn (${Args.user == 0 ? "⭕" : "❌"})`, buttons)
        //     const filter = (button) => button.clicker.user.id === Args.userid;
        //     const collector = m.createButtonCollector(filter, {
        //         max: 1,
        //         time: 30000
        //     });

        //     collector.on('collect', b => {
        //         if (Args.user == 0) {
        //             Args.user = 1
        //             Args[b.id] = {
        //                 style: "green",
        //                 label: "⭕",
        //                 disabled: true
        //             }
        //         } else {
        //             Args.user = 0
        //             Args[b.id] = {
        //                 style: "red",
        //                 label: "❌",
        //                 disabled: true
        //             }
        //         }
        //         b.defer
        //         const map = (obj, fun) =>
        //             Object.entries(obj).reduce(
        //                 (prev, [key, value]) => ({
        //                     ...prev,
        //                     [key]: fun(key, value)
        //                 }), {}
        //             );
        //         const objectFilter = (obj, predicate) =>
        //             Object.keys(obj)
        //             .filter(key => predicate(obj[key]))
        //             .reduce((res, key) => (res[key] = obj[key], res), {});
        //         const Brgs = objectFilter(map(Args, (_, fruit) => fruit.label == "➖"), num => num == true);
        //         if (Object.keys(Brgs).length == 0) return m.edit(`Hey <@!${Args.userid}>, ${opponent} It's a tie!`, tie)
        //         tictactoe(m)

        //     });
        //     collector.on('end', collected => {
        //         if (collected.size == 0) m.edit(`<@!${Args.userid}> didn\'t react in time! (30s)`, fail)
        //     });
        // }
    }
}