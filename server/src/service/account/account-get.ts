import Account from "../../models/account";
import { resError, resSuccess } from "../../models/response";
import AccountSql from "../../repository/account";

export class AccountGetService {
    private account: Account;

    constructor(account: Account) {
        this.account = account;
    }

    public async getIdAccount(): Promise<string> {
        const id = await new AccountSql(this.account).idAccount();
        if (id) return id.toString();
        throw "ACCOUNT NOT EXISTS "
    }

    public async balanceSufficient(value: number, id: string): Promise<boolean> {
        const balance = parseFloat(await new AccountSql(this.account).getBalance(id));
        return balance >= value;
    }
}

export async function GetAccountWithCpf(cpf: string): Promise<resSuccess> {
    try {
        const allFieds = await new AccountSql({} as Account).getAllFieldsWithCpf(cpf)
        if (allFieds.length === 0) throw "cpf inexists";
        return { code: 200, data: allFieds } as resSuccess;
    } catch (e) {
        if(typeof e === "string"){
            throw { code: 404, msg: e } as resError
        }
        throw e
    }
}