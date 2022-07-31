import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlphaBunker from '../../assets/imgs/AlphaBunker.svg';
import { createAccount } from '../../components/utils/requisitions';
import { useUser } from '../../providers/account';
import { Input_User } from './verification_input';

export const Register = () => {
  const navigate = useNavigate();

  const {setState} = useUser();

  const [name, setName] = useState('');
  const [birth_date, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

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

  const handleRegister = async () => {
    const hasError = new Input_User(name, birth_date, cpf, email).hasIntegrity();
    if(hasError.length !== 0) return alert(...hasError);
    const response = await createAccount(cpf, email, birth_date, name);
    if(response.name === "AxiosError") return 
    console.log(response)
    setNewAccount(response)
    navigate("/home")
  }

  return (
    <div className="w-full h-full bg-body-light-200 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <img src={AlphaBunker}></img>
        <h1 className="text-xl font-medium font-brand text-brand-base">
          Alpha Bunker
        </h1>
      </div>
      <h2 className="text-xl mt-2 font-medium font-brand text-paragraph-dark">
        Crie sua Conta
      </h2>
      <div className="flex flex-col items-center p-2.5 gap-7">
        <input
          className="mt-7 w-[250px] h-[33px] rounded-md text-paragraph-dark"
          type="text"
          placeholder="Digite seu Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-[250px] h-[33px] rounded-md text-paragraph-dark"
          type="date"
          placeholder="Digite sua data de nascimento"
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <input
          className="w-[250px] h-[33px] rounded-md text-paragraph-dark"
          type="text"
          placeholder="Digite seu CPF"
          onChange={(e) => setCpf(e.target.value)}
        />
        <input
          className="w-[250px] h-[33px] rounded-md text-paragraph-dark"
          type="text"
          placeholder="Digite seu Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-[250px] h-[33px] rounded-md text-paragraph-dark"
          type="text"
          placeholder="Digite sua senha"
        />
        <input
          className="w-[250px] h-[33px] rounded-md text-paragraph-dark"
          type="text"
          placeholder="Confirme sua senha"
        />
      </div>
      <button className="bg-brand-base font-brand hover:bg-btn-primary-hover text-btn-text rounded-md w-[250px] h-[40px] mt-6" onClick={handleRegister}>
        Cadastrar
      </button>
      <p className="text-sm font-brand text-paragraph-dark" onClick={() => navigate("/login", { replace: true })}>Entrar</p>
    </div>
  );
};
