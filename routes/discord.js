const { Router } = require('express')
const router = Router()

const discordIcon = require('../controllers/discord/discordIcon.js')
const discordStats = require('../controllers/discord/discordStats.js')

router.get('/icon', discordIcon)

router.get('/stats', discordStats)

module.exports = router