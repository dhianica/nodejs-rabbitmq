import color from 'colors'
import dotenv from 'dotenv'
import moment from 'moment'
import { saveLogText } from './log.js'

dotenv.config()

const clg = {
  /**
   * log is function for show console.log if environment in mode development
   * @param {string} message is variable for message want to show
   */
  log: async (message) => {
    if (process.env.mode !== 'production') {
      console.log(color.grey(`${moment().format('YYYY-MM-DD HH:mm:ss.SSS')} --> ${JSON.stringify(message)}\n`))
    }
  },
  /**
   * error is function for show console.log if get error in catch or other you want use, and
   * this function will create log text error
   * @param {string} message is variable for message want to show
   */
  error: async (message) => {
    await saveLogText('error', `${moment().format('YYYY-MM-DD HH:mm:ss.SSS')} --> ${JSON.stringify(message)}\n`)
    console.log(color.bold(color.red(`${moment().format('YYYY-MM-DD HH:mm:ss.SSS')} --> ${JSON.stringify(message)}\n`)))
  },
  /**
   * info is function for show console.log with color cyan
   * @param {string} message is variable for message want to show
   */
  info: (message) => { console.log(color.cyan(message)) },
  /**
   * debug is function for show console.log with color gray
   * @param {string} message is variable for message want to show
   */
  debug: (message) => { console.log(color.gray(message)) },
}

export default clg
