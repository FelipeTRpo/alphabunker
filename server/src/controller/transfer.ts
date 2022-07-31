import { Request, Response } from 'express'
import { resError } from '../models/response';
import TransferService from '../service/transfer';

class Transfer {


    public async handle(req: Request, res: Response) {
        try{
            const response = await new TransferService(req.body).create()
            res.status(response.code);
            res.send(response.data);
        }
        catch(err){
            const _resError: resError = err as resError;
            if(_resError.code && _resError.code) res.status(_resError.code).send(_resError);
            else res.status(500).send("ERROR IN API")
        }
    }
}

export default Transfer;