import Route from '../core/route';
import MessageController from './message.controller';

class MessageRouter extends Route {
  path = '/message';
  private controller = MessageController;

  constructor(schemaName: string) {
    super(schemaName);
    this.get('/', this.controller.getAllMessages);
  }
}

export default MessageRouter;
