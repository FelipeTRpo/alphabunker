import { useEffect, useState } from 'react';
import closex from '../assets/imgs/closex.svg';
export const handleModal = (ev:MouseEvent) => {
    const parser = ev.target as any
    if(!parser.dataset.close){
        return
    }
    document.getElementById('confirmation-modal')?.classList.remove('flex');
    document.getElementById('confirmation-modal')?.classList.add('hidden');
}
type propsModal = {
    callback:() => Promise<void>
}

export const Modalconfirmation = (props:propsModal) => {
    useEffect( () => {document.getElementById('confirmation-modal')?.addEventListener('click', handleModal)} , [])

    return(
        <div id="confirmation-modal" className="flex-col items-center justify-center fixed bg-[#00000080] h-screen w-screen hidden" data-close='true'>
            <div className="bg-white w-3/4 h-1/4 flex flex-col items-center text-center rounded-xl justify-around">
                <div className='flex justify-around w-full'>
                    <h2 className="text-black text-xl text-bold">Confirmar transação</h2> <button data-close='true'><img src={closex} alt="" data-close='true' /></button>
                </div>
                <p className="text-paragraph-dark ">Esta ação efetuará a transação, deseja continuar?</p>
                <div id="modal-buttons" className="flex justify-around w-full"><button className="bg-btn-cancel-base rounded w-20 h-8" data-close='true'>Cancelar</button> <button className="rounded bg-btn-primary-base w-20 h-8" onClick={()=>{props.callback()}} data-close='true'>Confirmar</button></div>
            </div>
        </div>
    )
}