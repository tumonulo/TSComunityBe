const { Router } = require('express')
const router = Router()
const discordStats = require('../controllers/discord/discordStats.js')

router.get('/', discordStats)

module.exports = router