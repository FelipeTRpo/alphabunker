import { useContext } from "react";
import UserContext from "../../providers/account";

export const Home = () => {
  async function handleHome() { /*TODO*/ }
  const {state, setState} = useContext(UserContext)
  
  const apagar = () => {
    console.log(state)
  }
  return (
    <>
      <h1 onClick={apagar} style={{color: "red"}}>ROUTE Home</h1>
    </>
  );
};
