const { Router } = require('express')
const applicationsRouter = Router()

applicationsRouter.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/html/applications.html')
})

module.exports = applicationsRouter 