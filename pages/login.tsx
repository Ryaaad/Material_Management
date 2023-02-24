import Robot from '../public/Robot_login.png'
import G from '../public/google.jpg'
import Image from 'next/image'
import Link from 'next/link';

const LogIn = () => {
    return ( <>
        <div  className="bg-[#E5F5FE] h-[100vh] w-full grid justify-center items-center text-center font-['Lato'] p-4 max-[500px]:p-2 " >
          <div className="flex gap-5   max-[500px]:gap-3 max-[500px]:h-[350px] max-[500px]:w-[300px] ">
          <Image alt='Robot Image' src={Robot} className=" h-[525px] w-[400px] max-lg:h-[500px] max-lg:w-[375px]  max-md:hidden "></Image>
          <div className="bg-white h-[510px] w-[440px] p-10 px-0 grid justify-items-center items-center max-lg:h-[490px] max-lg:w-[420px] max-[500px]:h-[350px] max-[500px]:w-[300px] max-[500px]:p-2 ">
            <h1  className='text-3xl font-semibold  max-[500px]:text-xl ' >Log In</h1>
            <p   className='text-[#00000080] max-sm:text-sm ' >Please Fill the Form below to Continue</p>
            <div className='w-full flex flex-col gap-8  max-[500px]:gap-3  max-[500px]:text-sm ' >
            <input type="text" style={{boxShadow:" 0px 5px 71px 0px rgba(0, 0, 0, 0.1)"}} placeholder='UserName or Email' 
            className='rounded-[10px] bg-white w-[85%] p-3 mx-auto pl-4  max-[500px]:p-2 max-[500px]:pl-3  max-[500px]:w-[70%]  max-[500px]:rounded-[5px] ' />
            <input type="text" placeholder='Enter your Password'  style={{boxShadow:" 0px 5.998095512390137px 71.9771499633789px 0px rgba(0, 0, 0, 0.1)"}}
            className='rounded-[10px] bg-white w-[85%] p-3 mx-auto pl-4  max-[500px]:p-2 max-[500px]:pl-3  max-[500px]:w-[70%]  max-[500px]:rounded-[5px] ' />
            </div>
            <button className='bg-[#1976D2] text-white rounded-[15px] p-3 w-[60%] max-md:[58%] max-md:rounded-[10px] max-[500px]:text-sm  max-[500px]:p-[6px]  max-[500px]:rounded-[5px] max-[500px]:w-[50%]   '>Continue</button>
            <button className=' text-[#847E7E] rounded-[15px] p-1 w-[70%] flex gap-2 justify-center items-center max-[500]:w-[60%] max-[500px]:rounded-[5px] max-[500px]:text-sm '  style={{boxShadow:" 0px 62px 62px 0px rgba(0, 0, 0, 0.04)"}}>
        <img src={G.src} className='h-[50px] w-[50px] max-md:h-[25px] max-md:w-[25px] ' alt="Google Img" /> Log in with Google</button>
         </div>
        </div>    
        </div>
    </> 
    
     );
}
 
export default LogIn;