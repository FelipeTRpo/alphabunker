"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_get_1 = require("../service/account/account-get");
class GetAccount {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, account_get_1.GetAccountWithCpf)(req.params.cpf);
                res.status(response.code);
                res.send(response.data);
            }
            catch (err) {
                console.log(err);
                const _resError = err;
                if (_resError.code && _resError.code)
                    res.status(_resError.code).send(_resError);
                else
                    res.status(500).send("ERROR IN API");
            }
        });
    }
}
exports.default = GetAccount;
