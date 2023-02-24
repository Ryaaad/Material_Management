import Esp32 from '../public/Esp32.jpg'
import Image from 'next/image'
import Link from 'next/link';
interface props{
    name :String,
    type:String,
    img:String,
    qte:number,
}

const CardMato:React.FC<props> = (props) => {
    return (  
        <div  className="bg-[#1976D226] flex flex-col justify-center items-center rounded-[5px] gap-5 py-4 md:py-3 md:gap-3 sm:gap-3 " >
          <Image alt='' src={Esp32}  className="rounded-full h-[135px] w-[135px] md:h-[120px] md:w-[120px]  sm:h-[130px] sm:w-[130px] " ></Image>
          <h2 className="text-lg font-semibold md:text-[15px]"> {props.name} </h2>
          <h3 className="text-lg text-[#5F6368] md:text-[15px] "> Items lended : <span className='text-[#ff0008] font-semibold' > 2 </span></h3>
          <h3 className="text-lg text-[#5F6368] md:text-[15px]"> Items Total :  <span  className='text-[#00805a] font-semibold ' >  {props.qte} </span>  </h3>
          <Link href={`/Material/${props.name}`}>    
          <button  className='border-white border-[2px] rounded-[2px] p-2 px-3 text-[#3069FE] text-sm font-semibold hover:bg-[#1976d228] hover:text-black duration-500 ' >View details </button>
            </Link>
       
        </div>
     );
}
 
export default CardMato;