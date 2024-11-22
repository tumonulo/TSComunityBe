const { Router } = require("express")
const clubsRouter = Router()

clubsRouter.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/clubs.html")
})

module.exports = { clubsRouter } 