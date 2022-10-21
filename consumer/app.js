import { IAMQPInstance } from './utils/instance'

const queue = 'logs'
const amqp = new IAMQPInstance()
amqp.consume(queue, (msg) => {
  console.log(' [x] Received %s', msg.content.toString())
}, {
  noAck: false,
})
