import { Navbar } from "../Home/Navbar"
import { DepositComp } from "./Withdrawcomp";
export const Withdraw = () => {
  async function handleWithdraw() { /*TODO*/ }
  return (
    <>
      <Navbar money= {String(12345678.12)}/>
      <DepositComp />
    </>
  );
};
