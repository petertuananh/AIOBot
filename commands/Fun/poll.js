const Discord  = require('discord.js');


const agree    = "✅";
const disagree = "❎";


module.exports = {
    name: "poll",
    usage: "poll",
    category: "fun",
    description: "Start a poll",
    run: async (client, message, args) => {
        if(!args[0]) return message.reply("Usage: vote <question>")
        // Number.isInteger(itime)
        //  if (e) return message.reply('please supply a valid time number in seconds')

        let msg = await message.channel.send(`Question: ${message.content.split(" ").splice(1).join(" ")} \nVote now! (Vote time: 3min)`);
        await msg.react(agree);
        await msg.react(disagree);
      
        const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 120000});
        msg.delete();
      
        var NO_Count = reactions.get(disagree).count;
        var YES_Count = reactions.get(agree);
      
        if(YES_Count == undefined){
          var YES_Count = 1;
        }else{
          var YES_Count = reactions.get(agree).count;
        }
      
        var nightcoreat = new Discord.MessageEmbed()
        
                  .addField("Voting Finished:", "----------------------------------------\n" +
                                                "Question: " + message.content.split(" ").splice(1).join(" ") + "\n" +
                                                "Total votes (Yes): " + `${YES_Count-1}\n` +
                                                "Total votes (NO): " + `${NO_Count-1}\n` +
                                                "----------------------------------------", true)
      
                  .setColor("0x#FF0000")
        await message.channel.send({embeds: [nightcoreat]});
    }

}