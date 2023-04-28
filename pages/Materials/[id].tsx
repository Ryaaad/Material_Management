import Navbar from "@/components/Navbar";
import User from '../../public/User.png'
import Image from 'next/image'
import { HiArrowLeft } from "react-icons/hi";
import { SiDiscord } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

import Link from 'next/link';
import CardMMB from "@/components/CardMMB";
import { useRouter } from "next/router";

const Id= () => {
    let   router = useRouter();
    let name = router.query["name"];
    let type = router.query["type"];
    let lastName = router.query["lastName"];
    let img = router.query["img"];
    let qte = router.query["qte"];
    return (  
    <>
   <Navbar Element='Mato'></Navbar> 
   <div className="py-8 px-12 w-full bg-[#1976D226]" >
    <div className="bg-white py-8 p-2 relative flex flex-col gap-3 justify-center items-center w-full ">
        <Link  href={'/Members'}>
    <HiArrowLeft   className="text-3xl absolute top-5 left-5 cursor-pointer" ></HiArrowLeft>
        </Link>
        <Image alt="" src={User}  className='rounded-full h-[250px] w-[250px]  ' ></Image>

        <h1  className="text-[#5F6368] text-xl uppercase " >{name}</h1>
        <div className="flex  justify-center w-full mx-auto items-center gap-8 ">
        <h3 className=" text-[#5F6368] md:text-[15px] "> Items lended : <span className='text-[#ff0008] font-semibold' > 2 </span></h3>
          <h3 className=" text-[#5F6368] md:text-[15px]"> Items Total :  <span  className='text-[#00805a] font-semibold ' > {qte} </span>  </h3>
          
            <div>
            
            </div>
        </div>
        <div className="mt-4 flex gap-5 ">
        <CardMMB memberId={0} firstName={"Allalo"} lastName={"Dayr"} img={""} discord={""} Tel={""}></CardMMB>
        <CardMMB memberId={0} firstName={"Allali"} lastName={"Yard"} img={""} discord={""} Tel={"00252"}></CardMMB>
        <CardMMB memberId={0} firstName={"mrzog"} lastName={"Dayr"} img={""} discord={""} Tel={"20230"}></CardMMB>
        </div>
    </div>
   </div>
    </> 
    );
}
 
export default Id;