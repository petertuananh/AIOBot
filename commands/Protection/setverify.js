const {MessageEmbed} = require('discord.js');
const { on } = require('events');
const config = require('../../JSON/config.json');
const db = require('quick.db')

module.exports = {
    name: 'verify',
    aliases: ['xácminh'],
    category: 'Protection',
    description: 'Verify command!',
    cooldown: 5,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],
    // premiumOnly: true,
    run: async (client, message, args, prefix) => {
        if (!args[0]){
            const embed = new MessageEmbed()
            .setColor('RED')
            .setTitle(`<:deny_topgg:915231851285717003> You have choose the option (on/off/setup)`)
            .setFooter(`Test!`)
            return message.channel.send({embeds: [embed]})
        }
        
        if (args[0] == "on"){
            if (!args[1]){
                const embed = new MessageEmbed()
                .setColor('RED')
                .setTitle(`<:deny_topgg:915231851285717003> You have to provide the message ID`)
                .setFooter(`Test!`)
                return message.channel.send({embeds: [embed]})
            }
            if (!args[2]){
                const embed = new MessageEmbed()
                .setColor('RED')
                .setTitle(`<:deny_topgg:915231851285717003> You have to provide the role ID/tag!`)
                .setFooter(`Test!`)
                return message.channel.send({embeds: [embed]})
            }
            db.set(`messverify.${message.guild.id}`, args[1])
            db.set(`roleverify.${message.guild.id}`, args[2])
            message.channel.send(`Done!`)
        }
        if (args[0] == "off"){
            db.delete(`messverify.${message.guild.id}`)
            db.delete(`roleverify.${message.guild.id}`)
            message.channel.send(`Deleted!`)
        }
        if (args[0] == "setup"){
            
            const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
            const memberrole = message.guild.roles.cache.find((r) => (r.name === args[2].toString()) || (r.id === args[2].toString().replace(/[^\w\s]/gi, '')));
            const everyone = message.guild.roles.cache.find((role) => role.name === "@everyone")
            // const member = message.guild.roles.cache.find((role) => role.name === `@${memberrole}`)

            if (!channel){
                const embed = new MessageEmbed()
                .setColor('RED')
                .setTitle(`<:deny_topgg:915231851285717003> You have to provide the channel!`)
                .setFooter(`Test!`)
                return message.channel.send({embeds: [embed]})   
            }
            if (!memberrole){
                const embed = new MessageEmbed()
                .setColor('RED')
                .setTitle(`<:deny_topgg:915231851285717003> You have to provide the member role!`)
                .setFooter(`Test!`)
                return message.channel.send({embeds: [embed]})   
            };
        try{
            channel.permissionOverwrites.edit(everyone, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true,
                ADD_REACTIONS : true
            });
            channel.permissionOverwrites.edit(memberrole, {
                VIEW_CHANNEL: false,
                SEND_MESSAGES: false,
                ADD_REACTIONS : false
            });
            channel.setName(`✅│verify`)
            const embed = new MessageEmbed()
                .setColor('RED')
                .setTitle(`<:Success:912138764174884894> Set the verify channel #${channel} successfully!`)
                .setDescription(`Now use the command: verify on`)
                .setFooter(`Test!`)
            return message.channel.send({embeds: [embed]})   
        }catch{
            const embed = new MessageEmbed()
                .setColor('RED')
                .setTitle(`<:deny_topgg:915231851285717003> Bot is missing permission!`)
                .setFooter(`Test!`)
                return message.channel.send({embeds: [embed]})   
        }

        }
        
    }
}