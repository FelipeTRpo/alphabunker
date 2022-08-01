import {useUser} from "../../providers/account";
import { Navbar } from "./Navbar";
import { Extractcomp } from "../Extract/Extractcomp";

export const Home = () => {
  async function handleHome() { /*TODO*/ }
  const state = useUser().state
  
  const apagar = () => {
    console.log(state)
  }
  return (
    <>
      <Navbar name='Felipe Bueno' agency = '9483-4' account='15499-5' money= {String(12345678.12)}/>
      <Extractcomp />
    </>
  );
};
