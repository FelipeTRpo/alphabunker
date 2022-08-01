import { Navbar } from "../Home/Navbar"
import { Transfercomp } from "./Transfercomp";
export const Transfer = () => {
  async function handleTransfer() { /*TODO*/ }
  return (
    <>
      <Navbar name='Felipe Bueno' agency = '9483-4' account='15499-5' money= {String(12345678.12)}/>
      <Transfercomp />
    </>
  );
};
