const https = require('https');
const Discord = require('discord.js');
// const colors = require('../../botconfig/colors.json')
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'

module.exports = {
  name: "meme",
  aliases: [],
  category: "fun",
  usage: "meme",
  run: async(client, message, args) => {

        https.get(url, (result) => {
            var body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                var response = JSON.parse(body)
                var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

                if (index.post_hint !== 'image') {

                    var text = index.selftext
                    const helpEmbed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor("RANDOM")
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    message.channel.send({ embeds: [helpEmbed] })
                }

                var image = index.preview.images[0].source.url.replace('&amp;', '&')
                var title = index.title
                var link = 'https://reddit.com' + index.permalink
                var subRedditName = index.subreddit_name_prefixed

                if (index.post_hint !== 'image') {
                    const helpEmbed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor("RANDOM")
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    message.channel.send({ embeds: [helpEmbed] })
                }
               
                const imageembed = new Discord.MessageEmbed()
                    .setTitle(subRedditName)
                    .setImage(image)
                    .setColor("RANDOM")
                    .setDescription(`[${title}](${link})`)
                    .setURL(`https://reddit.com/${subRedditName}`)
                message.channel.send({ embeds: [imageembed] })
            }).on('error', function (e) {
                console.log('Got an error: ', e)
            })
        })
    }
}