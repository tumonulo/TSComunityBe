const { Client, GatewayIntentBits, Partials } = require("discord.js");
const mongoose = require("mongoose");
const process = require("node:process");
const client = new Client({ intents: [Object.keys(GatewayIntentBits)], partials: [Object.keys(Partials), Partials.Channel], allowedMentions: { parse: ["users"]}});
require("dotenv").config();
const TOKENDISCORDBOT = process.env.TOKENDISCORDBOT;
const startTime = Date.now();

(async () => {
  client.login(TOKENDISCORDBOT).then(() => {
    const timeToConnect = Date.now() - startTime;
    console.log(`
      ╔═══════════════════════════════════╗
      ║    CONNECTED TO A DISCORD BOT     ║
      ╚═══════════════════════════════════╝
      Discord Bot Name: ${client.user.username}
      Discord Bot ID:   ${client.user.id}
      Time To Connect:  ${timeToConnect} ms
      `);
  });

  await mongoose.connect(config.mondodb).then(async () => {
    const mongooseStats = await mongoose.connection.db.stats();
    const timeToConnect = Date.now() - startTime;
    console.log(`
      ╔═══════════════════════════════════╗
      ║      CONNECTED TO A DATABASE      ║
      ╚═══════════════════════════════════╝
      Database Name:   ${mongoose.connection.name}
      Database Size:   ${(mongooseStats.dataSize / (1024 * 1024 * 1024)).toFixed(2)} GB
      Time To Connect: ${timeToConnect} ms
      `);  })
})()

module.exports = client;