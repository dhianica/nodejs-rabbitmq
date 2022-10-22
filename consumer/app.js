import { IAMQPInstance } from './utils/instance'

(async () => {
  const queue = 'logs'
  const amqp = new IAMQPInstance()
  console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queue)
  await amqp.consume(queue, (msg) => {
    console.log(' [x] Received %s', msg.content.toString())
  }, {
    noAck: false,
  })
})()
