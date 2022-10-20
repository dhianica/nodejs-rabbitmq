import express from 'express'
import cors from 'cors'
import moment from 'moment'
import dotenv from 'dotenv'
import console from './utils/console.js'
import routes from './routes/index.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false, parameterLimit: 10000 }))
app.use(express.json())

const PORT = process.env.port

app.listen(PORT, () => {
  console.info(`Application date & time starting----@ ${moment().format('YYYY-MM-DD HH:mm:ss')}`)
  console.info(`API server ip & port running--------@ http://127.0.0.1:${PORT}`)
})

app.use('/api', routes)

export default app
