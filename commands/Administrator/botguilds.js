const {
    MessageEmbed
} = require('discord.js')
const config = require('../../JSON/config.json');
module.exports  = {
    name: "botguilds",
    aliases: [`guildsbot`],
    category: 'Bot',
    description: `List of AIO BOT servers available!`,
    cooldown: 5,
    BotPerms: ["SEND_MESSAGES"],
		ownerOnly: true,
    run: async (client, message, args, prefix) => {
        const guilds = client.guilds.cache
            .sort((a, b) => b.memberCount - a.memberCount)
            .first(50);

        const description = guilds.map((guild, i) => {
            return `**${i + 1}) ${guild.name}\n・Server ID:** \`${guild.id}\`\n**・Member:** \`${guild.memberCount}\``
            // \n**Thành viên:** \`${guild.memberCount}\`
            // return `\`${index+1} > ${guild.name}: ${guild.memberCount} thành Viên\``
            // \n**Owner máy chủ:** \`${guild.ownerId}\`
            // \n**ID máy chủ:** \`${guild.id}\`
        }).join('\n')

        const embed = new MessageEmbed()
            .setAuthor(`[BOT] list servers ${client.user.username} is serving`, client.user.displayAvatarURL())
            .setThumbnail(config.thumbnail)
            .setTitle(`⚔️ Joined: ${client.guilds.cache.size} servers\n🪄 Total member: ${client.users.cache.size}`)
            .setColor("RANDOM")
            .setDescription(`\n**⭐ List of 50 nearest servers:**\n${description}`)
            .setTimestamp()
            .setImage(config.embedbanner)
            .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.send({
            embeds: [embed]
        })
    }
}