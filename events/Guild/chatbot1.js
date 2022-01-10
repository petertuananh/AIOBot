const client = require('../../AIOBot.js');
const config = require('../../JSON/config.json');
const {
    MessageEmbed
} = require('discord.js');
const { prefix } = require('../../JSON/config.json');
const db = require('quick.db');
const axios = require("axios");
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (!message.guild) {
      message.channel.sendTyping();
        let res = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(message.content)}&lc=vn&cf=false&name=AIO Bot`); 
				//https://tuanxuong.com/api/simsimi/index.php?text=${encodeURIComponent(text)}
				//https://api.simsimi.net/v2/?text=${encodeURIComponent(message.content)}&lc=vn&cf=false&name=ElainaBot
				//https://api-sv2.simsimi.net/v2/?text=hi&lc=vn
				//https://tuanxuong.com/api/simsimi/index.php?text=${encodeURIComponent(text)}
        message.channel.send(res.data.success);
    }else{
    if(message.channel.type === 'dm') return
    if (message.content.startsWith(prefix)) return
    const AIChatBotCheck = await db.has(`autochat-${message.guild.id}`);
    
    if (AIChatBotCheck) {
        // const errorIMG = new MessageEmbed()
        // .setColor("RED")
        // .setAuthor(`[UTILITY] Hệ Thống Chat Bot ❌`, client.user.displayAvatarURL())
        // .setThumbnail(db.get(`thumb-${message.guild.id}`))
        // .addField(`Lí do:`, `Không thể gửi hình ảnh`, false)
        // .setTimestamp()
        // .setFooter(client.user.username, client.user.displayAvatarURL())

        // if(message.attachments.size > 0) return message.channel.send({embeds: [errorIMG]})
        const getAIChatBotCheck = await db.get(`autochat-${message.guild.id}`)
        const AIChatBot = message.guild.channels.cache.get(getAIChatBotCheck)
        if (message.channel.id != getAIChatBotCheck) return
        let res = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(message.content)}&lc=vn&cf=false&name=AIO Bot`); 
				//https://tuanxuong.com/api/simsimi/index.php?text=${encodeURIComponent(text)}
				//https://api.simsimi.net/v2/?text=${encodeURIComponent(message.content)}&lc=vn&cf=false&name=ElainaBot
				//https://api-sv2.simsimi.net/v2/?text=hi&lc=vn
				//https://tuanxuong.com/api/simsimi/index.php?text=${encodeURIComponent(text)}
        AIChatBot.send(res.data.success);
    }
    }
})