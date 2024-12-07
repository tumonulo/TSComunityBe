const { Router } = require('express')
const discordRouter = Router()
const { statsDiscord } = require('../controllers/discord/statsDiscord.js')

discordRouter.get('/stats', async (req, res) => {
    const stats = await statsDiscord()
    if (stats.error) {
        return res.status(500).json({ error: stats.error });
    }
    res.json(stats)
})

module.exports = { discordRouter } 