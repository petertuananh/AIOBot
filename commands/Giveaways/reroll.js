const ms = require('ms');
module.exports = {
    name: "giveaway-reroll",
    description: "Reroll the giveaway",
    aliases: [`ga-reroll`, `reroll-ga`],
    category: 'Bot',
    cooldown: 5,
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["MANAGE_CHANNELS"],
run: async (client, message, args) => {
    if(!args[0]){
        return message.reply(':x: You have to specify a valid message ID!');
    }

    client.giveawaysManager.reroll(args[0])

}
}