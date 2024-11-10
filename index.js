const express =require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/index.html")
})

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
})