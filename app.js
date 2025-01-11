const express = require('express')
const app = express()
const fs = require('node:fs')
const path = require('node:path')
require('dotenv').config()
const PORT = process.env.PORT ?? 8080;
const TOKENDISCORDBOT = process.env.TOKENDISCORDBOT;

const { Client, GatewayIntentBits, Partials } = require('discord.js')

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials), Partials.Channel],
  allowedMentions: {
      parse: ["users"]
    },
})

process.on('unhandledRejection', async (reason, promise) => {
  console.log('Unhandled Rejection error at:', promise, 'reason', reason)
});

process.on('uncaughtException', (err) => {
   console.log('Uncaught Expection', err)
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log('Uncaught Expection Monitor', err, origin)
});

const folderPath = __dirname + '/routes'
fs.readdirSync(folderPath).forEach((file) => {
  const filePath = path.join(folderPath, file)
  const route = require(filePath)
  const routeName = path.basename(file, '.js')
  const routePath = routeName === 'index' ? '/' : `/${routeName}`
  app.use(`${routePath}`, route)
})

app.use(express.static('public'))

app.use((req, res) => {
  res.status(404).sendFile(process.cwd() + '/public/html/404.html')
})


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

module.exports = {
  client
}