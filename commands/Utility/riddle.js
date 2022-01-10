// const axios = require('axios');

// module.exports = new Command({
//   name: 'riddle',
//   aliases: ['riddles'],
//   description: 'Finds a random riddle for you :)',
//   category: 'Fun',

//   async run(message, args, client) {
//     const url = "https://www.no-api-key.com/api/v1/riddle" 
//     let data, response
//     try {
//         response = await axios.get(url)
//         data = response.data
//     } catch(error) {
//         message.channel.send('There was an error with the API')
//         console.log(error)
//     }
//     message.channel.send(`**Riddle: ** ${data.question}`)
//     setTimeout(function() {
//         message.channel.send(`**Answer: ** ${data.answer}`)
//     }, 13000)

//   }
// })