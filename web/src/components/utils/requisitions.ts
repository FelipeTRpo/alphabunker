import { api } from "../../libs/api";

export async function login(cpf: string) {
    try {
        const result = (await api.get(`/get-fields/${cpf}`))
        if (result.status !== 200) throw "in route: account"
        return result.data
    } catch (e) {
        return e
    }
}

export async function createAccount(cpf: string, email: string, birth_date: string, name: string) {
    try {
        const result = (await api.post("/account", {
            cpf,
            email,
            birth_date,
            name
        }))
        if (result.status !== 201) throw "in route: account"

        return result.data
    } catch (e) {
        return e
    }
}

export async function getStatement(agency: string, agency_dv: string, acct_number: string, acct_number_dv: string) {
    try {
        const result = (await api.post("/statement", {
            agency,
            agency_dv,
            acct_number,
            acct_number_dv
        }))
        if (result.status !== 200) throw "error in route: statement"

        return result.data
    } catch (e) {
        return e
    }
}

export async function createTransfer(agency: string, agency_dv: string, acct_number: string, acct_number_dv: string, value: string, id: string) {
    try {
        const result = (await api.post("/transfer", {
            agency,
            agency_dv,
            acct_number,
            acct_number_dv,
            value,
            id
        }))
        if (result.status !== 200) throw "error in route: transfer"

        return result.data
    } catch (e) {
        return e
    }
}

export async function deposit(agency:string, agency_dv:string, acct_number:string, acct_number_dv:string, value: string) {
    try {
        const result = (await api.post("/deposit", {
            agency,
            agency_dv,
            acct_number,
            acct_number_dv,
            value
        }))
        if (result.status !== 200) throw "error in route: deposit"

        return result.data
    } catch (e) {
        return e
    }
}

export async function withdraw(agency:string, agency_dv:string, acct_number:string, acct_number_dv:string, value: string) {
    try {
        const result = (await api.post("/withdrawals", {
            agency,
            agency_dv,
            acct_number,
            acct_number_dv,
            value
        }))
        if (result.status !== 200) throw "error in route: withdrawals"

        return result.data
    } catch (e) {
        return e
    }    
}