import Navbar from "@/components/Navbar";
import User from '../../public/User.png'
import Image from 'next/image'
import { HiArrowLeft } from "react-icons/hi";
import { SiDiscord } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

import Link from 'next/link';
import CardMMB from "@/components/CardMMB";
import router, { useRouter } from "next/router";
import CardT from "@/components/CardMatLended";

const Id= () => {

  let   router = useRouter();
  let memberId = router.query["memberId"];
  let firstName = router.query["firstName"];
  let lastName = router.query["lastName"];
  let img = router.query["img"];
  let discord = router.query["discord"];
  let Tel = router.query["Tel"];
    return (  
    <>
   <Navbar Element='MMB'></Navbar> 
   <div className="py-8 px-12 w-full bg-[#1976D226]" >
    <div className="bg-white py-8 p-2 relative flex flex-col gap-3 justify-center items-center w-full ">
        <Link  href={'/Members'}>
    <HiArrowLeft   className="text-3xl absolute top-5 left-5 cursor-pointer" ></HiArrowLeft>
        </Link>
        <Image alt="" src={User}  className='rounded-full h-[250px] w-[250px]  ' ></Image>

        <h1  className="text-[#5F6368] text-xl uppercase " >{firstName} {lastName}</h1>
        <div className="flex  justify-between mx-auto items-center gap-8 ">
            <div className="flex flex-col items-center gap-2">
            <span className="rounded-full bg-[#5F6368] h-[50px] w-[50px] text-2xl text-white flex justify-center items-center">
            <BsFillTelephoneFill></BsFillTelephoneFill>
            </span>
            <span className="flex justify-center items-center gap-2">
           {Tel}
            <div className='text-white bg-[#1976D2] rounded-[10px] p-2 text-lg cursor-pointer ' onClick={()=>{}}  >  <MdEdit></MdEdit> </div>
            </span>
            </div>
          <div className="flex flex-col items-center gap-2">
          <span className="rounded-full bg-[#5F6368] h-[50px] w-[50px] text-2xl text-white flex justify-center items-center">
            <SiDiscord></SiDiscord>
            </span>
            <span className="flex justify-center items-center gap-2">
           {discord}
            <div className='text-white bg-[#1976D2] rounded-[10px] p-2 text-lg cursor-pointer'  onClick={()=>{}} >  <MdEdit></MdEdit> </div>
            </span>
        
          </div>
          
            <div>
            
            </div>
        </div>
        <div className="mt-4 flex gap-5 ">
        <CardT memberId={0} firstName={"Allalo"} lastName={"Dayr"} img={""} discord={""} Tel={""}></CardT>
        <CardT memberId={0} firstName={"Allali"} lastName={"Yard"} img={""} discord={""} Tel={"00252"}></CardT>
        <CardT memberId={0} firstName={"mrzog"} lastName={"Dayr"} img={""} discord={""} Tel={"20230"}></CardT>
        </div>
    </div>
   </div>
    </> 
    );
}
 
export default Id;