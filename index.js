import initApp from './app.router.js'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = 5000

initApp(app,express)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



