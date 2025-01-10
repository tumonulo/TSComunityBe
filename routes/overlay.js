const { Router } = require('express')
const router = Router()
const overlayrandomMessage = require('../../controllers/overlay/overlayoverlayRandomMessage.js')

router.get('/', overlayrandomMessage)

module.exports = router