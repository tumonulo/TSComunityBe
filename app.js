const fs = require('node:fs')
const path = require('node:path')

const { Client, GatewayIntentBits, Partials } = require('discord.js')
const cors = require('cors')
require('colors')

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8080
const TOKEN_DISCORD_BOT = process.env.TOKEN_DISCORD_BOT

process.on('unhandledRejection', async (reason, promise) => {
  console.log('Unhandled Rejection error at:', promise, 'reason', reason)
})

process.on('uncaughtException', (err) => {
   console.log('Uncaught Expection', err)
})

process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log('Uncaught Expection Monitor', err, origin)
})

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials), Partials.Channel],
  allowedMentions: {
      parse: ["users"]
    },
})

app.use(express.static(path.join(__dirname, 'public')))
app.disable('x-powered-by')
app.use(cors({
  origin: (origin, callback) => {
    const acceptedOrigins = [
      'https://ts-comunity-brawl.vercel.app/'
    ]

    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}))

const folderPath = __dirname + '/routes'
fs.readdirSync(folderPath).forEach((file) => {
  const filePath = path.join(folderPath, file)
  const route = require(filePath)
  const routeName = path.basename(file, '.js')
  const routePath = routeName === 'index' ? '/' : `/${routeName}`
  app.use(`${routePath}`, route)
})

app.use((req, res) => {
  res.status(404).sendFile(process.cwd() + '/public/html/404.html')
})

module.exports = client

const startTime = Date.now();
Promise.all([
  app.listen(PORT),
  client.login(TOKEN_DISCORD_BOT)
]).then(() => {
    const elapsedTime = Date.now() - startTime;
    const elapsedTimeStr = `${elapsedTime} ms`
    console.log(`
      ╔════════════════════════════════════╗╔════════════════════════════════════╗
      ║          SERVER LISTENING          ║║        DISCORD BOT CONNECTED       ║
      ╚════════════════════════════════════╝╚════════════════════════════════════╝
      Localhost: http://localhost:${PORT}       Discord Bot Name: ${client.user.username}
      Time Until Initialize: ${elapsedTimeStr.padEnd(15)} Discord Bot ID: ${client.user.id}
      `.green)
  }).catch(error => {
    console.error(`
      ╔═════════════════════════════════════╗
      ║          CONNECTION ERROR           ║
      ╚═════════════════════════════════════╝
      Details: ${error.message}
    `.red)
})