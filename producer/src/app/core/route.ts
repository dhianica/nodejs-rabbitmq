import * as express from 'express';
import Schema from './schema';

class Route extends Schema {
  public router: express.Router;
  public schemaName: string;
  public useValidateMiddleware: boolean;

  public constructor(schemaName: string, useValidateMiddleware: boolean = true) {
    super();
    this.router = express.Router();
    this.schemaName = schemaName;
    this.useValidateMiddleware = useValidateMiddleware;
  }

  public get(path: string, ...params: any[]): void {
    if (this.useValidateMiddleware) {
      this.router.get(path, this.validate(this.schemaName), params);
    } else {
      this.router.get(path, params)
    }
  }

  public post(path: string, ...params: any[]): void {
    if (this.useValidateMiddleware) {
      this.router.post(path, this.validate(this.schemaName), params);
    } else {
      this.router.post(path, params)
    }
  }

  public delete(path: string, ...params: any[]): void {
    if (this.useValidateMiddleware) {
      this.router.delete(path, this.validate(this.schemaName), params);
    } else {
      this.router.delete(path, params)
    }
  }

  public put(path: string, ...params: any[]): void {
    if (this.useValidateMiddleware) {
      this.router.put(path, this.validate(this.schemaName), params);
    } else {
      this.router.put(path, params)
    }
  }

  public options(path: string, ...params: any[]): void {
    if (this.useValidateMiddleware) {
      this.router.options(path, this.validate(this.schemaName), params);
    } else {
      this.router.options(path, params)
    }
  }
}

export default Route;
