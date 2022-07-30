import Connection from ".";
import Transaction from "../models/transaction";

class WithdrawalsSql extends Connection {
    private data: Transaction;
    constructor(data: Transaction){
        super();
        this.data = data;
    }

    public async withdrawals() {
        await this.updateBalance();
        return await this.insertTransaction()
    }

    private async insertTransaction() {
        const query = `INSERT INTO transactions(value, rate, total, fgk_type, fgk_account_from) 
            VALUES('${this.data.value}', '${this.data.rate}', '${this.data.total}', '${this.data.fgk_type}', '${this.data.fgk_account_from}') RETURNING value, rate, total`
        return (await this.db.query(query)).rows[0];
    }

    private async updateBalance() {
        const query = `UPDATE accounts SET balance = balance-${this.data.total} WHERE id='${this.data.fgk_account_from}'`
        await this.db.query(query)
    }
}

export default WithdrawalsSql;