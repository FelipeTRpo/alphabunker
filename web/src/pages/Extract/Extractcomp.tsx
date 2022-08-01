import extractbtn from '../../assets/imgs/extractbtn.svg';
import bellicon from '../../assets/imgs/bellicon.svg';
import extractgold from '../../assets/imgs/extractgold.svg';
const classExtractUnit = 'flex justify-between';
export const Extractcomp = () => {
  async function handleExtract() { /*TODO*/ }
  return (
    <div className="flex flex-col justify-center items-center h-full">
        <div className=' flex flex-col items-center bg-white rounded-xl h-3/4 w-3/4 gap-2'>
          <h1 className="text-xl font-medium font-brand text-header-gold flex text-icon-gold fill-icon-gold"><img className='' src={extractgold} alt="" /> Extrato de transações<img className='' src={bellicon} alt="" /></h1>
          <div className='bg-body-light-100 h-4/5 w-4/5 text-input-placeholder'>
            <p>03/07/2022</p>
            <p className={classExtractUnit}><span className='text-input-inactive'>Transferência enviada</span> <span className='text-[#FF5959]'>-$26,49</span></p>
            <p className={classExtractUnit}><span className='text-input-inactive'>Saque</span> <span className='text-[#FF5959]'>-$515,00</span></p>
            <p className={classExtractUnit}><span className='text-input-inactive'>Depósito</span> <span className='text-[#53D496]'>+$1.500,00</span></p>
            <p className={classExtractUnit}><span className='text-input-inactive'>Transferência recebida</span > <span className='text-[#53D496]'>+$630,00</span></p>
            <br />
            <p>02/07/2022</p>
            <p className={classExtractUnit}><span className='text-input-inactive'>Transferência enviada</span > <span className='text-[#FF5959]'>-$26,49</span></p>
            <p className={classExtractUnit}><span className='text-input-inactive'>Saque</span> <span className='text-[#FF5959]'>-$515,00</span></p>
          </div>
        
        </div>
    </ div>
  );
};
