import User from '../public/User.png'
import Image from 'next/image'
import Link from 'next/link';
import { SiDiscord } from "react-icons/si";
import { ParsedUrlQueryInput } from 'querystring';

interface props{
    memberId:number,
    firstName:String ,
    lastName:String,
    img:String,
    discord:String
    Tel:String,
}
const CardT:React.FC<props> = (props) => {

            return ( 
                <div  className="bg-[#1976D226] flex flex-col justify-center items-center rounded-[5px] gap-4 py-4 " >
                    <div  className='relative' >
                    <Image alt='' src={User}  className="rounded-full h-[110px] w-[110px]" ></Image>

                    </div>
                  <h2 className="text-lg font-semibold"> {props.firstName} {props.lastName}  </h2>
                  <h3 className="text-lg text-[#5F6368]  "> Items Not returned : <span className='text-[#ff0008] font-semibold' > 2 </span></h3>
                  <Link href={{pathname:`/Members/${props.memberId}` ,query: props as unknown as string | ParsedUrlQueryInput | null | undefined}}
                  >    
                  <button  className='border-white border-[2px] rounded-[5px] p-2 px-3 text-white bg-[#1976d2] text-sm font-semibold hover:bg-[#1976d228] hover:text-black duration-500 ' >View details </button>
                    </Link>
               
                </div>
             );
        }
         
 
export default CardT ;