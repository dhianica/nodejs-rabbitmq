import * as express from 'express'
import { IAMQPInstance } from '../../utils/instance'

  class MessageController {
    getAllMessages = async (
      req: express.Request,
      res: express.Response, 
      next: express.NextFunction
    ): Promise<void> => {
      console.log('===================================================')
      console.log(`Run Send Message to Client ${JSON.stringify(req.query)}`)
      try {
        const amqp = new IAMQPInstance()
        await amqp.send('logs', `${req.query.message}`)
        res.send({ status: '0000', message: 'OK' })
      } catch (err) {
        next(err)
      }
    };

  }

export default new MessageController();