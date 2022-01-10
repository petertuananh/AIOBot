const {
    MessageEmbed
} = require("discord.js");
// const { promptMessage } = require("../../functions");
const config = require('../../JSON/config.json');
const chooseArr = ["🔨", "📰", "✂"];

module.exports = {
    name: "rps",
    category: "Game",
    aliases: ['rockpaperscissors'],
    description: "Hammer and sack game",
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
        //   try
        //   {     const embed = new MessageEmbed()
        //         .setColor("GREEN")
        //         .setAuthor(message.member.displayName, message.author.displayAvatarURL())
        //         .setFooter(message.guild.me.displayName, client.user.displayAvatarURL())
        //         .setDescription("**Play A Game of RPS Against The Bot!\nSelect Reactions To Play!**")
        //         .setTimestamp();

        //     const m = await message.channel.send({embeds: [embed]});
        //     const reacted = await promptMessage(m, message.author, 30, chooseArr);

        //     const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        //     const result = await getResult(reacted, botChoice);
        //     await m.reactions.removeAll();

        //     embed
        //         .setDescription("")
        //         .addField(`**${result}**`, `${reacted} vs ${botChoice}`);

        //     m.edit({embeds : [embed]});

        //   } catch {
        //       return message.channel.send('**Missing Permissions - [MANAGE_MESSAGES]!**')
        //   }
        //     function getResult(me, botChosen) {
        //         if ((me === "🔨" && botChosen === "✂") ||
        //             (me === "📰" && botChosen === "🔨") ||
        //             (me === "✂" && botChosen === "📰")) {
        //             return "You won!";
        //         } else if (me === botChosen) {
        //             return "Its a tie!";
        //         } else {
        //             return "You lost!";
        //         }

        //     }

    }
}