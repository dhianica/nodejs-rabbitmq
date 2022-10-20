import * as AMQPInstance from './utils/instance'

const queue = 'logs'
const amqp = new AMQPInstance.default.AMQPInstance()
amqp.channel.consume(queue, (msg) => {
  console.log(' [x] Received %s', msg.content.toString())
}, {
  noAck: false,
})
