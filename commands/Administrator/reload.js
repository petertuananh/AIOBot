const { MessageEmbed } = require('discord.js')
const config = require('../../JSON/config.json');
module.exports = {
    name: 'reload',
    aliases: ['reload-cmd', 'reload-commands', 'rl'],
    cooldown: 5,
    category: 'Administrator',
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    description: 'Refresh commands',
    ownerOnly: true,

    run: async (client, message, args, prefix) => {
        const embed = new MessageEmbed()
        .setAuthor(`[ADMIN] Reload 💠`, client.user.displayAvatarURL())
        .setThumbnail(config.thumbnail)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("RED")
        .setDescription(`Vui lòng cho lệnh`)
        .addField(`Cách dùng`, `${prefix}reload [tên lệnh]`)
        .setImage(config.embedbanner)
        if (!args[0]) return message.channel.send({embeds : [embed]});

        let command = args[0].toLowerCase();
        var commandinfo = client.commands.get(command);
        var category = commandinfo.category

        try {
            delete require.cache[require.resolve(`../../commands/${category}/${command}.js`)];
            client.commands.delete(command);
    
          const pull = require(`../../commands/${category}/${command}.js`);
          client.commands.set(command, pull);

          const embed1 = new MessageEmbed()
          .setAuthor(`[ADMIN] Reload 💠`, client.user.displayAvatarURL())
          .setColor("RED")
          .setThumbnail(config.thumbnail)
          .setFooter(client.user.username, client.user.displayAvatarURL())
          .setTimestamp()
          .setDescription(`Làm mới lại lệnh \`${command}\` thành công`)
          .setImage(config.embedbanner)
          return message.channel.send({embeds: [embed1]});
        } catch (error) {
            const embed2 = new MessageEmbed()
          .setAuthor(`[ADMIN] Reload 💠`, client.user.displayAvatarURL())
          .setThumbnail(config.thumbnail)
          .setColor("RED")
          .setFooter(client.user.username, client.user.displayAvatarURL())
          .setTimestamp()
          .setDescription(`Không thể reload ${command} thành công`)
          .addField(`Lỗi khi load ${command}`, `\`${error.message}\``)
          .setImage(config.embedbanner)
          return message.channel.send({embeds: [embed2]});
        }
    }
}