import Robot from '../public/Robot.png'
import Image from 'next/image'
import Link from 'next/link';
const RobotoPage = () => {
    return ( 
        <main className="bg-[#E5F5FE] flex flex-col justify-center items-center w-full h-[100vh] gap-[30px] " >
        <Image alt='Robot Image' src={Robot} className=" h-[370px] w-[340px]  "></Image>
        <p  className='text-3xl font-bold'>Welcome To <span className='text-[#1976D2] '> MC </span> Robotics</p>
        <Link href={'/login'}>
         <button className='rounded-[10px] text-[18px] flex justify-center items-center w-[200px] h-[55px] font-bold text-[#1976D2] border-[#1976D2] border-solid border ' > Get Started </button>
        </Link>
        </main>
     );
}
 
export default RobotoPage;