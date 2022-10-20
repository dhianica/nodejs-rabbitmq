import express from 'express'
import exchangeController from '../controllers/exchange.controllers.js'

const router = express.Router()

router.get('/', exchangeController.index)

export default router
