import Robot from '../public/Robot_login.png'
import G from '../public/google.jpg'
import Image from 'next/image'
import Link from 'next/link';

const LogIn = () => {
    return ( <>
        <div  className="bg-[#E5F5FE] h-[100vh] w-full grid justify-center items-center text-center font-['Lato'] p-4 xs:p-2  " >
          <div className="flex gap-5  xs:gap-3 xs:h-[360px] xs:w-[320px] ">
          <Image alt='Robot Image' src={Robot} className=" h-[525px] w-[400px] lg::h-[500px] lg::w-[375px]  md:hidden "></Image>
          <div className="bg-white h-[510px] w-[440px] p-10 px-0 grid justify-items-center items-center lg::h-[490px] lg::w-[420px] xs:h-[360px] xs:w-[320px] xs:p-2 ">
            <h1  className='text-3xl font-semibold  xs:text-xl ' >Log In</h1>
            <p   className='text-[#00000080] sm:text-sm ' >Please Fill the Form below to Continue</p>
            <div className='w-full flex flex-col gap-8  xs:gap-3  xs:text-sm ' >
            <input type="text" style={{boxShadow:" 0px 5px 71px 0px rgba(0, 0, 0, 0.1)"}} placeholder='UserName or Email' 
            className='rounded-[10px] bg-white w-[85%] p-3 mx-auto pl-4  xs:p-2 xs:pl-3  xs:w-[75%]  xs:rounded-[5px] ' />
            <input type="text" placeholder='Enter your Password'  style={{boxShadow:" 0px 5.998095512390137px 71.9771499633789px 0px rgba(0, 0, 0, 0.1)"}}
            className='rounded-[10px] bg-white w-[85%] p-3 mx-auto pl-4  xs:p-2 xs:pl-3  xs:w-[75%]  xs:rounded-[5px] ' />
            </div>
            <button className='bg-[#1976D2] text-white rounded-[15px] p-3 w-[60%] md:[58%] md:rounded-[10px] xs:text-sm  xs:p-[7px] xs:rounded-[3px] xs:w-[55%]'>Continue</button>
            <button className=' text-[#847E7E] rounded-[15px] p-1 w-[70%] flex gap-2 justify-center items-center max-[500]:w-[60%] xs:rounded-[5px] xs:text-sm '  style={{boxShadow:" 0px 62px 62px 0px rgba(0, 0, 0, 0.04)"}}>
        <img src={G.src} className='h-[50px] w-[50px] xs:h-[25px] xs:w-[25px] ' alt="Google Img" /> Log in with Google</button>
         </div>
        </div>    
        </div>
    </> 
    
     );
}
 
export default LogIn;