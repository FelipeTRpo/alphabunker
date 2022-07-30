import AlphaBunker from '../../assets/imgs/AlphaBunker.svg';

export const Register = () => {
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
        />
        <input
          className="w-[250px] h-[33px] rounded-md text-paragraph-dark"
          type="text"
          placeholder="Digite sua data de nascimento"
        />
        <input
          className="w-[250px] h-[33px] rounded-md text-paragraph-dark"
          type="text"
          placeholder="Digite seu CPF"
        />
        <input
          className="w-[250px] h-[33px] rounded-md text-paragraph-dark"
          type="text"
          placeholder="Digite seu Email"
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
      <button className="bg-brand-base font-brand hover:bg-btn-primary-hover text-btn-text rounded-md w-[250px] h-[40px] mt-6">
        Cadastrar
      </button>
      <p className="text-sm font-brand text-paragraph-dark">Entrar</p>
    </div>
  );
};
