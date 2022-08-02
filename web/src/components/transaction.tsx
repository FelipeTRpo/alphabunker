/*
<ProofOfPurchase transactionType={ /Tipo da transaçaoo /} datetime = {/Data e hora da transaçao / } name = {/Nome que será mostrado, na transferencia enviada o destinatario e transferencia recebida quem recebeu / } agency = {/igual o nome, só q agencia / } account = {/igual o nome, só q account / } value = {/o valor q vai ser mostrado / } />
*/

import header from '../assets/imgs/header.svg';
type ProofProps = {
  transactionType: string,
  datetime: string,
  name: string,
  agency: string,
  account: string,
  value: string,
}
export const ProofOfPurchase = (props: ProofProps) => {
  if (props.transactionType === 'TRANSFER') {
    return (
      <div className="flex flex-col justify-center items-center h-full ">
        <div className=" flex flex-col items-center px-3.5 py-3 bg-white p rounded-xl mt-6 h-fit w-3/4 gap-2">
          <h1 className="text-xl font-medium font-brand text-header-gold flex justify-start gap-2 self-start pl-3">
            <img className="" src={header} alt="" />
          </h1>
          <div className="w-[250px] h-[191px] rounded p-1 mt-3 bg-body-light-100 flex flex-col justify-around">
            <div className="flex flex-col">
              <h2 className="text-xs font-medium font-brand  text-input-placeholder">
                Tipo: Transferência - Enviada
              </h2>
              <span className=" text-[#A2A2A2] font-brand  mt-2 text-sm ml-1">
                Data: {props.datetime}
              </span>
            </div>
            <div>
              <h3 className="text-xs font-medium font-brand  text-input-placeholder">
                Dados de destino:
              </h3>
              <div className="flex flex-col">
                <span className=" text-[#A2A2A2] font-brand  text-sm ml-1">
                  Nome: {props.name}
                </span>
                <span className=" text-[#A2A2A2] font-brand  text-sm ml-1">
                  Agência: {props.agency}
                </span>
                <span className=" text-[#A2A2A2] font-brand  text-sm ml-1">
                  Conta: {props.account}
                </span>
              </div>
            </div>

            <div className="flex justify-between w-full">
              <span className="text-base font-medium font-brand  text-input-placeholder">
                Valor
              </span>
              <span className="text-base font-medium font-brand  text-input-error">
                {props.value}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.transactionType === 'WITHDRAWALS') {
    return (
      <div className="flex flex-col justify-center items-center h-full ">
        <div className=" flex flex-col items-center px-3.5 py-3 bg-white p rounded-xl mt-6 h-fit w-3/4 gap-2">
          <h1 className="text-xl font-medium font-brand text-header-gold flex justify-start gap-2 self-start pl-3">
            <img className="" src={header} alt="" />
          </h1>
          <div className="w-[250px] h-[191px] rounded p-1 mt-3 bg-body-light-100 flex flex-col justify-around">
            <div className="flex flex-col">
              <h2 className="text-xs font-medium font-brand  text-input-placeholder">
                Tipo: Saque
              </h2>
              <span className=" text-[#A2A2A2] font-brand  mt-2 text-sm ml-1">
                Data: {props.datetime}
              </span>
            </div>

            <div className="flex justify-between w-full">
              <span className="text-base font-medium font-brand  text-input-placeholder">
                Valor
              </span>
              <span className="text-base font-medium font-brand  text-input-error">
                {props.value}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.transactionType === 'DEPOSIT') {
    return (
      <div className="flex flex-col justify-center items-center h-full ">
        <div className=" flex flex-col items-center px-3.5 py-3 bg-white p rounded-xl mt-6 h-fit w-3/4 gap-2">
          <h1 className="text-xl font-medium font-brand text-header-gold flex justify-start gap-2 self-start pl-3">
            <img className="" src={header} alt="" />
          </h1>
          <div className="w-[250px] h-[191px] rounded p-1 mt-3 bg-body-light-100 flex flex-col justify-around">
            <div className="flex flex-col">
              <h2 className="text-xs font-medium font-brand  text-input-placeholder">
                Tipo: Depósito
              </h2>
              <span className=" text-[#A2A2A2] font-brand  mt-2 text-sm ml-1">
                Data: {props.datetime}
              </span>
            </div>

            <div className="flex justify-between w-full">
              <span className="text-base font-medium font-brand  text-input-placeholder">
                Valor
              </span>
              <span className="text-base font-medium font-brand  text-[#53D496]">
                {props.value}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.transactionType === 'TRANSFER_TO') {
    return (
      <div className="flex flex-col justify-center items-center h-full ">
        <div className=" flex flex-col items-center px-3.5 py-3 bg-white p rounded-xl mt-6 h-fit w-3/4 gap-2">
          <h1 className="text-xl font-medium font-brand text-header-gold flex justify-start gap-2 self-start pl-3">
            <img className="" src={header} alt="" />
          </h1>
          <div className="w-[250px] h-[191px] rounded p-1 mt-3 bg-body-light-100 flex flex-col justify-around">
            <div className="flex flex-col">
              <h2 className="text-xs font-medium font-brand  text-input-placeholder">
                Tipo: Transferência - Recebida
              </h2>
              <span className=" text-[#A2A2A2] font-brand  mt-2 text-sm ml-1">
                Data: {props.datetime}
              </span>
            </div>
            <div>
              <h3 className="text-xs font-medium font-brand  text-input-placeholder">
                Dados de origem:
              </h3>
              <div className="flex flex-col">
                <span className=" text-[#A2A2A2] font-brand  text-sm ml-1">
                  Nome:{props.name}
                </span>
                <span className=" text-[#A2A2A2] font-brand  text-sm ml-1">
                  Agência:{props.agency}
                </span>
                <span className=" text-[#A2A2A2] font-brand  text-sm ml-1">
                  Conta: {props.account}
                </span>
              </div>
            </div>

            <div className="flex justify-between w-full">
              <span className="text-base font-medium font-brand  text-input-placeholder">
                Valor
              </span>
              <span className="text-base font-medium font-brand  text-input-error">
                {props.value}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>
};
