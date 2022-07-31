import { ReactElement, useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

import { Transaction } from '../pages/Transaction';
import { Transfer } from '../pages/Transfer';
import { Withdraw } from '../pages/Withdraw';
import UserContext from '../providers/account';

interface PrivateTypes {
  children: ReactElement;
}

const Private = ({ children }: PrivateTypes) => {
  const { state } = useContext(UserContext);

  if (state.id === "") {
    return <Navigate to="/login" />;
  }

  return children;
};

const Public = ({ children }: PrivateTypes) => {
  const { state } = useContext(UserContext);

  if (state.id != "") {
    return <Navigate to="/home" />;
  }
  return children;
};

export const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/login" element={
      <Public>
        <Login />
      </Public>
    } />
    <Route path="/register" element={
    <Public>
      <Register />
    </Public>
    } />
    <Route path="/home" element={
    <Private>
      <Home />
    </Private>
    } />
    <Route path="/transaction" element={
    <Private>
      <Transaction />
    </Private>
    } />
    <Route path="/transfer" element={
    <Private>
      <Transfer />
    </Private>
    } />
    <Route path="/withdraw" element={
    <Private>
      <Withdraw />
    </Private>
    } />
  </Routes>
);
