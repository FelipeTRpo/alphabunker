import {useUser} from "../../providers/account";

export const Home = () => {
  async function handleHome() { /*TODO*/ }
  const state = useUser().state
  
  const apagar = () => {
    console.log(state)
  }
  return (
    <>
      <h1 onClick={apagar} style={{color: "red"}}>ROUTE Home</h1>
    </>
  );
};
