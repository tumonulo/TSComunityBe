const { PermissionsBitField } = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client({ intents: [131071] });
require("dotenv").config();
const TOKENDISCORDBOT = process.env.TOKENDISCORDBOT;

client.login(TOKENDISCORDBOT).then(() => {
    console.log(`Connected to Discord bot: ${client.user.username}`)
}).catch(error => {
    console.error("Error connecting to Discord bot:" + error)
})