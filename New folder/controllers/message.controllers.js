import * as AMQPInstance from '../utils/instance.js'
// import console from '../utils/console.js'

const index = async (req, res) => {
  console.log('===================================================')
  console.log(`Run Send Message to Client ${JSON.stringify(req.query)}`)
  try {
    const amqp = new AMQPInstance.default.AMQPInstance()
    await amqp.send('logs', `${req.query.message}`)
    res.send({ status: '0000', message: 'OK' })
  } catch (err) {
    console.error(err)
    res.send({ status: '500', message: err.message })
  }
}

export default {
  index,
}
