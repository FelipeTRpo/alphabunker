import { Navbar } from "../Home/Navbar"
import { Transfercomp } from "./Transfercomp";
export const Transfer = () => {
  async function handleTransfer() { /*TODO*/ }
  return (
    <>
      <Navbar money= {String(12345678.12)}/>
      <Transfercomp />
    </>
  );
};
