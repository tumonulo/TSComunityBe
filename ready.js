const { Client, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({ intents: [Object.keys(GatewayIntentBits)], partials: [Object.keys(Partials), Partials.Channel], allowedMentions: { parse: ["users"]}});
const process = require("node:process");
require("dotenv").config();
const TOKENDISCORDBOT = process.env.TOKENDISCORDBOT;
const startTime = Date.now();


  client.login(TOKENDISCORDBOT).then( () => {
    const timeToConnect = Date.now() - startTime;
    console.log(`
        ╔═══════════════════════════════════╗
        ║    CONNECTED TO A DISCORD BOT     ║
        ╚═══════════════════════════════════╝
        Discord Bot Name: ${client.user.username}
        Discord Bot ID:   ${client.user.id}
        Time To Connect:  ${timeToConnect} ms
        `);
  })

module.exports = client;