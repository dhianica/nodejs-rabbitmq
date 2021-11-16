import express from 'express'
import messageController from '../controllers/message.controllers'

const router = express.Router()

router.post('/', messageController.index)

export default router
