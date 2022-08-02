import depositgold from '../../assets/imgs/depositgold.svg';


export const DepositComp = () => {
    
    return (<div className="flex flex-col justify-center items-center h-full">
            <div className=' flex flex-col items-center bg-white rounded-xl h-3/4 w-3/4 gap-2'>
            <h1 className="text-xl font-medium font-brand text-header-gold flex justify-start gap-2 self-start pl-3"><img className='' src={depositgold} alt="" /> Depósito</h1>
            <div className='text-black'>
                <h2>Dados para saque</h2>
                <div className='flex'>
                    <div>
                        <div>1510-5</div><p>Agência</p>
                    </div>
                    <div>
                        <div>95785-3</div><p>Conta</p>
                    </div>
                </div>
            </div>
            <input type='text' placeholder='Valor' className='text-black border-black border-2'></input>
            <input type='text' placeholder='Senha' className='text-black border-black border-2'></input>
            <button className='text-black border-black border-2'>Sacar</button>
            
            
            </div>
        </div>
        )
}