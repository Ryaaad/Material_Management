import Robot from '../public/Robot_login.png'
import G from '../public/google.jpg'
import Image from 'next/image'
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const LogIn = () => {
    return ( <>
      {/* <Navbar Element='Mato'></Navbar> */}
        <div  className="bg-[#E5F5FE] h-[100vh] w-full grid justify-center items-center text-center font-['Lato'] " >
          <div className="flex gap-5">
          <Image alt='Robot Image' src={Robot} className=" h-[525px] w-[400px]   "></Image>
          <div className="bg-white h-[510px] w-[440px] p-10 px-0 grid justify-items-center items-center ">
            <h1  className='text-3xl font-semibold' >Log In</h1>
            <p   className='text-[#00000080]' >Please Fill the Form below to Continue</p>
            <div className='w-full flex flex-col gap-8' >
            <input type="text" style={{boxShadow:" 0px 5px 71px 0px rgba(0, 0, 0, 0.1)"}} placeholder='UserName or Email' 
            className='rounded-[10px] bg-white w-[85%] p-3 mx-auto pl-4' />
            <input type="text" placeholder='Enter your Password'  style={{boxShadow:" 0px 5.998095512390137px 71.9771499633789px 0px rgba(0, 0, 0, 0.1)"}}
            className='rounded-[10px] bg-white w-[85%] p-3 mx-auto pl-4' />
            </div>
            <button className='bg-[#1976D2] text-white rounded-[15px] p-3 w-[60%]  '>Continue</button>
            <button className=' text-[#847E7E] rounded-[15px] p-1 w-[70%] flex gap-2 justify-center items-center'  style={{boxShadow:" 0px 62px 62px 0px rgba(0, 0, 0, 0.04)"}}>
            <Image alt='Google' src={G} className='h-[50px] ' ></Image>
            Log in with Google</button>
         </div>
        </div>    
        </div>
    </> 
    
     );
}
 
export default LogIn;