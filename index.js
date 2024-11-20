const express = require("express");
const { ready } = require("./ready.js");
const app = express();
const getClubs = require("./controllers/clubs/getClubs.js");

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

app.get("/Header", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/header.html")
})

app.get("/Footer", (req, res) => {
  res.sendFile(process.cwd() + "/public/html/footer.html")
})

app.use((req, res) => {
  res.status(404).sendFile(process.cwd() + "/public/html/404.html")
})

ready(app);