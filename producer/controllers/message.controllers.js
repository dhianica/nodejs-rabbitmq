import amqp from 'amqplib/callback_api'
import console from '../utils/console'

const index = async (req, res) => {
  console.log('===================================================')
  console.log(`Run Send Message to Client ${JSON.stringify(req.body)}`)
  amqp.connect('amqp://localhost', (error0, connection) => {
    if (error0) {
      res.send({ status: '0100', message: error0 })
    }
    connection.createChannel((error1, channel) => {
      if (error1) {
        res.send({ status: '0200', message: error1 })
      }

      const queue = 'message'
      const msg = req.body.message

      channel.assertQueue(queue, {
        durable: false,
      })
      channel.sendToQueue(queue, Buffer.from(msg))

      console.log(' [x] Sent %s', msg)
    })
  })
  res.send({ status: '0000', message: 'OK' })
}

export default {
  index,
}
