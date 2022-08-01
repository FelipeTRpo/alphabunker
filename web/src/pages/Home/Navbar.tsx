import depositbtn from '../../assets/imgs/depositbtn.svg';
import extractbtn from '../../assets/imgs/extractbtn.svg';
import transferbtn from '../../assets/imgs/transferbtn.svg';
import withdrawbtn from '../../assets/imgs/withdrawbtn.svg';
import hideeye from '../../assets/imgs/hideeye.svg';
import userprofilebtn from '../../assets/imgs/userprofilebtn.svg';


type NavbarProps = {
    name:string
    agency:string
    account:string
    money:string
}

export const Navbar = (props:NavbarProps) => {
    return(
        <div className='flex flex-col gap-4 bg-brand-base p-12 rounded-b-3xl relative'>
            <div className='flex justify-between'><h2>Bem vindo, {props.name} </h2> <img src={userprofilebtn} alt="" /></div>
        <nav>
            <ul className='flex gap-2 px-2 text-xs'>
                <li className='flex flex-col justify-center items-center'><button className='w-14 h-12 bg-brand-btn flex flex-col justify-center items-center rounded-md'><figure><img src={extractbtn} alt="" /></figure></button><p>Extrato</p></li>
                <li className='flex flex-col justify-center items-center'><button className='w-14 h-12 bg-brand-btn flex flex-col justify-center items-center rounded-md'><img src={transferbtn} alt="" /></button><p>Transferir</p></li>
                <li className='flex flex-col justify-center items-center'><button className='w-14 h-12 bg-brand-btn flex flex-col justify-center items-center rounded-md'><img src={depositbtn} alt="" /></button><p>Depositar</p></li>
                <li className='flex flex-col justify-center items-center'><button className='w-14 h-12 bg-brand-btn flex flex-col justify-center items-center rounded-md'><img src={withdrawbtn} alt="" /></button><p>Sacar</p></li>    
            </ul>
        </nav>
        <div className='bg-white rounded-2xl bg-white mx-auto my-0 px-4 py-3 pt-1.5 w-10/12 absolute -bottom-8 left-1/2 -translate-x-1/2 shadow-md flex flex-col items-start justify-between'>
            <p className='text-header-gold'>Agencia: {props.agency} Conta: {props.account}</p>
            <p className='flex text-btn-primary-base'> <img src={hideeye} alt="" /> {props.money} R$</p>
        </div>
        </div >
    )
}