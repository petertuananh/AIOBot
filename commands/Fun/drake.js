
module.exports = {
  name: 'drake',
  description: "Make Drake meme",
  category: "fun",
  
  async run (client, message, args) {
    

const text1 = args.join(" ").split("/")[0]
const text2 = args.join(" ").split("/")[1]

if (!text1) return message.channel.send(":x: You need 2 sentences separated with \"/\" for this to work.")
if (!text2) return message.channel.send(":x: You need 2 sentences separated with \"/\" for this to work.")

const image = `https://api.popcatdev.repl.co/drake?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`


message.channel.send(image, "Drake.png")

  }
}
