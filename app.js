const express = require('express')
const app = express()
const fs = require('node:fs')
const path = require('node:path')
const { ready } = require('./ready.js')


process.on('unhandledRejection', async (reason, promise) => {
  console.log('Unhandled Rejection error at:', promise, 'reason', reason)
});

process.on('uncaughtException', (err) => {
   console.log('Uncaught Expection', err)
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log('Uncaught Expection Monitor', err, origin)
});

function loadRoutes(folderPath) {
  fs.readdirSync(folderPath).forEach((file) => {
    const filePath = path.join(folderPath, file)
    const route = require(filePath)
    const routeName = path.basename(file, '.js')
    const routePath = routeName === 'index' ? '' : `/${routeName}`
    console.log('filePath:', filePath)
    console.log('route:', route)
    console.log('routeName:', routeName)
    console.log('routePath:', routePath)
    if (folderPath.endsWith('api')) {
      app.use(`/api.${routePath}`, route)
    } else {
      app.use(`/${routePath}`, route)
    }
  })
}

app.use(express.static('public'))

loadRoutes(path.join(__dirname, 'routes/web'));
loadRoutes(path.join(__dirname, 'routes/api'));

app.use((req, res) => {
  res.status(404).sendFile(process.cwd() + '/public/html/404.html')
})

ready(app)