const express = require("express")
const app = express()
const { router } = require("./routes/index.js")
const { applicationsRouter } = require("./routes/applications.js")
const { clubsRouter } = require("./routes/clubs.js")
const { discordRouter } = require("./routes/discord.js")
const { ready } = require("./ready.js")


process.on('unhandledRejection', async (reason, promise) => {
    console.log('Unhandled Rejection error at:', promise, 'reason', reason)
  });

  process.on('uncaughtException', (err) => {
    console.log('Uncaught Expection', err)
  });

  process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('Uncaught Expection Monitor', err, origin)
  });

app.use(express.static("public"))

app.get("/", router)

app.use("/clubes", clubsRouter)

app.get("/postulaciones", applicationsRouter)

app.use("/discord", discordRouter)

app.use((req, res) => {
  res.status(404).sendFile(process.cwd() + "/public/html/404.html")
})

ready(app)