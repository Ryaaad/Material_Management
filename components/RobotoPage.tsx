import Robot from '../public/Robot.png'
import Image from 'next/image'
const RobotoPage = () => {
    return ( 
        <main className="bg-[#E5F5FE] flex flex-col justify-center items-center w-full h-[100vh] gap-[30px] " >
        <Image alt='Robot Image' src={Robot} className=" h-[350px] w-[320px]  "></Image>
        <p  className='text-2xl font-bold'>Welcome To <span className='text-[#1976D2] '> MC </span> Robotics</p>
         <button className='rounded-[16px] text-xl flex justify-center items-center w-[200px] h-[55px] font-bold text-[#1976D2] border-[#1976D2] border-solid border ' > Get Started </button>
        </main>
     );
}
 
export default RobotoPage;