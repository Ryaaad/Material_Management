import Search from '../../public/Search.png'
import Bg from '../../public/MemberBg.png'
import Image from 'next/image'
import Robot from '../../public/Robot2.png'
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { BiChevronUp,BiChevronDown } from "react-icons/bi";
import { useState } from 'react';
import CardMMB from '@/components/CardMMB';
const Material = () => {
    const [FilterClicked, setFilterClicked] = useState<any>(false)
    const ClickHandel=()=>{
        setFilterClicked((prev: boolean)=>prev=!prev)
    }

    const Cards=[ 
        {
        memberId :0,
        firstName:'Allali',
        lastName:'Eyad',
        img:'',
        discord:'424977234575491084',
        Tel:'String',
        },
        {
            memberId :1,
            firstName:'Allali',
            lastName:'Ryad',
            img:'',
            discord:'424977234575491084',
            Tel:'String',
            },
            {
                memberId :2,
                firstName:'Allali',
                lastName:'Eyad',
                img:'',
                discord:'424977234575491084',
                Tel:'String',
                },
                {
                    memberId :3,
                    firstName:'Allali',
                    lastName:'Eyad',
                    img:'',
                    discord:'424977234575491084',
                    Tel:'String',
                    },
                    {
                        memberId :4,
                        firstName:'Allali',
                        lastName:'Eyad',
                        img:'',
                        discord:'424977234575491084',
                        Tel:'String',
                        },
                        {
                            memberId :5,
                            firstName:'Allali',
                            lastName:'Eyad',
                            img:'',
                            discord:'424977234575491084',
                            Tel:'String',
                            },
                        
    ]
    return ( 
    <>
    <Navbar Element='MMB'></Navbar> 
    <main className='w-full bg-[#1976D226] '>
    <div style={{backgroundImage:`url(${Bg.src})`}}  className='w-full bg-cover h-[50vh] bg-center relative flex flex-col justify-center py-4 pt-7 gap-8 filter ' >
 
        <h1 className='text-3xl text-white text-center' >Stop looking for a Person  - find it.</h1>
        <div className="flex items-center gap-3 justify-center">
            <span className='relative  w-[60%] '>
        <input type="text" placeholder='Search'  className=' pl-8 relative bg-white h-[55px] w-full  rounded-[10px] '/>
        <Image alt='search icone' src={Search}  className='absolute top-[50%] translate-y-[-50%] left-[1%] h-[20px] w-[20px] ' ></Image>
            </span>
        <button className='bg-[#1976D2] text-white rounded-[10px] h-[55px] px-4 text-lg  ' > Add new Person </button>
        </div>
    </div>    
    <div className="mt-6 ">
        <div className="flex justify-items-center justify-between px-12 font-semibold ">
            <h3>
            Found <span  className='text-[#3069FE] ' > 375 results   </span> 
            </h3>
            <div className='flex gap-1 items-center rounded-[5px] p-2 text-md bg-[#C2D7FF] text-[#3069FE] cursor-pointer'  onClick={()=>ClickHandel()} >
            Filter
         { FilterClicked ?   <BiChevronUp className=' text-2xl translate-y-[-5%] '></BiChevronUp> :  <BiChevronDown className=' text-2xl translate-y-[-5%] '></BiChevronDown>}
            </div>
        </div>
        <div className="grid grid-cols-[repeat(4,220px)] gap-12 p-6 justify-center  ">
        {Cards.map(card=>{
            return <CardMMB key={card.memberId} {...card} ></CardMMB >
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