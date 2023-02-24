import MC from '../public/MC_LOGO.png'
import Image from 'next/image'
import Link from 'next/link';

interface props{
    Element:string
}
const Navbar:React.FC<props> = (props) => {
    return ( 
        <div className="flex justify-between justify-items-center items-center bg-[#E5F5FE] w-full p-3 px-12  xs:px-6">
       <Image  alt='' src={MC}  className='h-[40px] w-[60px] xs:h-[30px] xs:w-[50px] ' ></Image>
       <div className="flex gap-10 text-lg items-center xs:text-sm xs:gap-5  ">
        <Link href={'/Materials'} className={` ${props.Element=='Mato' ? 'text-[#1976D2]  border-b border-b-solid border-b-[#1976D2]' : 'text-[#333333]'}  `}>Materials</Link>
        <Link href={'/Members'} className={` ${props.Element=='MMB'? 'text-[#1976D2] border-b border-b-solid border-b-[#1976D2]' : 'text-[#333333]'} `}>Members</Link>
        <Link href={'/'} className={`${props.Element=='Arch'? 'text-[#1976D2] border-b border-b-solid border-b-[#1976D2]' : 'text-[#333333]'} `}>Archive</Link>
       </div>
        </div>
     );
}
 
export default Navbar;