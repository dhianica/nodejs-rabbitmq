/* eslint-disable max-len */
/* eslint-disable camelcase */
import fs from 'fs'
import moment from 'moment'

/**
 * isFileExist is function for check file is exist or not
 * @param {string} path is variable for want to check
 * @returns boolean true or false or error
 */
const isFileExist = (path) => new Promise((resolve, reject) => {
  try {
    fs.exists(path, (exist) => {
      if (exist) resolve(true)
      else reject(new Error({ err: `Missing folder ${path}`, src: 'isFileExist' }))
    })
  } catch (error) {
    reject(new Error({ error, src: 'isFileExist' }))
    process.exit(1)
  }
})

/**
 * saveLogText is function for create log text
 * @param {string} type is variable for type error
 * @param {string} message is variable for message in file error
 * @returns
 */
// eslint-disable-next-line no-async-promise-executor
export const saveLogText = async (path, type, message) => new Promise(async (resolve, reject) => {
  try {
    await isFileExist(path)
    fs.exists(`${path}/${type}_logs_${moment().format('YYYYMMDD')}.log`, (exist) => {
      if (exist) {
        try {
          fs.appendFile(`${path}/${type}_logs_${moment().format('YYYYMMDD')}.log`, message, { flag: 'a+' }, (err) => {
            if (err) {
              throw err
            } else {
              resolve(true)
            }
          })
        } catch (error) {
          reject(error)
        }
      } else {
        fs.writeFile(`${path}/${type}_logs_${moment().format('YYYYMMDD')}.log`, message, { flag: 'a+' }, (err) => {
          if (err) {
            throw err
          } else {
            resolve(true)
          }
        })
      }
    })
  } catch (error) {
    reject(error)
  }
})
