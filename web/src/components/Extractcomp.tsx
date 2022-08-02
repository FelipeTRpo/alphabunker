import bellicon from '../assets/imgs/bellicon.svg';
import extractgold from '../assets/imgs/extractgold.svg';

const classExtractUnit = 'flex justify-between';

type ExtractProps = {
  obj: any
}

const whichColor = (name: string):string => {
  if(name === "DEPOSIT" || name === "TRANSFER"){
    return 'text-[#53D496]'
  }
  return "text-[#FF5959]"
}

const parserValue = (name:string, value:string) => {
  if(name === "DEPOSIT" || name === "TRANSFER"){
    return `+$${value}`
  }
  return `-$${value}`
}

const nameTransaction: any = {
  "TRANSFER": "Transferência recebida",
  "TRANSFER_TO": "Transferência enviada",
  "DEPOSIT": "Depósito",
  "WITHDRAWALS": "Saque"
}

export const Extractcomp = (_obj: ExtractProps) => {

  const infos = _obj.obj.statement
  let confirmDate: string;

  const elements = infos.map((info: any) => {
    const date = new Date(info.date_time).toLocaleDateString("pt-br");
    if(date !== confirmDate) {
      confirmDate = date;
      return (
        <>
          <br />
          <p>{date}</p>
          <p id={info.id} className={classExtractUnit}><span className='text-input-inactive'>{nameTransaction[info.name]}</span> <span className={whichColor(info.name)}>{parserValue(info.name, info.value)}</span></p>

        </>
      )
    }
    return <p id={info.id} className={classExtractUnit}><span className='text-input-inactive'>{nameTransaction[info.name]}</span> <span className={whichColor(info.name)}>{parserValue(info.name, info.value)}</span></p>
  })
  return (
    <div className="flex flex-col justify-center items-center h-full">
        <div className=' flex flex-col items-center bg-white rounded-xl h-3/4 w-3/4 gap-2'>
          <h1 className="text-xl font-medium font-brand text-header-gold flex flex justify-start gap-2 self-start pl-3"><img className='' src={extractgold} alt="" /> Extrato de transações<img className='' src={bellicon} alt="" /></h1>
          <div className='bg-body-light-100 h-4/5 w-4/5 text-input-placeholder'>
            {elements}
          </div>
        
        </div>
    </ div>
  );
};
