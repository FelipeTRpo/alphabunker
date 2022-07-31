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
const _1 = __importDefault(require("."));
class DepositSql extends _1.default {
    constructor(data) {
        super();
        this.data = data;
    }
    deposit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateBalance();
            return yield this.insertTransaction();
        });
    }
    insertTransaction() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO transactions(value, rate, total, fgk_type, fgk_account_from) 
            VALUES('${this.data.value}', '${this.data.rate}', '${this.data.total}', '${this.data.fgk_type}', '${this.data.fgk_account_from}') RETURNING value, rate, total`;
            return (yield this.db.query(query)).rows[0];
        });
    }
    updateBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `UPDATE accounts SET balance = balance+${this.data.total} WHERE id='${this.data.fgk_account_from}'`;
            yield this.db.query(query);
        });
    }
}
exports.default = DepositSql;
