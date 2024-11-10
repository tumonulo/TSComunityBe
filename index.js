const express =require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/index.html")
})

app.get("/Clubes", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/clubs.html")
})

app.get("/Postulaciones", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/application.html")
})

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
})