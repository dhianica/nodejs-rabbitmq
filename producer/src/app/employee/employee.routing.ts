import Route from '../core/route';
import EmployeeController from './employee.controller';

class EmployeeRouter extends Route {
  private controller = EmployeeController;

  constructor(schemaName: string) {
    super(schemaName);
    this.get('/', this.controller.getAllEmployees);
    this.post('/', this.controller.createAEmployee);
  }
}

export default EmployeeRouter;
