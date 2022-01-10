const { MessageEmbed, Discord } = require('discord.js')
const db = require('quick.db')
const config = require('../../JSON/config.json');
module.exports = {
  name : "banner",
  aliases: ['sav', 'av', 'pfp'],
  category: 'Utility',
  cooldown: 5,
  description: "Show user avatar",
//   UserPerms: ["SEND_MESSAGES"],
//   BotPerms: ["SEND_MESSAGES"],
  // premiumOnly: true,
  run : async(client, message, args, prefix) => {

                const bannerUrl = await getUserBannerUrl(message.author.id, { size: 4096 });
                if (bannerUrl) {
                    const embed = new Discord.MessageEmbed()
                        .setTitle(`${message.author.username}'s banner`)
                        .setDescription("Look at my banner, how cool is that?")
                        .setImage(bannerUrl);
                    message.channel.send(embed);
                } else {
                    message.channel.send("You don't have money to buy Discord Nitro... How sad...");
                }
            }
    
}