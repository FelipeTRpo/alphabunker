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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccountWithCpf = exports.AccountGetService = void 0;
const account_1 = __importDefault(require("../../repository/account"));
class AccountGetService {
    constructor(account) {
        this.account = account;
    }
    getIdAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield new account_1.default(this.account).idAccount();
            if (id)
                return id.toString();
            throw "ACCOUNT NOT EXISTS ";
        });
    }
    balanceSufficient(value, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const balance = parseFloat(yield new account_1.default(this.account).getBalance(id));
            return balance >= value;
        });
    }
}
exports.AccountGetService = AccountGetService;
function GetAccountWithCpf(cpf) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allFieds = yield new account_1.default({}).getAllFieldsWithCpf(cpf);
            if (allFieds.length === 0)
                throw "cpf inexists";
            return { code: 200, data: allFieds };
        }
        catch (e) {
            if (typeof e === "string") {
                throw { code: 404, msg: e };
            }
            throw e;
        }
    });
}
exports.GetAccountWithCpf = GetAccountWithCpf;
