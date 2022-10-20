import AMQPInstance from '../utils/instance.js'

const index = async (req, res) => {
  console.log('===================================================')
  console.log(`Run Send Message to Client ${JSON.stringify(req.query)}`)

  try {
    const amqp = new AMQPInstance()
    
  } catch (err) {
    console.log(err)
  }

  res.send({ status: '0000', message: 'OK' })
}

export default {
  index,
}
