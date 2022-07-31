import React, { createContext, ReactNode, useContext, useState } from "react";

type UserType = {
    id: string;
    agency: string;
    agency_dv: string;
    acct_number: string;
    acct_number_dv: string;
};

type PropsUserContext = {
    state: UserType;
    setState: React.Dispatch<React.SetStateAction<UserType>>;
};

type AccountProviderTypes = {
    children: ReactNode;
}

const DEFAULT_VALUE = {
    state: {
        id: "",
        agency: "",
        agency_dv: "",
        acct_number: "",
        acct_number_dv: ""
    },
    setState: () => { },
};


const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const UserContextProvider = ({ children }: AccountProviderTypes) => {
    const [state, setState] = useState(DEFAULT_VALUE.state);
    return (
        <UserContext.Provider
            value={{
                state,
                setState,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContextProvider };
export const useUser = () => useContext(UserContext);