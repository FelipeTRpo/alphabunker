import { useState, useEffect, useContext } from 'react';
import AlphaBunker from '../../assets/imgs/AlphaBunker.svg';
import { login } from '../../components/utils/requisitions';
import UserContext from '../../providers/account';

export const Home = () => {

  const {setState, state} = useContext(UserContext)
  const [cpf, setCpf] = useState('');
  const [] = useState('');
  const buttonHandler = async () => { 
    const reponse = await login(cpf)
    if(reponse.name === "AxiosError") return 
    setNewAccount(reponse)
  }

  const setNewAccount = (obj: any) => {
    setState({
      id: obj.id,
      acct_number: obj.acct_number,
      acct_number_dv: obj.acct_number_dv,
      agency: obj.agency,
      agency_dv: obj.agency_dv
    }
    )
  }
  function test() {
    console.log(state)
  }
  
  return (
    <div className="w-full h-full bg-body-light-200 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <img src={AlphaBunker}></img>
        <h1 className="text-xl font-medium font-brand text-brand-base">
          Alpha Bunker
        </h1>
      </div>
      <h2 className="text-xl my-14 font-medium font-brand text-paragraph-dark">
        Login
      </h2>
      <div className="flex flex-col items-center p-2.5 gap-5">
        <input
          className="w-[250px] h-[33px] rounded-md text-paragraph-dark"
          type="text"
          placeholder="Digite seu CPF"
          onChange={(e) => setCpf(e.target.value)}
        />
        <input
          className="w-[250px] h-[33px] rounded-md text-paragraph-dark"
          type="password"
          placeholder="Digite sua senha"
        />
        <button onClick={buttonHandler} className="bg-brand-base font-brand hover:bg-btn-primary-hover text-btn-text rounded-md w-[250px] h-[40px]">
          Entrar
        </button>
        <p className="text-sm font-brand text-paragraph-dark" onClick={test}>Crie sua conta</p>
      </div>
    </div>
  );
};
