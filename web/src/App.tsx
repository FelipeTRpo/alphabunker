import './styles/global.css';
import { Router } from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './providers/account'
import { TransactionContextProvider } from './providers/transaction';

export const App = () => {
  return (
    <UserContextProvider>
      <TransactionContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </TransactionContextProvider>
    </UserContextProvider>
  )
};
