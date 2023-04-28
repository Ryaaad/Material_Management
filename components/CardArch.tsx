import Esp32 from '../public/Esp32.jpg'
import Image from 'next/image'
interface props{
    Id :number,
    Name:string,
    personName:String,
    Date:string,
    Returned:boolean
}

const CardArch:React.FC<props> = (props) => {
    return (  
        <div  className="bg-[#1976D226]  rounded-[8px] " >
          <Image alt='' src={Esp32}  className="  rounded-t-[8px] h-[150px] w-full md:h-[120px]  sm:h-[130px]  " ></Image>
          <div className='py-4 md:py-3 flex flex-col justify-center items-center gap-2 sm:gap-1 px-4 ' >
          <h2 className=" font-semibold md:text-[15px] text-center "> {props.Name} </h2>
          <h3 className=" text-lg  uppercase text-[#5F6368] md:text-[15px] ">{props.personName} </h3>
          <h3 className=" text-[#1976D2] text-sm md:text-[12px] text-start w-full font-semibold ">Date : {props.Date} </h3>
          <h3 className={`  ${props.Returned ? 'text-[green]' : 'text-[red]'} text-[15px] md:text-[12px] text-start  w-full font-semibold mt-2  `}>{props.Returned ? 'Returned' : 'Not Returned'} </h3>
          </div>
        </div>
     );
}
 
export default CardArch;