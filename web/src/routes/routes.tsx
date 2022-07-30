import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';

import { Transaction } from '../pages/Transaction';
import { Transfer } from '../pages/Transfer';
import { Withdraw } from '../pages/Withdraw';

export const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/transaction" element={<Transaction />} />
    <Route path="/transfer" element={<Transfer />} />
    <Route path="/withdraw" element={<Withdraw />} />
  </Routes>
);
