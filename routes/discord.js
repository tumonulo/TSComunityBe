const { Router } = require('express')
const router = Router()

const discordStats = require('../controllers/discord/discordStats.js')

router.get('/stats', discordStats)

module.exports = router