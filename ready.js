const { Client, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({ intents: [Object.keys(GatewayIntentBits)], partials: [Object.keys(Partials), Partials.Channel], allowedMentions: { parse: ["users"]}});
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT ?? 3000;
const TOKENDISCORDBOT = process.env.TOKENDISCORDBOT;
const TOKENMONGODB = process.env.TOKENMONGODB

async function ready(app) {
  const startTime = Date.now();
  Promise.all([
    app.listen(PORT),
    client.login(TOKENDISCORDBOT)
  ]).then(() => {
      client.once("ready", () => {
      const elapsedTime = Date.now() - startTime;
      const elapsedTimeStr = `${elapsedTime} ms`
      console.log(`
        ╔════════════════════════════════════╗╔════════════════════════════════════╗
        ║          SERVER LISTENING          ║║        DISCORD BOT CONNECTED       ║
        ╚════════════════════════════════════╝╚════════════════════════════════════╝
        Localhost: http://localhost:${PORT}       Discord Bot Name: ${client.user.username}
        Time To Initialize: ${elapsedTimeStr.padEnd(18)} Discord Bot ID: ${client.user.id}
        `);
      })
    }).catch(error => {
      console.error(`
        ╔═════════════════════════════════════╗
        ║          CONNECTION ERROR           ║
        ╚═════════════════════════════════════╝
        Details: ${error.message}
      `)
  })
}

module.exports = {
  ready,
  client
};