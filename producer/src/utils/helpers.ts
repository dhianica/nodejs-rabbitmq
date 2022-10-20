import { camelCase } from './utils'

class Helpers {
  public setUrlRoute(basePath: string, subPath: string): string {
    return `${basePath}${/\/[^/]*.*\.*\//.exec(subPath)![0]}`;
  }
  public setSchemaName(name: string): string {
    return camelCase(`${/\/[^/]*.*\.*\//.exec(name)![0]}`).replace(/[.*+?^${}()\/]/g, '');
  }
}


export default new Helpers();
