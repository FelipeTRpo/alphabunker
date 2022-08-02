import transfergold from '../../assets/imgs/transfergold.svg';

export const Transactioncomp = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full ">
      <div className=" flex flex-col items-center px-3.5 py-3 bg-white p rounded-xl mt-6 h-fit w-3/4 gap-2">
        <h1 className="text-xl font-medium font-brand text-header-gold flex justify-start gap-2 self-start pl-3">
          <img className="" src={transfergold} alt="" />
          Transferencia
        </h1>
        <h2 className="relative right-24 font-medium font-brand  text-paragraph-dark">
          Origem
        </h2>
        <div className="flex items-center justify-start gap-7 ">
          <div className=" w-[110px] flex flex-col items-start justify-center ">
            <input
              className="w-full font-medium font-brand p-2 pl-2 rounded-md text-input-text  bg-input-readonly "
              type="text"
              placeholder="1510-5"
            />
            <label className="text-xs text-input-inactive">Agência</label>
          </div>
          <div className="w-[110px] flex flex-col items-start justify-center">
            <input
              className="w-full placeholder:font-medium p-2 pl-2  text-input-text  rounded-md bg-input-readonly"
              type="text"
              placeholder="95785-3"
            />
            <label className=" text-input-inactive  text-xs">Conta</label>
          </div>
        </div>
        <h3 className="relative right-24 font-medium font-brand  text-paragraph-dark">
          Destino
        </h3>
        <div className="flex items-center justify-start gap-7 w-full">
          <div className="w-[72px] h-[51px] flex flex-col items-start justify-center">
            <input
              className="placeholder:font-medium p-2 pl-2 text-input-text  rounded-md bg-input-base border border-input-border placeholder:text-input-placeholder w-full"
              type="text"
              placeholder="1510-5"
            />
            <label className="  text-input-inactive text-xs">Agência</label>
          </div>
          <div className="w-[86px] flex flex-col items-start justify-center">
            <input
              className="placeholder:font-medium placeholder:text-input-placeholder text-input-text  p-2 pl-2 rounded-md bg-input-base border border-input-border w-full"
              type="text"
              placeholder="95785-3"
            />
            <label className=" text-input-inactive text-xs">Conta</label>
          </div>
        </div>
        <input
          className=" placeholder:text-input-placeholder text-input-text border border-input-border bg-input-base mt-1 text-base px-2 py-1 rounded w-full"
          type="text"
          placeholder="Valor"
        />
        <input
          className="placeholder:text-input-placeholder text-input-text border border-input-border bg-input-base text-base font-regular px-2 py-1 rounded w-full mt-4"
          type="text"
          placeholder="Senha"
        />

        <button className="bg-btn-primary-base font-brand hover:bg-btn-primary-hover text-btn-text rounded-md w-[250px] h-[40px]">
          Transferir
        </button>
      </div>
    </div>
  );
};
