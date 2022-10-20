import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()
let configPath
let parameterPath
let connectionString
const jsonConfig = 'config.json'
if (fs.existsSync(path.dirname(jsonConfig)) || fs.existsSync(path.dirname('parameter.json'))) {
  configPath = JSON.parse(fs.readFileSync(path.resolve('config', jsonConfig)))
  parameterPath = JSON.parse(fs.readFileSync(path.resolve('config', 'parameter.json')))
  if (process.env.DB_PORT === undefined || process.env.DB_PORT === '') {
    connectionString = `Server=${process.env.DB_SERVER};Database=${process.env.DB_NAME};User Id=${process.env.DB_USER};Password=${process.env.DB_PASSWORD};Encrypt=false;`
  } else {
    connectionString = `Server=${process.env.DB_SERVER},${process.env.DB_PORT};Database=${process.env.DB_NAME};User Id=${process.env.DB_USER};Password=${process.env.DB_PASSWORD};Encrypt=false;`
  }

  if (!fs.existsSync(configPath.path_logs)) {
    fs.mkdirSync(configPath.path_logs)
  }
  if (!fs.existsSync(configPath.path_info)) {
    fs.mkdirSync(configPath.path_info)
  }
} else {
  console.log('Missing file config.json or parameter.json')
  // process.exit(1)
}

const config = {
  env: configPath,
  params: parameterPath,
  logs: configPath.path_logs,
  info: configPath.path_info,
  sqlConnectionString: connectionString,
}

export default config
