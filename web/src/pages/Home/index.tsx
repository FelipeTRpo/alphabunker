import { useUser } from "../../providers/account";
import { Navbar } from "./Navbar";
import { Extractcomp } from "../../components/Extractcomp";
import { getStatement } from "../../components/utils/requisitions";
import { useEffect, useState } from "react";


export const Home = () => {
  const state = useUser().state
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([] as any);

  useEffect(() => {
    getStatement(state.agency, state.agency_dv, state.acct_number, state.acct_number_dv)
      .then(res => {
        setIsLoaded(true);
        setItems(res);
      })
  }, [])

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else{
    return (
      <>
        <Navbar money={items.balance} />
        <Extractcomp obj={items}/>
      </>
    );
  }
};
