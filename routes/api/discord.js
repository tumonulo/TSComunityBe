const { Router } = require('express')
const router = Router()
const { statsDiscord } = require('../../controllers/discord/stats.js')

router.get('/stats', async (req, res) => {
    const stats = await statsDiscord()
    if (stats.error) {
        return res.status(500).json({ error: stats.error });
    }
    res.json(stats)
})

module.exports = router