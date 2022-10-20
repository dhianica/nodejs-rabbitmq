import express from 'express'
import messageController from '../controllers/message.controllers.js'

const router = express.Router()

router.get('/', messageController.index)

export default router
