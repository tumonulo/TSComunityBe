const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT ?? 3000;
const startTime = Date.now();

process.on('unhandledRejection', async (reason, promise) => {
    console.log('Unhandled Rejection error at:', promise, 'reason', reason);
  });

  process.on('uncaughtException', (err) => {
    console.log('Uncaught Expection', err);
  });

  process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('Uncaught Expection Monitor', err, origin);
  });


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/index.html")
})

app.get("/Clubes", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/clubs.html")
})

app.get("/Postulaciones", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/applications.html")
})

app.listen(PORT, () => {
    require("./ready");
    
    const timeToConnect = Date.now() - startTime;
    console.log(`
        ╔═══════════════════════════════════╗
        ║          SERVER RUNNING           ║
        ╚═══════════════════════════════════╝
        Puerto:          ${PORT}
        Localhost:       http://localhost:${PORT}
        Time To Connect: ${timeToConnect} ms `);
    })