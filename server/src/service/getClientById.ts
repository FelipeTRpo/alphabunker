import Client from "../models/client"
import { resError, resSuccess } from "../models/response";
import ClientSql from "../repository/client"

export async function GetClientById(id: string) {
    try{
        if (!id) throw "id is blank"
        return { code: 200, data: await new ClientSql({} as Client).getById(id)} as resSuccess;
    }catch(err) {
        throw {
            code: 400,
            msg: err
        } as resError;
    }
}