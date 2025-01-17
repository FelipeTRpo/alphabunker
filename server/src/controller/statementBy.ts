import { Request, Response } from 'express'
import Account from '../models/account';
import { resError } from '../models/response';
import StatementByIdService from '../service/getById';

class StatementById {

    public async handle(req: Request, res: Response) {
        try{
            const response = await new StatementByIdService(req.params.idOwner, req.params.id).create()
            res.status(res.statusCode);
            res.send(response.data);
        }
        catch(err){
            const _resError: resError = err as resError;
            if(_resError.code && _resError.code) res.status(_resError.code).send(_resError);
            else res.status(500).send("ERROR IN API")
        }
    }

}

export default StatementById;