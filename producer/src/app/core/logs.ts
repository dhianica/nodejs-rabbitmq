import { ILogObject, Logger } from 'tslog';
import { appendFileSync } from 'fs';
import dayjs from 'dayjs';

function logToTransport(logObject: ILogObject): void {
  const logs = `[${dayjs(logObject.date).format('YYYY-MM-DD HH:mm:ss')}] -> ${logObject.logLevel} : ${logObject.argumentsArray.toString()}`;
  appendFileSync('./logs/info.log', logs + '\n');
}

function errorLogToTransport(logObject: ILogObject): void {
  const logs = `[${dayjs(logObject.date).format('YYYY-MM-DD HH:mm:ss')}] -> ${logObject.logLevel} : ${logObject.logLevel}`;
  appendFileSync('./logs/error.log', logs + '\n');
}

function debugLogToTransport(logObject: ILogObject): void {
  appendFileSync('./logs/debug.log', JSON.stringify(logObject) + '\n');
}

const logger: Logger = new Logger({ name: 'console', overwriteConsole: true, minLevel:'info'});
logger.attachTransport(
  {
    silly: logToTransport,
    debug: debugLogToTransport,
    trace: logToTransport,
    info: logToTransport,
    warn: logToTransport,
    error: errorLogToTransport,
    fatal: logToTransport
  },
  'debug'
);

export default logger;
