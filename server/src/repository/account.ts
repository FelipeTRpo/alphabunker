import Connection from ".";
import Account from "../models/account";

class AccountSql extends Connection {
    private data: Account;
    constructor(data: Account) {
        super();
        this.data = data
    }

    public async createAccount() {
        const query = `INSERT INTO accounts(owner, agency, agency_dv, acct_number, acct_number_dv, balance)
            VALUES('${this.data.owner}', '${this.data.agency}', '${this.data.agency_dv}', '${this.data.acct_number}', '${this.data.acct_number_dv}', '0') RETURNING id, agency, agency_dv, acct_number, acct_number_dv`;
            return (await this.db.query(query)).rows[0]
    }

    public async idAccount(): Promise<string|void> {
        const query = `SELECT id FROM accounts 
            WHERE agency='${this.data.agency}' AND agency_dv='${this.data.agency_dv}' AND acct_number='${this.data.acct_number}' AND acct_number_dv='${this.data.acct_number_dv}'`
        const response =  (await this.db.query(query)).rows[0];    
        if(response) return response.id;
    }

    public async getAllFieldsWithCpf(cpf:string): Promise<any> {
        let cpfTemp = cpf;
        cpfTemp = cpfTemp.replaceAll(".", "");
        cpfTemp = cpfTemp.replace("-", "");
        
        const resultClient = (await this.db.query(`SELECT name, id FROM clients WHERE cpf='${cpfTemp}'`)).rows[0];
        if(resultClient === undefined) throw "CPF inexists";
        const result = (await this.db.query(`SELECT "id", "owner", "agency", "agency_dv", "acct_number", "acct_number_dv" FROM accounts WHERE owner='${resultClient.id}'`)).rows[0]
        result.name = resultClient.name
        result.idUser = resultClient.id
        return result;
    }

    public async getBalance(id: string): Promise<string>{
        const balance =  (await this.db.query(`SELECT balance FROM accounts WHERE id='${id}'`)).rows[0].balance;
        return balance;
    }
}
export default AccountSql;