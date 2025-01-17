import { Children, ReactElement } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { login } from '../components/utils/requisitions';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';
import { Proof } from '../pages/Proof';
import { Register } from '../pages/Register';

import { Transaction } from '../pages/Transaction';
import { Transfer } from '../pages/Transfer';
import { Withdraw } from '../pages/Withdraw';
import { useUser } from '../providers/account';

interface PrivateTypes {
  children: ReactElement;
}

const Private = ({ children }: PrivateTypes) => {
  const { state, setState } = useUser();

  if (!state.idUser) {
    const cpf = sessionStorage.getItem('cpf_account');
    if (cpf != undefined) {
      const setNewAccount = (obj: any) => {
        setState({
          name: obj.name,
          idUser: obj.idUser,
          id: obj.id,
          acct_number: obj.acct_number,
          acct_number_dv: obj.acct_number_dv,
          agency: obj.agency,
          agency_dv: obj.agency_dv,
        });
      };

      const handlerLogin = async () => {
        const reponse = await login(cpf);
        if (reponse.name === 'AxiosError') return;
        setNewAccount(reponse);
        sessionStorage.setItem('cpf_account', cpf);
        return children;
      };
      handlerLogin();
    }
    if(state.idUser) return children;
    return <Navigate to="/login" />;
  }else {
    return children;
  }

};

const Public = ({ children }: PrivateTypes) => {
  const state = useUser().state;

  if (state.idUser) {
    return <Navigate to="/home" />;
  }
  return children;
};

export const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route
      path="/login"
      element={
        <Public>
          <Login />
        </Public>
      }
    />
    <Route
      path="/register"
      element={
        <Public>
          <Register />
        </Public>
      }
    />
    <Route
      path="/home"
      element={
        <Private>
          <Home />
        </Private>
      }
    />
    <Route
      path="/transaction"
      element={
        <Private>
          <Transaction />
        </Private>
      }
    />
    <Route
      path="/transfer"
      element={
        <Private>
          <Transfer />
        </Private>
      }
    />
    <Route
      path="/withdraw"
      element={
        <Private>
          <Withdraw />
        </Private>
      }
    />
    <Route
      path="/proof"
      element={
        <Private>
          <Proof />
        </Private>
      }
    />
    <Route
      path="/profile"
      element={
        <Private>
          <Profile />
        </Private>
      }
    />
  </Routes>
);
