import transfergold from '../../assets/imgs/transfergold.svg';

export const Transactioncomp = () => {
    return (<div className="flex flex-col justify-center items-center h-full">
            <div className=' flex flex-col items-center bg-white rounded-xl h-3/4 w-3/4 gap-2'>
            <h1 className="text-xl font-medium font-brand text-header-gold flex justify-start gap-2 self-start pl-3"><img className='' src={transfergold} alt="" />Transferencia</h1>
            <div className='text-black'>
                <h2>Origem</h2>
                <div className='flex'>
                    <div>
                        <div>1510-5</div><p>Agência</p>
                    </div>
                    <div>
                        <div>95785-3</div><p>Conta</p>
                    </div>
                </div>
            </div>
            <div className='text-black'>
                <h2>Destino</h2>
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
            <button className='text-black'>Transferir</button>
            </div>
        </div>
        )
}