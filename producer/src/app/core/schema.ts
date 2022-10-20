import { Request, Response, NextFunction } from 'express';
import Logger from './logs';
import Ajv from "ajv"
import { isEmpty } from '../../utils/utils';
import { HttpStatusCode } from '../../utils/enum'

const ajv = new Ajv()
class Schema {
    public setSchema(schemaName: string, schema: Object) {
        ajv.addMetaSchema(schema, schemaName);
    }
    protected validate(schemaName: string) {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                if (!isEmpty(req.body)) {
                    const isValid = await ajv.validate(schemaName, req.body);
                    if (!isValid) {
                        const errorMessages = ajv.errorsText()
                        res.status(HttpStatusCode.BAD_REQUEST).json(errorMessages);
                    } else {
                        next();
                    }
                } else {
                    res.status(HttpStatusCode.BAD_REQUEST).json({
                        message: 'Body must be required!'
                    });
                }
            } catch (error) {
                res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                    message: error
                })
            }
        }
    }
}


export default Schema;
