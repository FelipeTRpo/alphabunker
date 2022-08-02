import { createContext, ReactNode, useContext, useState } from "react";


type TransactionType = {
    "id": string,
    "date_time": string,
    "value": string,
    "total": string,
    "name": string,
    "destinatary_agency": string,
    "destinatary_agency_dv": string,
    "destinatary_number_account": string,
    "destinatary_number_account-dv": string
};

const DEFAULT_VALUE = {
    state: {
        "id": "",
        "date_time": "",
        "value": "",
        "total": "",
        "name": "",
        "destinatary_agency": "",
        "destinatary_agency_dv": "",
        "destinatary_number_account": "",
        "destinatary_number_account-dv": ""
    },
    setState: () => { },
};

type AccountProviderTypes = {
    children: ReactNode;
}


type PropsTransactionContext = {
    state: TransactionType;
    setState: React.Dispatch<React.SetStateAction<TransactionType>>;
};

const TransactionContext = createContext<PropsTransactionContext>(DEFAULT_VALUE);

const TransactionContextProvider = ({ children }: AccountProviderTypes) => {
    const [state, setState] = useState(DEFAULT_VALUE.state);
    return (
        <TransactionContext.Provider
            value={{
                state,
                setState,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};

export { TransactionContextProvider };
export const useTransaction = () => useContext(TransactionContext);