import { useState } from 'react';
import transfergold from '../../assets/imgs/transfergold.svg';
import { createTransfer } from '../../components/utils/requisitions';
import { useUser } from '../../providers/account';

const parserAcctAndAgency = (str: string): Map<string, string> => {
    const map = new Map
    str = str.replaceAll("-", "")
    map.set("dv", str[str.length-1])
    str = str.slice(0, -1)
    map.set("body", str)
    return map;
}

export const Transactioncomp = () => {
    const state = useUser().state;
    const [value, setValue] = useState('');
    const [acct, setAcct] = useState('');
    const [agency, setAgency] = useState('');

    const handleTranfer = async () => {
        const _agency = parserAcctAndAgency(agency);
        const _acct = parserAcctAndAgency(acct);
        const result = await createTransfer(
            _agency.get("body")!,
            _agency.get("dv")!,
            _acct.get("body")!,
            _acct.get("dv")!,
            value,
            state.id
        )
        console.log(result)
    }

    return (<div className="flex flex-col justify-center items-center h-full">
        <div className=' flex flex-col items-center bg-white rounded-xl h-3/4 w-3/4 gap-2'>
            <h1 className="text-xl font-medium font-brand text-header-gold flex justify-start gap-2 self-start pl-3"><img className='' src={transfergold} alt="" />Transferencia</h1>
            <div className='text-black'>
                <h2>Origem</h2>
                <div className='flex'>
                    <div>
                        <div>{state.agency}-{state.agency_dv}</div><p>Agência</p>
                    </div>
                    <div>
                        <div>{state.acct_number}-{state.acct_number_dv}</div><p>Conta</p>
                    </div>
                </div>
            </div>
            <div className='text-black'>
                <h2>Destino</h2>
                <div className='flex align-center'>
                    <div className='flex flex-col'>
                        <input type='text' className='w-1/2 text-black border-black border-2' onChange={(e) => setAgency(e.target.value)} /><p>Agência</p>
                    </div>
                    <div>
                        <input type='text' className='w-1/2 text-black border-black border-2' onChange={(e) => setAcct(e.target.value)} /><p>Conta</p>
                    </div>
                </div>
            </div>
            <input type='text' placeholder='Valor' className='text-black border-black border-2' onChange={(e) => setValue(e.target.value)}></input>
            <input type='text' placeholder='Senha' className='text-black border-black border-2'></input>
            <button className='text-black' onClick={handleTranfer}>Transferir</button>
        </div>
    </div>
    )
}
