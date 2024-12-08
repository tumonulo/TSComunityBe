const { Router } = require('express')
const overlayRouter = Router()

overlayRouter.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/html/applications.html')
})

module.exports = overlayRouter