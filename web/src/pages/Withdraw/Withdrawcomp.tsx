import withdrawgold from '../../assets/imgs/withdrawgold.svg';

export const Withdrawcomp = () => {
    return (<div className="flex flex-col justify-center items-center h-full">
            <div className=' flex flex-col items-center bg-white rounded-xl h-3/4 w-3/4 gap-2'>
            <h1 className="text-xl font-medium font-brand text-header-gold flex justify-start gap-2 self-start pl-3"><img className='' src={withdrawgold} alt="" /> Saque</h1>
            </div>
        </div>
        )
}