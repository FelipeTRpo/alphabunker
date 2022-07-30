import AlphaBunker from '../../assets/imgs/AlphaBunker.svg';

export const Home = () => {
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
          className="w-[250px] h-[33px] rounded-md"
          type="text"
          placeholder="Digite seu CPF"
        />
        <input
          className="w-[250px] h-[33px] rounded-md"
          type="text"
          placeholder="Digite sua senha"
        />
        <button className="bg-brand-base font-brand hover:bg-btn-primary-hover text-btn-text rounded-md w-[250px] h-[40px]">
          Entrar
        </button>
        <p className="text-sm font-brand">Crie sua conta</p>
      </div>
    </div>
  );
};
