import Search from '../../public/Search.png'
import Bg from '../../public/MaterialBg.png'
import Image from 'next/image'
import Robot from '../../public/Robot2.png'
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { BiChevronUp,BiChevronDown } from "react-icons/bi";
import { useState } from 'react';
import CardMato from '@/components/CardMato';
const Material = () => {
    const [FilterClicked, setFilterClicked] = useState<any>(false)
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
    return ( 
    <>
    <Navbar Element='Mato'></Navbar> 
    <main className='w-full bg-[#1976D226] '>
    <div style={{backgroundImage:`url(${Bg.src})`}}  className='w-full bg-cover h-[50vh] bg-center relative flex flex-col justify-center py-4 pt-7 gap-8 ' >
        {/* <div  style={{background:`linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(10, 102, 194, 0.14) 37.83%)`}} 
        className="bg absolute top-0 bottom-0 right-0 left-0 h-full w-full">
        </div> */}
        <h1 className='text-3xl text-white text-center' >Stop looking for a Material  - find it.</h1>
        <div className="flex items-center gap-3 justify-center">
            <span className='relative  w-[60%] '>
        <input type="text" placeholder='Search'  className=' pl-8 relative bg-white h-[55px] w-full  rounded-[10px] '/>
        <Image alt='search icone' src={Search}  className='absolute top-[50%] translate-y-[-50%] left-[1%] h-[20px] w-[20px] ' ></Image>
            </span>
        <button className='bg-[#1976D2] text-white rounded-[10px] h-[55px] px-4 text-lg  ' > Add new Material </button>
        </div>
    </div>    
    <div className="mt-6 ">
        <div className="flex justify-items-center justify-between px-12 font-semibold ">
            <h3>
            Found <span  className='text-[#3069FE] ' > 376 results   </span> 
            </h3>
            <div className='flex gap-1 items-center rounded-[5px] p-2 text-md bg-[#C2D7FF] text-[#3069FE] cursor-pointer'  onClick={()=>ClickHandel()} >
            Filter
         { FilterClicked ?   <BiChevronUp className=' text-2xl translate-y-[-5%] '></BiChevronUp> :  <BiChevronDown className=' text-2xl translate-y-[-5%] '></BiChevronDown>}
            </div>
        </div>
        <div className="grid grid-cols-[repeat(4,220px)] gap-12 p-6 justify-center  ">
        {Cards.map(card=>{
            return <CardMato key={card.name} {...card} ></CardMato >
        })}
        </div>
        <div className="flex mt-8 p-3 px-5">
            <Image alt='' src={Robot}  className='w-[90px] h-[130px] ' ></Image>
        </div>
    </div>
    </main>
    </> );
}
 
export default Material;