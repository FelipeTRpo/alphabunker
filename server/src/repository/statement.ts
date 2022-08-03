import Connection from ".";
import Account from "../models/account";

class StatementSql extends Connection {
    private account: Account;
    constructor(data: Account){
        super();
        this.account = data;
    }

    public async get(): Promise<object> {
        return await this.query();
    }

    public async getById(idOwner:string, idTransaction:string): Promise<object> {
        const query = `
        SELECT transactions.id, date_time, value, rate, total, type.name, clients.name AS destinatary_name, coalesce(accounts.agency, '') AS "destinatary_agency", coalesce(accounts.agency_dv, '') AS "destinatary_agency_dv", coalesce(accounts.acct_number, '') AS "destinatary_number_account", coalesce(acct_number_dv, '') AS "destinatary_number_account-dv"  FROM transactions
        INNER JOIN types_transactions AS type ON type.id=fgk_type LEFT JOIN accounts ON transactions.fgk_account_to = accounts.id LEFT JOIN clients ON clients.id = accounts.owner WHERE fgk_account_from='${idOwner}' AND transactions.id='${idTransaction}'
        `
        const queryTransferTo = `
        SELECT transactions.id, date_time, value, rate, total, type.name, clients.name AS destinatary_name, coalesce(accounts.agency, '') AS "destinatary_agency", coalesce(accounts.agency_dv, '') AS "destinatary_agency_dv", coalesce(accounts.acct_number, '') AS "destinatary_number_account", coalesce(acct_number_dv, '') AS "destinatary_number_account-dv"  FROM transactions
        INNER JOIN types_transactions AS type ON type.id=fgk_type INNER JOIN accounts ON transactions.fgk_account_from = accounts.id INNER JOIN clients ON clients.id = accounts.owner WHERE fgk_account_to='${idOwner}' AND transactions.id='${idTransaction}'`
        const firstRequest =  (await this.db.query(query)).rows[0]
        if(firstRequest) return firstRequest
        const secondRequest = (await this.db.query(queryTransferTo)).rows[0];
        if(secondRequest) {
            secondRequest.name = "TRANSFER_TO";
            return secondRequest;
        }
        
        throw "não existe com esse id"
    }

    private async query(): Promise<object>{
        const query = `
        SELECT transactions.id, date_time, value, rate, total, type.name, clients.name AS destinatary_name, coalesce(accounts.agency, '') AS "destinatary_agency", coalesce(accounts.agency_dv, '') AS "destinatary_agency_dv", coalesce(accounts.acct_number, '') AS "destinatary_number_account", coalesce(acct_number_dv, '') AS "destinatary_number_account-dv"  FROM transactions
        INNER JOIN types_transactions AS type ON type.id=fgk_type LEFT JOIN accounts ON transactions.fgk_account_to = accounts.id LEFT JOIN clients ON clients.id = accounts.owner WHERE fgk_account_from='${this.account.id}'
        `
        const queryTransferTo = `
        SELECT transactions.id, date_time, value, rate, total, type.name, clients.name AS destinatary_name, coalesce(accounts.agency, '') AS "destinatary_agency", coalesce(accounts.agency_dv, '') AS "destinatary_agency_dv", coalesce(accounts.acct_number, '') AS "destinatary_number_account", coalesce(acct_number_dv, '') AS "destinatary_number_account-dv"  FROM transactions
        INNER JOIN types_transactions AS type ON type.id=fgk_type INNER JOIN accounts ON transactions.fgk_account_from = accounts.id INNER JOIN clients ON clients.id = accounts.owner WHERE fgk_account_to='${this.account.id}'`
        const queryBalance = `
        SELECT balance FROM accounts WHERE id='${this.account.id}'
        `

        const trasfersTo = (await this.db.query(queryTransferTo)).rows.map(elem => {
            elem.name = "TRANSFER_TO"
            return elem
        })
        const transfers = (await this.db.query(query)).rows
        transfers.push(...trasfersTo)
        transfers.sort((e0, e1) => {
            if(e0.date_time >= e1.date_time){
                return 1
            }
            return -1
        })
        return { 
            statement: transfers,
            balance: (await this.db.query(queryBalance)).rows[0].balance
        };
    }
}

export default StatementSql;