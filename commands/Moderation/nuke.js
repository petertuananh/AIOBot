const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "recreatechannel",
    aliases: [`recrecn`, `nukecn`, `núc`],
    category: 'Moderation',
    description: "Delete and create a new channel!",
    cooldown: 5,
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["MANAGE_CHANNELS"],
    run: async (client, message, args, prefix) => {
    message.channel.clone().then((ch) => {
      ch.setParent(message.channel.parentId);
      ch.setPosition(message.channel.position);
      message.channel.delete();
      const helpEmbed = new MessageEmbed()
            .setTitle('This channel has been recreated!')
            .setImage('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
            .setColor('RED')
            .setFooter(`Action performed by ${message.author.tag}`)
      ch.send({ embeds: [helpEmbed] })
    //    .then((m) => m.delete({ timeout: 10000 }));
    });
  },
};