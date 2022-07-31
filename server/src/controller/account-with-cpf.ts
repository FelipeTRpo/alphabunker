import { Request, Response } from 'express'
import { GetAccountWithCpf } from '../service/account/account-get'
import { resError } from '../models/response'

class GetAccount {

    public async handle(req: Request, res: Response) {
        try{
            const response = await GetAccountWithCpf(req.params.cpf)
            res.status(response.code);
            res.send(response.data);
        }
        catch(err){
            console.log(err)
            const _resError: resError = err as resError;
            if(_resError.code && _resError.code) res.status(_resError.code).send(_resError);
            else res.status(500).send("ERROR IN API");
        }
    }
}

export default GetAccount