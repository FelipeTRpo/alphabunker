import './styles/global.css';
import { Home } from './pages/Home/index';
import { Router } from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './providers/account'

export const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserContextProvider>
  )
};
