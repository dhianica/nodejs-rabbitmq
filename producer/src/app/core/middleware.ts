import * as express from 'express';
import logger from '../core/logs';

class Middleware {
  public loggerMiddleware(request: express.Request, response: express.Response, next: any): void {
    logger.debug({
      path: request.path,
      method: request.method,
      body: Object.keys(request.body).length !== 0 ? request.body : ''
    });
    next();
  }

  public errorResponder(error: any, request: express.Request, response: express.Response, next: any): void {
    response.header('Content-Type', 'application/json')
    const status = error.status || 400
    response.status(status).send(error.message)
  }
}

export default new Middleware()
