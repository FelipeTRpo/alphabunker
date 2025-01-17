import { Router } from "express"
import CreateAccount from "../controller/create-account";
import Deposit from "../controller/deposit";
import Transfer from "../controller/transfer";
import Withdrawals from "../controller/withdrawals";
import Statement from "../controller/statement";
import GetAccount from "../controller/account-with-cpf";
import StatementById from "../controller/statementBy";
import GetClient from "../controller/getClient";

const router = Router();

router.post("/account", new CreateAccount().handle.bind(new CreateAccount()));

router.post("/deposit", new Deposit().handle.bind(new Deposit()));

router.post("/withdrawals", new Withdrawals().handle.bind(new Withdrawals()));

router.post("/transfer", new Transfer().handle.bind(new Transfer()));

router.post("/statement", new Statement().handle.bind(new Statement()));

router.get("/get-fields/:cpf", new GetAccount().handle.bind(new GetAccount()));

router.get("/get-statement/:id/:idOwner", new StatementById().handle.bind(new StatementById()));

router.get("/get-client/:id", new GetClient().handle.bind(new GetClient()));


export default router