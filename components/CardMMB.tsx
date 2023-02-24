import Esp32 from '../public/Esp32.jpg'
import Image from 'next/image'
import Link from 'next/link';
import { SiDiscord } from "react-icons/si";
interface props{
    memberId:number,
    firstName:String ,
    lastName:String,
    img:String,
    discord:String
    Tel:String,
}

const CardMMB:React.FC<props> = (props) => {
    return ( 
        <div  className="bg-[#1976D226] flex flex-col justify-center items-center rounded-[5px] gap-4 py-4 " >
            <div  className='relative' >
                <div className="rounded-full h-[120px] w-[120px] bg-black "   ></div>
            {/* <Image alt='' src={Esp32}  className="rounded-full h-[135px] w-[135px] " ></Image> */}
            <Link href={`https://discord.com/users/${props.discord}`} target='_blank'  className='text-xl text-[#5865F2] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[40%] rounded-full bg-white p-2 cursor-pointer ' >
            <SiDiscord ></SiDiscord>
            </Link >
            </div>
          <h2 className="text-lg font-semibold"> {props.firstName} {props.lastName}  </h2>
          <h3 className="text-lg text-[#5F6368]  "> Items Not returned : <span className='text-[#ff0008] font-semibold' > 2 </span></h3>
          <Link href={`/Material/${props.memberId}`}>    
          <button  className='border-white border-[2px] rounded-[2px] p-2 px-3 text-[#3069FE] text-sm font-semibold hover:bg-[#1976d228] hover:text-black duration-500 ' >View details </button>
            </Link>
       
        </div>
     );
}
 
export default CardMMB;