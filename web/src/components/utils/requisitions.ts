import { api } from "../../libs/api";

export async function login(cpf:string) {
    try {
        const result = (await api.get(`/get-fields/${cpf}`))
        if(result.status !== 200) throw "in route: account"
        return result.data
    }catch(e) {
        return e
    }    
}

export async function createAccount(cpf: string, email: string, birth_date: string, name:string) {
    try {
        const result = (await api.post("/account", {
            cpf, 
            email, 
            birth_date,
            name
        }))
        if(result.status !== 201) throw "in route: account"

        return result.data
    }catch(e) {
        return e
    }
}

export async function createStatement(agency: number, agency_dv: number, acct_number: number, acct_dv: number) {
    try {
        const result = (await api.post("/statement", {
            agency, 
            agency_dv,
            acct_number,
            acct_dv
        }))
        if(result.status !== 201) throw "in route: statement"

        return result.data
    }catch(e) {
        return e
    }
}