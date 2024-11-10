const express =require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT ?? 3000

app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/client/index.html")
})

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})