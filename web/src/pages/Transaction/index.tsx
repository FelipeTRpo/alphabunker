import { Navbar } from "../Home/Navbar"
import { Transactioncomp } from "./Transactioncomp";
export const Transaction = () => {
  async function handleTransaction() { /*TODO*/ }
  return (
    <>
      <Navbar name='Felipe Bueno' agency = '9483-4' account='15499-5' money= {String(12345678.12)}/>
      <Transactioncomp />
    </>
  );
};
