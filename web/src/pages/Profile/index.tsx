import profilepicture from '../../assets/imgs/profilepicture.svg';
import myaccountsicon from '../../assets/imgs/myaccountsicon.svg';
import mydataicon from '../../assets/imgs/mydataicon.svg';
import backarrow from '../../assets/imgs/backarrow.svg';
import { useEffect, useState } from 'react';
import { getClientById, getStatement } from '../../components/utils/requisitions';
import { useUser } from '../../providers/account';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const navigate = useNavigate();
    const state = useUser().state
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([] as any);

    useEffect(() => {
        getClientById(state.idUser)
            .then(res => {
                setIsLoaded(true);
                setItems(res);
            })
    }, [])


    if(!isLoaded){
        return <p>loading...</p>
    }else{
        return (
            <>
                <div className='flex flex-col justify-center items-center gap-4 bg-brand-base p-12 rounded-b-3xl '>
                    <button className='absolute top-4 left-6 '><img src={backarrow} alt="" onClick={() => {navigate("/home")}}/></button>
                    <figure className='w-20 h-20'><img src={profilepicture} alt="" /></figure>
                    <h1 className='text-header-light text-xl'>{items.name}</h1>
                </div>
                <div className="flex flex-col justify-center items-center h-full gap-10 my-10">
                    <div className=" flex flex-col items-start p-4 py-3 bg-white p rounded-xl h-fit w-3/4 gap-2">
    
                        <div className='flex gap-3 items-center self-start'>
                            <figure className=''><img src={mydataicon} alt="" /></figure>
                            <h2 className='text-header-gold text-lg'>Meus dados</h2>
                        </div>
                        <div className=' bg-body-light-100  text-input-placeholder w-full'>
                            <p>Nome: {items.name}</p>
                            <p>Data de nascimento: {new Date(items.birth_date).toLocaleDateString("pt-br")}</p>
                            <p>CPF: {items.cpf}</p>
                        </div>
    
                    </div>
                    <div className=" flex flex-col items-start p-4 py-3 bg-white p rounded-xl h-fit w-3/4 gap-2">
    
                        <div className='flex gap-3 items-center self-start'>
                            <figure className=''><img src={myaccountsicon} alt="" /></figure>
                            <h2 className='text-header-gold text-lg'>Minhas contas correntes</h2>
                        </div>
                        <div className=' bg-body-light-100  text-input-placeholder w-full'>
                            <p>Agência: {state.agency + "-" + state.agency_dv}</p>
                            <p>Conta: {state.acct_number + "-" + state.acct_number_dv}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}