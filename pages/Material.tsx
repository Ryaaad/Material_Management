import Robot from '../public/Robot_login.png'
import Search from '../public/Search.png'
import Image from 'next/image'
import Link from 'next/link';
import Navbar from '@/components/Navbar';
const Material = () => {
    return ( 
    <>
    <Navbar Element='Mato'></Navbar> 
    <main className='w-full  '>
    <div className='w-full bg-black h-[42vh] flex flex-col justify-center py-5 pt-10 gap-8 ' >
        <h1 className='text-3xl text-white text-center' >Stop looking for a Material  - find it.</h1>
        <div className="flex items-center gap-3 justify-center">
            <span className='relative  w-[60%] '>
        <input type="text" placeholder='Search'  className=' pl-8 relative bg-white h-[55px] w-full  rounded-[10px] '/>
        <Image alt='search icone' src={Search}  className='absolute top-[50%] translate-y-[-50%] left-[1%] h-[20px] w-[20px] ' ></Image>
            </span>
        <button className='bg-[#1976D2] text-white rounded-[10px] h-[55px] px-4 text-lg  ' > Add new Material </button>
        </div>
    </div>    
    </main>
    </> );
}
 
export default Material;