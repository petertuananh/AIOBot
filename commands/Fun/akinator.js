const { Client, Intents } = require("discord.js");
const akinator = require("discord.js-akinator");

const language = "en"; //The Language of the Game
const childMode = false; //Whether to use Akinator's Child Mode
const gameType = "character"; //The Type of Akinator Game to Play. ("animal", "character" or "object")
const useButtons = true; //Whether to use Discord's Buttons
const embedColor = "#1F1E33"; //The Color of the Message Embeds

module.exports = {
    name: "Akinator",
    aliases: ["akinator"],
    usage: "Akinator",
    category: "fun",
    description: "Guessing game I guess",
    run: async (client, message, args) => {
        akinator(message, {
            language: language, //Defaults to "en"
            childMode: childMode, //Defaults to "false"
            gameType: gameType, //Defaults to "character"
            useButtons: useButtons, //Defaults to "false"
            embedColor: embedColor //Defaults to "RANDOM"
        });
    }
}

