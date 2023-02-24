import Search from '../../public/Search.png'
import Bg from '../../public/MaterialBg.png'
import Image from 'next/image'
import Robot from '../../public/Robot2.png'
import Robot1 from '../../public/Robot.png'
import Robot2 from '../../public/Robot_login.png'
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { BiChevronUp,BiChevronDown } from "react-icons/bi";
import { useState } from 'react';
import CardMato from '@/components/CardMato';
import Pagination from '@/components/Pagination';
import AddMato from '@/components/AddMato'
const Material = () => {
    const [FilterClicked, setFilterClicked] = useState(false)
    const [Add, setAdd] = useState(false)
    
    const ClickHandel=()=>{
        setFilterClicked((prev: boolean)=>prev=!prev)
    }

    const Cards=[
        {
        name :'arduino',
        type:'MicroController',
        img:'',
        qte:5,
        },
        {
            name :'arduino',
            type:'MicroController',
            img:'',
            qte:5,
            },
            {
                name :'arduino',
                type:'MicroController',
                img:'',
                qte:5,
                },
                {
                    name :'arduino',
                    type:'MicroController',
                    img:'',
                    qte:5,
                    },
        {
         name :'Rasberypi',
            type:'MicroController',
            img:'',
            qte:15,
            },
            {
                name :'arduino',
                type:'MicroController',
                img:'',
                qte:5,
                },
                {
                 name :'Rasberypi',
                    type:'MicroController',
                    img:'',
                    qte:15,
                    },
                    {
                        name :'arduino',
                        type:'MicroController',
                        img:'',
                        qte:5,
                        },
                        {
                         name :'Rasberypi',
                            type:'MicroController',
                            img:'',
                            qte:15,
                            },           
            {
                name :'Esp32',
                type:'MicroController',
                img:'',
                qte:5,
                },
                {
                    name :'Pic',
                    type:'MicroController',
                    img:'',
                    qte:5,
                    },
                    {
                        name :'UC-06',
                        type:'MicroController',
                        img:'',
                        qte:20,
                        },
                        {
                            name :'UC-05',
                            type:'beuthuf',
                            img:'',
                            qte:15,
                            },
    ]
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = Cards.slice(firstPostIndex, lastPostIndex);    
    return ( 
    <>
    <Navbar Element='Mato'></Navbar> 

    { Add &&    <div className="fixed top-0 left-0 bottom-0 right-0 w-full grid place-content-center z-10 h-[100vh] bg-[#00000045]">
            <AddMato setAdd={setAdd}></AddMato>
              </div>
                  }
    <main className='w-full bg-[#1976D226] '>
    <div style={{backgroundImage:`url(${Bg.src})`}}  className='w-full bg-cover h-[50vh] bg-center relative flex flex-col justify-center py-4 pt-7 gap-8 md:h-[42vh] sm:h-[38vh] xs:h-[30vh] xs:gap-5 ' >
        <h1 className='text-3xl text-white text-center md:text-2xl sm:text-xl xs:text-lg ' >Stop looking for a Material  - find it.</h1>
        <div className="flex items-center gap-3 justify-center sm:gap-2  xs:flex-col xs:items-center ">
            <span className='relative w-[60vw] md:w-[55vw] sm:w-[50vw] xs:w-[75vw] '>
        <input type="text" placeholder='Search'  className=' pl-8 relative bg-white h-[55px] w-full  rounded-[10px] md:pl-6 md:h-[48px] md:rounded-[8px] sm:h-[45px] sm:pl-6 sm:rounded-[8px] xs:h-[40px]  '/>
        <Image alt='search icone' src={Search}  className='absolute top-[50%] translate-y-[-50%] left-[1%] h-[20px] w-[20px] md:h-[15px]  md:w-[15px] sm:h-[14px] sm:w-[14px] ' ></Image>
            </span>
        <button className='bg-[#1976D2] text-white rounded-[10px] h-[55px] px-4 text-lg md:h-[48px] md:rounded-[8px] sm:h-[45px] sm:px-2 sm:rounded-[8px] sm:text-sm  xs:h-[30px] xs:text-[10px]  xs:rounded-[5px] xs:px-2' onClick={()=>setAdd(true)} > Add  Material </button>
        </div>
    </div>    
    <div className="mt-6 ">
        <div className="flex justify-items-center justify-between px-12 font-semibold sm:text-sm xs:text-[12px] ">
            <h3>
            Found <span  className='text-[#3069FE] ' > 376 results   </span> 
            </h3>
            <div className='flex gap-1 items-center rounded-[5px] p-2 text-md bg-[#C2D7FF] text-[#3069FE] cursor-pointer'  onClick={()=>ClickHandel()} >
            Filter
         { FilterClicked ?   <BiChevronUp className=' text-2xl translate-y-[-5%] sm:text-lg'></BiChevronUp> :  <BiChevronDown className=' text-2xl translate-y-[-5%] sm:text-lg '></BiChevronDown>}
            </div>
        </div>
        <div className="grid grid-cols-[repeat(4,220px)] gap-14 p-6 py-8 justify-center xl:gap-8 lg:gap-6 lg:px-4 lg:grid-cols-[repeat(3,220px)] md:gap-5 md:grid-cols-[repeat(3,190px)] sm:grid-cols-[repeat(2,200px)] 
        xs:grid-cols-[200px] ">
        {currentPosts.map(card=>{
            return <CardMato key={Math.random()} {...card} ></CardMato >
        })}
        </div>
        <div className="flex  justify-between mt-8 p-5 px-6 items-center">
            <Image alt='' src={Robot}  className='w-[90px] h-[130px] ' ></Image>
            <Pagination 
           totalPosts={Cards.length}
           postsPerPage={postsPerPage}
           setCurrentPage={setCurrentPage}
           currentPage={currentPage}
         />
        </div>
    </div>
    </main>
    </> );
}
 
export default Material;