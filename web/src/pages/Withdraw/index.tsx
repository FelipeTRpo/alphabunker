import { Navbar } from "../Home/Navbar"
import { Withdrawcomp } from "./Withdrawcomp";
export const Withdraw = () => {
  async function handleWithdraw() { /*TODO*/ }
  return (
    <>
      <Navbar money= {String(12345678.12)}/>
      <Withdrawcomp />
    </>
  );
};
