import React, { Dispatch, SetStateAction } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface props{
    totalPosts:number,
    postsPerPage:number,
    currentPage:number,
    setCurrentPage:Dispatch<SetStateAction<number>>,
}

const Pagination:React.FC<props>=(props)=> {

    let pages = [];

    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pages.push(i);
    }
    const prev=()=>{
        if(props.currentPage>1) props.setCurrentPage(props.currentPage - 1)
    }
    const next=()=>{
        if(props.currentPage<pages.length) props.setCurrentPage(props.currentPage + 1)
    }
      const Set=(Current:number)=>{
      props.setCurrentPage(Current)
    }
  return (
  <div className='flex gap-1 h-max translate-y-[105%] select-none ' >
    <div  className='text-2xl bg-[#FFFFFF] border border-[#DDDDDD] rounded-[10px] w-[35px] h-[35px] grid items-center justify-center cursor-pointer ' onClick={()=>prev()} >
 <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
    </div>
{  props.currentPage>2 && <>
    { props.currentPage==pages.length && <>
 <div  className={`text-lg  border rounded-[10px] w-[35px] h-[35px] grid items-center justify-center cursor-pointer bg-[#FFFFFF] border-[#DDDDDD] `}  onClick={()=>Set(props.currentPage-3)}>
        {props.currentPage-3}
 </div>       
    <div  className={`text-lg  border rounded-[10px] w-[35px] h-[35px] grid items-center justify-center cursor-pointer bg-[#FFFFFF] border-[#DDDDDD] `}  onClick={()=>Set(props.currentPage-2)} >
        {props.currentPage-2}
         </div> 
 </>
}
</>

}

{ props.currentPage>2 && <>
    { props.currentPage==pages.length-1 &&  <div  className={`text-lg  border rounded-[10px] w-[35px] h-[35px] grid items-center justify-center cursor-pointer bg-[#FFFFFF] border-[#DDDDDD] `} 
onClick={()=>Set(props.currentPage-2)} >
        {props.currentPage-2}
         </div> 
}
</>

}
{
    pages.map(page=>{
      return  <div key={page}  className={`text-lg  border rounded-[10px] w-[35px] h-[35px] grid items-center justify-center cursor-pointer 
      ${page==props.currentPage ? "bg-[#1976D2] border-[#1976D2] text-white" : "bg-[#FFFFFF] border-[#DDDDDD]"} ${page>props.currentPage+2 && "hidden"} ${page<props.currentPage-1 && "hidden"} `} 
   onClick={()=>Set(page)}   >
        {page}
         </div> 
    })
}
 { pages.length>3 && <>
 
 { props.currentPage==1 && <div  className={`text-lg  border rounded-[10px] w-[35px] h-[35px] grid items-center justify-center cursor-pointer bg-[#FFFFFF] border-[#DDDDDD] `}
 onClick={()=>Set(props.currentPage+3)} >
         {props.currentPage+3}
          </div> 
 }
 </> }

    <div  className='text-2xl bg-[#FFFFFF] border border-[#DDDDDD] rounded-[10px] w-[35px] h-[35px] grid items-center justify-center cursor-pointer ' onClick={()=>next()} >
    <MdKeyboardArrowRight></MdKeyboardArrowRight>
    </div> 

  </div>
  )
}
export default Pagination;