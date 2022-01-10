module.exports = {
    name: "calculator",
    aliases: ["calc"],
    category: "fun",
    usage: "calc",
    timeout: "20000",
    run: async(client, message, args) => {
        const simplydjs = require("simply-djs")
        simplydjs.calculator(message, {
            embedColor:"GREEN"
        })
    }
}