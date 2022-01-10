const ms = require('ms');
module.exports = {
    name: "giveaway-end",
    description: "End the giveaway",
    aliases: [`ga-end`, `end-ga`],
    category: 'Bot',
    cooldown: 5,
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["MANAGE_CHANNELS"],
run: async (client, message, args) => {
    if(!args[0]){
        return message.reply(':x: You have to specify a valid message ID!');
    }
    client.giveawaysManager.end(args[0], false)

}
}