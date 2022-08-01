import {useUser} from "../../providers/account";
import { Navbar } from "./Navbar";

export const Home = () => {
  async function handleHome() { /*TODO*/ }
  const state = useUser().state
  
  const apagar = () => {
    console.log(state)
  }
  return (
    <>
      <Navbar name='Felipe Bueno'/>
      <h1 onClick={apagar} >ROUTE Home</h1>
    </>
  );
};
