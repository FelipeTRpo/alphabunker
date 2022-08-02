import withdrawgold from '../../assets/imgs/withdrawgold.svg';

export const Withdrawcomp = () => {
    return (<div className="flex flex-col justify-center items-center h-full">
            <div className=' flex flex-col items-center bg-white rounded-xl h-3/4 w-3/4 gap-2'>
            <h1 className="text-xl font-medium font-brand text-header-gold flex justify-start gap-2 self-start pl-3"><img className='' src={withdrawgold} alt="" /> Saque</h1>
            <div className='text-black'>
                <h2>Dados para depósito</h2>
                <div className='flex align-center'>
                    <div className='flex flex-col'>
                        <input type='text' className='w-1/2 text-black border-black border-2'/><p>Agência</p>
                    </div>
                    <div>
                        <input type='text' className='w-1/2 text-black border-black border-2' /><p>Conta</p>
                    </div>
                </div>
            </div>
            <input type='text' placeholder='Valor' className='text-black border-black border-2'></input>
            <input type='text' placeholder='Senha' className='text-black border-black border-2'></input>
            <button className='text-black border-black border-2'>Depositar</button>
            
            </div>
        </div>
        )
}