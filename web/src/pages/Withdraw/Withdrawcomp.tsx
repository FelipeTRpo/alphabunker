import { useState,useEffect } from 'react';
import withdrawgold from '../../assets/imgs/withdrawgold.svg';
import { withdraw } from '../../components/utils/requisitions';
import { useUser } from '../../providers/account';
import { Modalconfirmation } from "../../components/Modalconfirmation";

export const Withdrawcomp = () => {
  const state = useUser().state;
  const [value, setValue] = useState('');
  useEffect( () => {document.body.addEventListener('click', openModal)} , [])
  const handleWithdraw = async() => {
    const response = await withdraw(state.agency, state.agency_dv, state.acct_number, state.acct_number_dv, value);
  }
  
  function openModal(ev:MouseEvent){
    const parser = ev.target as any
    if(!parser.dataset.openmodal){
        return
    }
    document.getElementById('confirmation-modal')?.classList.remove('hidden');
    document.getElementById('confirmation-modal')?.classList.add('flex');
  }
  return (<>
    <div className="flex flex-col justify-center items-center h-full">
      <div className=" flex flex-col items-center px-3.5 py-3 mt-6 bg-white rounded-xl h-fit w-3/4 gap-2">
        <h1 className="text-xl font-medium font-brand text-header-gold flex justify-start gap-2 self-start">
          <img className="" src={withdrawgold} alt="" /> Saque
        </h1>
        <h2 className="relative right-14 font-medium font-brand  text-paragraph-dark">
          Dados para saque
        </h2>
        <div className="flex items-center justify-start gap-7 ">
          <div className=" w-[110px] flex flex-col items-start justify-center ">
            <input
              className="w-full font-medium font-brand p-2 pl-2 rounded-md text-input-text  bg-input-readonly "
              type="text"
              placeholder={state.agency + "-" + state.agency_dv}
              disabled
            />
            <label className="text-xs text-input-inactive">Agência</label>
          </div>
          <div className="w-[110px] flex flex-col items-start justify-center">
            <input
              className="w-full placeholder:font-medium p-2 pl-2  text-input-text  rounded-md bg-input-readonly"
              type="text"
              placeholder={state.acct_number + "-" + state.acct_number_dv}
              disabled
            />
            <label className=" text-input-inactive  text-xs">Conta</label>
          </div>
        </div>
        <input
          className=" placeholder:text-input-placeholder text-input-text border border-input-border bg-input-base mt-1 text-base px-2 py-1 rounded w-full"
          type="text"
          placeholder="Valor"
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          className="placeholder:text-input-placeholder text-input-text border border-input-border bg-input-base text-base  px-2 py-1 rounded w-full mt-4"
          type="text"
          placeholder="Senha"
        />

        <button className="bg-btn-primary-base font-brand mt-4 hover:bg-btn-primary-hover text-btn-text rounded-md w-[250px] h-[40px]" data-openmodal='true' >
          Sacar
        </button>
      </div>
    </div>
    <Modalconfirmation callback={handleWithdraw}/>
    </>
  );
};
