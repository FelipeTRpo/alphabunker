import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile';
import { Transaction } from '../pages/Transaction';
import { Transfer } from '../pages/Transfer';
import { Withdraw } from '../pages/Withdraw';


export const Router = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={ <Home /> } />
    <Route path="/register" element={ <Register /> } />
    <Route path="/profile" element={ <Profile /> } />
    <Route path="/transaction" element={ <Transaction /> } />
    <Route path="/transfer" element={ <Transfer /> } />
    <Route path="/withdraw" element={ <Withdraw /> } />
    
    </Routes>
  </BrowserRouter>
)