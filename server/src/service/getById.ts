import Account from "../models/account";
import { resError, resSuccess } from "../models/response";
import StatementSql from "../repository/statement";

class StatementByIdService {
    private id: string;
    private idOwner: string;
    private account: Account|undefined;

    constructor(idOwner: string, id: string){
        this.id = id;
        this.idOwner = idOwner;
    }

    public async create() {
        try {
            const res = await new StatementSql(this.account as Account).getById(this.idOwner, this.id);
            return { code: 200, data: res} as resSuccess;
        }
        catch(err){
            throw {
                code: 400,
                msg: err
            } as resError;
        }
    }    
}

export default StatementByIdService;