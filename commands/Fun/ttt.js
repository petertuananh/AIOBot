module.exports = {
    name: "tictactoe",
    aliases: ["ttt"],
    usage: "ttt @user",
    description: "play tic tac toe with your friend",
    category: "fun",
    timeout: "10000",
    run: async(client, message, args) => {
        const simplydjs = require("simply-djs")
        simplydjs.tictactoe(message)
    }
}