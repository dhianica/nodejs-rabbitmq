import express from 'express'
import messageRouter from './message.routes.js'
import exchangeRouter from './exchange.routes.js'

const router = express.Router()

router.use('/message', messageRouter)
router.use('/exchange', exchangeRouter)

export default router
