import depositbtn from '../../assets/imgs/depositbtn.svg';
import extractbtn from '../../assets/imgs/extractbtn.svg';
import transferbtn from '../../assets/imgs/transferbtn.svg';
import withdrawbtn from '../../assets/imgs/depositbtn.svg';

type NavbarProps = {
    name:string
}

export const Navbar = (props:NavbarProps) => {
    return(
        <div className='bg-brand-base'>
        <h2>Bem vindo, {props.name} </h2>
        <nav>
                <ul className='flex gap-10'>
                <li className='flex flex-col justify-center items-center'><button className='w-14 h-12 bg-black flex flex-col justify-center items-center'><figure><img src={extractbtn} alt="" /></figure></button><p>Extrato</p></li>
                <li><button><img src={transferbtn} alt="" /></button><p>Transferir</p></li>
                <li><button><img src={depositbtn} alt="" /></button><p>Depositar</p></li>
                <li><button><img src={withdrawbtn} alt="" /></button><p>Sacar</p></li>    
                </ul>
            </nav>
        </div >
    )
}