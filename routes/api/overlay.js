const { Router } = require('express')
const router = Router()
const message = require('../../controllers/overlay/overlayMessage.js')

router.get('/', overlay)

module.exports = router