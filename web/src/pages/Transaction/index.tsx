import { useEffect, useState } from "react";
import { getStatement } from "../../components/utils/requisitions";
import { useUser } from "../../providers/account";
import { Navbar } from "../Home/Navbar"
import { Transactioncomp } from "./Transactioncomp";
export const Transaction = () => {
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
        <Transactioncomp />
      </>
    );
  }
};
