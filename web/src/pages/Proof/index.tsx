import { useTransaction } from "../../providers/transaction";
import { Navbar } from "../Home/Navbar";
import { ProofOfPurchase } from "../../components/transaction";
import { useEffect, useState } from "react";
import { useUser } from "../../providers/account";
import { getStatement } from "../../components/utils/requisitions";

export const Proof = () => {
    const transaction = useTransaction().state;
    const state = useUser().state
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([] as any);

    console.log(transaction)
    useEffect(() => {
        getStatement(state.agency, state.agency_dv, state.acct_number, state.acct_number_dv)
            .then(res => {
                setIsLoaded(true);
                setItems(res);
            })
    }, [])

    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <Navbar money={items.balance} />
                <ProofOfPurchase agency={`${transaction.destinatary_agency}-${transaction.destinatary_agency_dv}`} account={`${transaction.destinatary_number_account}-${transaction["destinatary_number_account-dv"]}`} datetime={transaction.date_time} name={transaction["destinatary_name"]} transactionType={transaction.name} value={transaction.value} />
            </>)

    }
}
