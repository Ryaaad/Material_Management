import { Dispatch, SetStateAction } from 'react';
import { FiX } from 'react-icons/fi';

interface props{
    setAdd: Dispatch<SetStateAction<boolean>>
}
const AddArchive:React.FC<props> = (props) => {
 
   return ( 
    <div className="bg-white relative flex flex-col py-6 px-10 h-max w-[55vw] sm:w-[80vw] lg:w-[65vw] md:w-[70vw] xs:w-[90vw] md:px-6 xs:px-4 " >
    <h1  className="text-center text-3xl font-semibold md:text-2xl xs:text-xl " > Create New <span  className='text-[#3069FE] '>Lending</span> </h1>
    <FiX className='text-4xl cursor-pointer absolute top-[3%] right-[2%] md:text-3xl xs:text-2xl '  onClick={()=>props.setAdd(false) } ></FiX>
    <div className="flex justify-between items-center mt-5 xs:mt-3 ">
    <div className='w-[65%]' >
        <h1 className='text-[#33333] text-lg  xs:text-[16px] ' > Material Lended</h1>
        <input type="text" placeholder="Name Here" className="w-full border border-[#D9D9D9] p-2 pl-3 mt-1 rounded-[8px] md:py-[6px] " />
    </div>
    <div className='w-[30%]' >
        <h1 className='text-[#33333] text-lg  xs:text-[16px]  ' >Qte</h1>
        <input type="text" placeholder="Qte here" className="w-full border border-[#D9D9D9] p-2 pl-3 mt-1 rounded-[8px] md:py-[6px] " />
    </div>
    </div>
    <div className='mt-5 xs:mt-3' >
        <h1 className='text-[#33333] text-lg  xs:text-[16px]  ' >Person Name</h1>
        <input type="text" placeholder="Person Name Here" className="w-full border border-[#D9D9D9] p-2 pl-3 mt-1 rounded-[8px] md:py-[6px] " />
    </div>

    <div className='mt-3 xs:mt-2 mb-5 xs:mb-3' >
        <h1 className='text-[#33333] text-lg  xs:text-[16px]  ' >Date</h1>
        <input type="text" placeholder="Date here" className="w-full border border-[#D9D9D9] p-2 pl-3 mt-1 rounded-[8px] md:py-[6px] " />
    </div>

   
    <button  className="bg-[#3069FE] text-white p-[10px] w-[160px] rounded-[10px] self-end md:rounded-[8px] md:p-2 md:w-[140px] xs:w-[120px] xs:p-[6px] xs:text-sm xs:rounded-[5px]  " >Create Lending</button>
    </div> 
  );
}
 
export default AddArchive;