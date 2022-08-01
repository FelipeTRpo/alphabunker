import { Navbar } from "../Home/Navbar"
import { Withdrawcomp } from "./Withdrawcomp";
export const Withdraw = () => {
  async function handleWithdraw() { /*TODO*/ }
  return (
    <>
      <Navbar name='Felipe Bueno' agency = '9483-4' account='15499-5' money= {String(12345678.12)}/>
      <Withdrawcomp />
    </>
  );
};
