import depositbtn from '../../assets/imgs/depositbtn.svg';
import extractbtn from '../../assets/imgs/extractbtn.svg';
import transferbtn from '../../assets/imgs/transferbtn.svg';
import withdrawbtn from '../../assets/imgs/withdrawbtn.svg';
import hideeye from '../../assets/imgs/hideeye.svg';
import userprofilebtn from '../../assets/imgs/userprofilebtn.svg';
import { useUser } from '../../providers/account';
import { useNavigate } from 'react-router-dom';


type NavbarProps = {
    money: string
}


export const Navbar = (props: NavbarProps) => {
    const state = useUser().state
    const navigate = useNavigate();
    console.log(state)
    return (
        <div className='flex flex-col gap-4 bg-brand-base p-12 rounded-b-3xl relative'>
            
            <div className='flex justify-between'><h2>Bem vindo, {state.name} </h2> <img src={userprofilebtn} alt="" /></div>
            <nav>
                <ul className='flex gap-2 px-2 text-xs'>
                    <li ><a className='flex flex-col justify-center items-center' onClick={() => navigate("/home")}><button className='w-14 h-12 bg-brand-btn flex flex-col justify-center items-center rounded-md'><figure><img src={extractbtn} alt="" /></figure></button><p>Extrato</p></a></li>
                    <li ><a className='flex flex-col justify-center items-center' onClick={() => navigate("/transaction")}><button className='w-14 h-12 bg-brand-btn flex flex-col justify-center items-center rounded-md'><img src={transferbtn} alt="" /></button><p>Transferir</p></a></li>
                    <li ><a className='flex flex-col justify-center items-center' onClick={() => navigate("/transfer")}><button className='w-14 h-12 bg-brand-btn flex flex-col justify-center items-center rounded-md'><img src={depositbtn} alt="" /></button><p>Depositar</p></a></li>
                    <li ><a className='flex flex-col justify-center items-center' onClick={() => navigate("/withdraw")}><button className='w-14 h-12 bg-brand-btn flex flex-col justify-center items-center rounded-md'><img src={withdrawbtn} alt="" /></button><p>Sacar</p></a></li>
                </ul>
            </nav>
            <div className='bg-white rounded-2xl bg-white mx-auto my-0 px-4 py-3 pt-1.5 w-10/12 absolute -bottom-8 left-1/2 -translate-x-1/2 shadow-md flex flex-col items-start justify-between'>
                <p className='text-header-gold'>Agencia: {state.agency} Conta: {state.acct_number}</p>
                <p className='flex text-btn-primary-base'> <img src={hideeye} alt="" /> {props.money} R$</p>
            </div>
        </div >
    )
}