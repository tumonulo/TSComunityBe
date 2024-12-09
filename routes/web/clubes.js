const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/html/clubs.html')
})

module.exports = router 