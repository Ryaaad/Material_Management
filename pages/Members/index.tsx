import Search from '../../public/Search.png'
import Bg from '../../public/MemberBg.png'
import Image from 'next/image'
import Robot from '../../public/Robot2.png'
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { BiChevronUp,BiChevronDown } from "react-icons/bi";
import { useEffect, useRef, useState } from 'react';
import CardMMB from '@/components/CardMMB';
import Pagination from '@/components/Pagination';
import AddMember from '@/components/AddMember'
// import { useQuery, useMutation } from '@tanstack/react-query/';
const Material = () => {
    const [FilterClicked, setFilterClicked] = useState<any>(false)
    const [Add, setAdd] = useState(false)
    const ClickHandel=()=>{
        setFilterClicked((prev: boolean)=>prev=!prev)
    }
   const [inputValue, setInputValue] = useState<any>();
const FirstCards=[ 
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
                        {
                            memberId :6,
                            firstName:'Allali',
                            lastName:'Eyad',
                            img:'',
                            discord:'424977234575491084',
                            Tel:'String',
                            },
                            {
                                memberId :7,
                                firstName:'Allali',
                                lastName:'Eyad',
                                img:'',
                                discord:'424977234575491084',
                                Tel:'String',
                                },
                                {
                                    memberId :8,
                                    firstName:'Allali',
                                    lastName:'Eyad',
                                    img:'',
                                    discord:'424977234575491084',
                                    Tel:'String',
                                    },
                                    {
                                        memberId :9,
                                        firstName:'Allali',
                                        lastName:'Eyad',
                                        img:'',
                                        discord:'424977234575491084',
                                        Tel:'String',
                                        },
                                        {
                                            memberId :10,
                                            firstName:'Allali',
                                            lastName:'Eyad',
                                            img:'',
                                            discord:'424977234575491084',
                                            Tel:'String',
                                            },
                                            {
                                                memberId :11,
                                                firstName:'Allali',
                                                lastName:'Eyad',
                                                img:'',
                                                discord:'424977234575491084',
                                                Tel:'String',
                                                },
                                                {
                                                    memberId :11,
                                                    firstName:'Allali',
                                                    lastName:'Eyad',
                                                    img:'',
                                                    discord:'424977234575491084',
                                                    Tel:'String',
                                                    }, 
                                                                                                                                                                                                    {
                                                                                                                                                                                                        memberId :1,
                                                                                                                                                                                                        firstName:'DAZe',
                                                                                                                                                                                                        lastName:'Ryad',
                                                                                                                                                                                                        img:'',
                                                                                                                                                                                                        discord:'424977234575491084',
                                                                                                                                                                                                        Tel:'String',
                                                                                                                                                                                                        },
                                                                                                                                                                                                        {
                                                                                                                                                                                                            memberId :2,
                                                                                                                                                                                                            firstName:'DAZe',
                                                                                                                                                                                                            lastName:'Eyad',
                                                                                                                                                                                                            img:'',
                                                                                                                                                                                                            discord:'424977234575491084',
                                                                                                                                                                                                            Tel:'String',
                                                                                                                                                                                                            },
                                                                                                                                                                                                            {
                                                                                                                                                                                                                memberId :3,
                                                                                                                                                                                                                firstName:'DAZe',
                                                                                                                                                                                                                lastName:'Eyad',
                                                                                                                                                                                                                img:'',
                                                                                                                                                                                                                discord:'424977234575491084',
                                                                                                                                                                                                                Tel:'String',
                                                                                                                                                                                                                },
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    memberId :4,
                                                                                                                                                                                                                    firstName:'DAZe',
                                                                                                                                                                                                                    lastName:'Eyad',
                                                                                                                                                                                                                    img:'',
                                                                                                                                                                                                                    discord:'424977234575491084',
                                                                                                                                                                                                                    Tel:'String',
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        memberId :5,
                                                                                                                                                                                                                        firstName:'DAZe',
                                                                                                                                                                                                                        lastName:'Eyad',
                                                                                                                                                                                                                        img:'',
                                                                                                                                                                                                                        discord:'424977234575491084',
                                                                                                                                                                                                                        Tel:'String',
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            memberId :6,
                                                                                                                                                                                                                            firstName:'DAZe',
                                                                                                                                                                                                                            lastName:'Eyad',
                                                                                                                                                                                                                            img:'',
                                                                                                                                                                                                                            discord:'424977234575491084',
                                                                                                                                                                                                                            Tel:'String',
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                memberId :7,
                                                                                                                                                                                                                                firstName:'DAZe',
                                                                                                                                                                                                                                lastName:'Eyad',
                                                                                                                                                                                                                                img:'',
                                                                                                                                                                                                                                discord:'424977234575491084',
                                                                                                                                                                                                                                Tel:'String',
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                    memberId :8,
                                                                                                                                                                                                                                    firstName:'DAZe',
                                                                                                                                                                                                                                    lastName:'Eyad',
                                                                                                                                                                                                                                    img:'',
                                                                                                                                                                                                                                    discord:'424977234575491084',
                                                                                                                                                                                                                                    Tel:'String',
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                        memberId :9,
                                                                                                                                                                                                                                        firstName:'DAZe',
                                                                                                                                                                                                                                        lastName:'Eyad',
                                                                                                                                                                                                                                        img:'',
                                                                                                                                                                                                                                        discord:'424977234575491084',
                                                                                                                                                                                                                                        Tel:'String',
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            memberId :10,
                                                                                                                                                                                                                                            firstName:'DAZe',
                                                                                                                                                                                                                                            lastName:'Eyad',
                                                                                                                                                                                                                                            img:'',
                                                                                                                                                                                                                                            discord:'424977234575491084',
                                                                                                                                                                                                                                            Tel:'String',
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                memberId :11,
                                                                                                                                                                                                                                                firstName:'DAZe',
                                                                                                                                                                                                                                                lastName:'Eyad',
                                                                                                                                                                                                                                                img:'',
                                                                                                                                                                                                                                                discord:'424977234575491084',
                                                                                                                                                                                                                                                Tel:'String',
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                    memberId :0,
                                                                                                                                                                                                                                                    firstName:'DAZe',
                                                                                                                                                                                                                                                    lastName:'Eyad',
                                                                                                                                                                                                                                                    img:'',
                                                                                                                                                                                                                                                    discord:'424977234575491084',
                                                                                                                                                                                                                                                    Tel:'String',
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                        memberId :1,
                                                                                                                                                                                                                                                        firstName:'DAZe',
                                                                                                                                                                                                                                                        lastName:'Ryad',
                                                                                                                                                                                                                                                        img:'',
                                                                                                                                                                                                                                                        discord:'424977234575491084',
                                                                                                                                                                                                                                                        Tel:'String',
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                                            memberId :2,
                                                                                                                                                                                                                                                            firstName:'DAZe',
                                                                                                                                                                                                                                                            lastName:'Eyad',
                                                                                                                                                                                                                                                            img:'',
                                                                                                                                                                                                                                                            discord:'424977234575491084',
                                                                                                                                                                                                                                                            Tel:'String',
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                memberId :3,
                                                                                                                                                                                                                                                                firstName:'DAZe',
                                                                                                                                                                                                                                                                lastName:'Eyad',
                                                                                                                                                                                                                                                                img:'',
                                                                                                                                                                                                                                                                discord:'424977234575491084',
                                                                                                                                                                                                                                                                Tel:'String',
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                                    memberId :4,
                                                                                                                                                                                                                                                                    firstName:'DAZe',
                                                                                                                                                                                                                                                                    lastName:'Eyad',
                                                                                                                                                                                                                                                                    img:'',
                                                                                                                                                                                                                                                                    discord:'424977234575491084',
                                                                                                                                                                                                                                                                    Tel:'String',
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                        memberId :5,
                                                                                                                                                                                                                                                                        firstName:'DAZe',
                                                                                                                                                                                                                                                                        lastName:'Eyad',
                                                                                                                                                                                                                                                                        img:'',
                                                                                                                                                                                                                                                                        discord:'424977234575491084',
                                                                                                                                                                                                                                                                        Tel:'String',
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                                                            memberId :6,
                                                                                                                                                                                                                                                                            firstName:'DAZe',
                                                                                                                                                                                                                                                                            lastName:'Eyad',
                                                                                                                                                                                                                                                                            img:'',
                                                                                                                                                                                                                                                                            discord:'424977234575491084',
                                                                                                                                                                                                                                                                            Tel:'String',
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                memberId :7,
                                                                                                                                                                                                                                                                                firstName:'DAZe',
                                                                                                                                                                                                                                                                                lastName:'Eyad',
                                                                                                                                                                                                                                                                                img:'',
                                                                                                                                                                                                                                                                                discord:'424977234575491084',
                                                                                                                                                                                                                                                                                Tel:'String',
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                                                    memberId :8,
                                                                                                                                                                                                                                                                                    firstName:'DAZe',
                                                                                                                                                                                                                                                                                    lastName:'Eyad',
                                                                                                                                                                                                                                                                                    img:'',
                                                                                                                                                                                                                                                                                    discord:'424977234575491084',
                                                                                                                                                                                                                                                                                    Tel:'String',
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                                        memberId :9,
                                                                                                                                                                                                                                                                                        firstName:'DAZe',
                                                                                                                                                                                                                                                                                        lastName:'Eyad',
                                                                                                                                                                                                                                                                                        img:'',
                                                                                                                                                                                                                                                                                        discord:'424977234575491084',
                                                                                                                                                                                                                                                                                        Tel:'String',
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                                                                            memberId :10,
                                                                                                                                                                                                                                                                                            firstName:'DAZe',
                                                                                                                                                                                                                                                                                            lastName:'Eyad',
                                                                                                                                                                                                                                                                                            img:'',
                                                                                                                                                                                                                                                                                            discord:'424977234575491084',
                                                                                                                                                                                                                                                                                            Tel:'String',
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                memberId :11,
                                                                                                                                                                                                                                                                                                firstName:'DAZe',
                                                                                                                                                                                                                                                                                                lastName:'Eyad',
                                                                                                                                                                                                                                                                                                img:'',
                                                                                                                                                                                                                                                                                                discord:'424977234575491084',
                                                                                                                                                                                                                                                                                                Tel:'String',
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                    {
    memberId :0,
    firstName:'DAZe',
    lastName:'Eyad',
    img:'',
    discord:'424977234575491084',
    Tel:'String',
    },
    {
        memberId :1,
        firstName:'DAZe',
        lastName:'Ryad',
        img:'',
        discord:'424977234575491084',
        Tel:'String',
        },
        {
            memberId :2,
            firstName:'DAZe',
            lastName:'Eyad',
            img:'',
            discord:'424977234575491084',
            Tel:'String',
            },
            {
                memberId :3,
                firstName:'DAZe',
                lastName:'Eyad',
                img:'',
                discord:'424977234575491084',
                Tel:'String',
                },
                {
                    memberId :4,
                    firstName:'DAZe',
                    lastName:'Eyad',
                    img:'',
                    discord:'424977234575491084',
                    Tel:'String',
                    },
                    {
                        memberId :5,
                        firstName:'DAZe',
                        lastName:'Eyad',
                        img:'',
                        discord:'424977234575491084',
                        Tel:'String',
                        },
                        {
                            memberId :6,
                            firstName:'DAZe',
                            lastName:'Eyad',
                            img:'',
                            discord:'424977234575491084',
                            Tel:'String',
                            },
                            {
                                memberId :7,
                                firstName:'DAZe',
                                lastName:'Eyad',
                                img:'',
                                discord:'424977234575491084',
                                Tel:'String',
                                },
                                {
                                    memberId :8,
                                    firstName:'DAZe',
                                    lastName:'Eyad',
                                    img:'',
                                    discord:'424977234575491084',
                                    Tel:'String',
                                    },
                                    {
                                        memberId :9,
                                        firstName:'DAZe',
                                        lastName:'Eyad',
                                        img:'',
                                        discord:'424977234575491084',
                                        Tel:'String',
                                        },
                                        {
                                            memberId :10,
                                            firstName:'DAZe',
                                            lastName:'Eyad',
                                            img:'',
                                            discord:'424977234575491084',
                                            Tel:'String',
                                            },
                                            {
                                                memberId :11,
                                                firstName:'DAZe',
                                                lastName:'Eyad',
                                                img:'',
                                                discord:'424977234575491084',
                                                Tel:'String',
                                                },
                                                {
                                                    memberId :0,
                                                    firstName:'DAZe',
                                                    lastName:'Eyad',
                                                    img:'',
                                                    discord:'424977234575491084',
                                                    Tel:'String',
                                                    },
                                                    {
                                                        memberId :1,
                                                        firstName:'DAZe',
                                                        lastName:'Ryad',
                                                        img:'',
                                                        discord:'424977234575491084',
                                                        Tel:'String',
                                                        },
                                                        {
                                                            memberId :2,
                                                            firstName:'DAZe',
                                                            lastName:'Eyad',
                                                            img:'',
                                                            discord:'424977234575491084',
                                                            Tel:'String',
                                                            },
                                                            {
                                                                memberId :3,
                                                                firstName:'DAZe',
                                                                lastName:'Eyad',
                                                                img:'',
                                                                discord:'424977234575491084',
                                                                Tel:'String',
                                                                },
                                                                {
                                                                    memberId :4,
                                                                    firstName:'DAZe',
                                                                    lastName:'Eyad',
                                                                    img:'',
                                                                    discord:'424977234575491084',
                                                                    Tel:'String',
                                                                    },
                                                                    {
                                                                        memberId :5,
                                                                        firstName:'DAZe',
                                                                        lastName:'Eyad',
                                                                        img:'',
                                                                        discord:'424977234575491084',
                                                                        Tel:'String',
                                                                        },
                                                                        {
                                                                            memberId :6,
                                                                            firstName:'DAZe',
                                                                            lastName:'Eyad',
                                                                            img:'',
                                                                            discord:'424977234575491084',
                                                                            Tel:'String',
                                                                            },
                                                                            {
                                                                                memberId :7,
                                                                                firstName:'DAZe',
                                                                                lastName:'Eyad',
                                                                                img:'',
                                                                                discord:'424977234575491084',
                                                                                Tel:'String',
                                                                                },
                                                                                {
                                                                                    memberId :8,
                                                                                    firstName:'DAZe',
                                                                                    lastName:'Eyad',
                                                                                    img:'',
                                                                                    discord:'424977234575491084',
                                                                                    Tel:'String',
                                                                                    },
                                                                                    {
                                                                                        memberId :9,
                                                                                        firstName:'DAZe',
                                                                                        lastName:'Eyad',
                                                                                        img:'',
                                                                                        discord:'424977234575491084',
                                                                                        Tel:'String',
                                                                                        },
                                                                                        {
                                                                                            memberId :10,
                                                                                            firstName:'DAZe',
                                                                                            lastName:'Eyad',
                                                                                            img:'',
                                                                                            discord:'424977234575491084',
                                                                                            Tel:'String',
                                                                                            },
                                                                                            {
                                                                                                memberId :11,
                                                                                                firstName:'DAZe',
                                                                                                lastName:'Eyad',
                                                                                                img:'',
                                                                                                discord:'424977234575491084',
                                                                                                Tel:'String',
                                                                                                },
                                                                                            
                                    {
                                        memberId :9,
                                        firstName:'DAZe',
                                        lastName:'Eyad',
                                        img:'',
                                        discord:'424977234575491084',
                                        Tel:'String',
                                        },
                                        {
                                            memberId :10,
                                            firstName:'DAZe',
                                            lastName:'Eyad',
                                            img:'',
                                            discord:'424977234575491084',
                                            Tel:'String',
                                            },
                                            {
                                                memberId :11,
                                                firstName:'DAZe',
                                                lastName:'Eyad',
                                                img:'',
                                                discord:'424977234575491084',
                                                Tel:'String',
                                                },
                                                    {
    memberId :0,
    firstName:'DAZe',
    lastName:'Eyad',
    img:'',
    discord:'424977234575491084',
    Tel:'String',
    },
    {
        memberId :1,
        firstName:'DAZe',
        lastName:'Ryad',
        img:'',
        discord:'424977234575491084',
        Tel:'String',
        },
        {
            memberId :2,
            firstName:'DAZe',
            lastName:'Eyad',
            img:'',
            discord:'424977234575491084',
            Tel:'String',
            },
            {
                memberId :3,
                firstName:'DAZe',
                lastName:'Eyad',
                img:'',
                discord:'424977234575491084',
                Tel:'String',
                },
                {
                    memberId :4,
                    firstName:'DAZe',
                    lastName:'Eyad',
                    img:'',
                    discord:'424977234575491084',
                    Tel:'String',
                    },
                    {
                        memberId :5,
                        firstName:'DAZe',
                        lastName:'Eyad',
                        img:'',
                        discord:'424977234575491084',
                        Tel:'String',
                        },
                        {
                            memberId :6,
                            firstName:'DAZe',
                            lastName:'Eyad',
                            img:'',
                            discord:'424977234575491084',
                            Tel:'String',
                            },
                            {
                                memberId :7,
                                firstName:'DAZe',
                                lastName:'Eyad',
                                img:'',
                                discord:'424977234575491084',
                                Tel:'String',
                                },
                                {
                                    memberId :8,
                                    firstName:'DAZe',
                                    lastName:'Eyad',
                                    img:'',
                                    discord:'424977234575491084',
                                    Tel:'String',
                                    },
                                    {
                                        memberId :9,
                                        firstName:'DAZe',
                                        lastName:'Eyad',
                                        img:'',
                                        discord:'424977234575491084',
                                        Tel:'String',
                                        },
                                        {
                                            memberId :10,
                                            firstName:'DAZe',
                                            lastName:'Eyad',
                                            img:'',
                                            discord:'424977234575491084',
                                            Tel:'String',
                                            },
                                            {
                                                memberId :11,
                                                firstName:'DAZe',
                                                lastName:'Eyad',
                                                img:'',
                                                discord:'424977234575491084',
                                                Tel:'String',
                                                },
                                                    {
    memberId :0,
    firstName:'DAZe',
    lastName:'Eyad',
    img:'',
    discord:'424977234575491084',
    Tel:'String',
    },
    {
        memberId :1,
        firstName:'DAZe',
        lastName:'Ryad',
        img:'',
        discord:'424977234575491084',
        Tel:'String',
        },
        {
            memberId :2,
            firstName:'DAZe',
            lastName:'Eyad',
            img:'',
            discord:'424977234575491084',
            Tel:'String',
            },
            {
                memberId :3,
                firstName:'DAZe',
                lastName:'Eyad',
                img:'',
                discord:'424977234575491084',
                Tel:'String',
                },
                {
                    memberId :4,
                    firstName:'DAZe',
                    lastName:'Eyad',
                    img:'',
                    discord:'424977234575491084',
                    Tel:'String',
                    },
                    {
                        memberId :5,
                        firstName:'DAZe',
                        lastName:'Eyad',
                        img:'',
                        discord:'424977234575491084',
                        Tel:'String',
                        },
                        {
                            memberId :6,
                            firstName:'DAZe',
                            lastName:'Eyad',
                            img:'',
                            discord:'424977234575491084',
                            Tel:'String',
                            },
                            {
                                memberId :7,
                                firstName:'DAZe',
                                lastName:'Eyad',
                                img:'',
                                discord:'424977234575491084',
                                Tel:'String',
                                },
                                {
                                    memberId :8,
                                    firstName:'DAZe',
                                    lastName:'Eyad',
                                    img:'',
                                    discord:'424977234575491084',
                                    Tel:'String',
                                    },
                                    {
                                        memberId :9,
                                        firstName:'DAZe',
                                        lastName:'Eyad',
                                        img:'',
                                        discord:'424977234575491084',
                                        Tel:'String',
                                        },
                                        {
                                            memberId :10,
                                            firstName:'DAZe',
                                            lastName:'Eyad',
                                            img:'',
                                            discord:'424977234575491084',
                                            Tel:'String',
                                            },
                                            {
                                                memberId :11,
                                                firstName:'DAZe',
                                                lastName:'Eyad',
                                                img:'',
                                                discord:'424977234575491084',
                                                Tel:'String',
                                                },
                                                    {
    memberId :0,
    firstName:'DAZe',
    lastName:'Eyad',
    img:'',
    discord:'424977234575491084',
    Tel:'String',
    },
    {
        memberId :1,
        firstName:'DAZe',
        lastName:'Ryad',
        img:'',
        discord:'424977234575491084',
        Tel:'String',
        },
        {
            memberId :2,
            firstName:'DAZe',
            lastName:'Eyad',
            img:'',
            discord:'424977234575491084',
            Tel:'String',
            },
            {
                memberId :3,
                firstName:'DAZe',
                lastName:'Eyad',
                img:'',
                discord:'424977234575491084',
                Tel:'String',
                },
                {
                    memberId :4,
                    firstName:'DAZe',
                    lastName:'Eyad',
                    img:'',
                    discord:'424977234575491084',
                    Tel:'String',
                    },
                    {
                        memberId :5,
                        firstName:'DAZe',
                        lastName:'Eyad',
                        img:'',
                        discord:'424977234575491084',
                        Tel:'String',
                        },
                        {
                            memberId :6,
                            firstName:'DAZe',
                            lastName:'Eyad',
                            img:'',
                            discord:'424977234575491084',
                            Tel:'String',
                            },
                            {
                                memberId :7,
                                firstName:'DAZe',
                                lastName:'Eyad',
                                img:'',
                                discord:'424977234575491084',
                                Tel:'String',
                                },
                                {
                                    memberId :8,
                                    firstName:'DAZe',
                                    lastName:'Eyad',
                                    img:'',
                                    discord:'424977234575491084',
                                    Tel:'String',
                                    },
                                    {
                                        memberId :9,
                                        firstName:'DAZe',
                                        lastName:'Eyad',
                                        img:'',
                                        discord:'424977234575491084',
                                        Tel:'String',
                                        },
                                        {
                                            memberId :10,
                                            firstName:'DAZe',
                                            lastName:'Eyad',
                                            img:'',
                                            discord:'424977234575491084',
                                            Tel:'String',
                                            },
                                            {
                                                memberId :11,
                                                firstName:'DAZe',
                                                lastName:'Eyad',
                                                img:'',
                                                discord:'424977234575491084',
                                                Tel:'String',
                                                },
]
    const [Cards, setCards] = useState<any>([0])
    const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = Cards.slice(firstPostIndex, lastPostIndex);

    useEffect(() => {
        if(inputValue!=undefined)
   {  let filterCards=  FirstCards.filter((card)=> card.firstName.includes(inputValue) || card.lastName.includes(inputValue) || `${card.firstName} ${card.lastName}`.includes(inputValue)  )
      setCards(filterCards)}
      else setCards(FirstCards)
    }, [inputValue])
    
    return ( 
        <>
        <Navbar Element='MMB'></Navbar> 
    
        { Add &&    <div className="fixed top-0 left-0 bottom-0 right-0 w-full grid place-content-center z-10 h-[100vh] bg-[#00000045]">
                <AddMember setAdd={setAdd}></AddMember>
                  
                  </div>    }
        <main className='w-full bg-[#1976D226] '>
        <div style={{backgroundImage:`url(${Bg.src})`}}  className='w-full bg-cover h-[50vh] bg-center relative flex flex-col justify-center py-4 pt-7 gap-8 md:h-[42vh] sm:h-[38vh] xs:h-[30vh] xs:gap-5 ' >
            <h1 className='text-3xl text-white text-center md:text-2xl sm:text-xl xs:text-lg ' >Stop looking for a Person  - find it.</h1>
            <div className="flex items-center gap-3 justify-center sm:gap-2  xs:flex-col xs:items-center ">
                <span className='relative w-[60vw] md:w-[55vw] sm:w-[50vw] xs:w-[75vw] '>
            <input type="text" value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} placeholder='Search' className=' pl-8 relative bg-white h-[55px] w-full  rounded-[10px] md:pl-6 md:h-[48px] md:rounded-[8px] sm:h-[45px] sm:pl-6 sm:rounded-[8px] xs:h-[40px]  '/>
            <Image alt='search icone' src={Search}  className='absolute top-[50%] translate-y-[-50%] left-[1%] h-[20px] w-[20px] md:h-[15px]  md:w-[15px] sm:h-[14px] sm:w-[14px] ' ></Image>
                </span>
            <button className='bg-[#1976D2] text-white rounded-[10px] h-[55px] px-4 text-lg md:h-[48px] md:rounded-[8px] sm:h-[45px] sm:px-2 sm:rounded-[8px] sm:text-sm  xs:h-[30px] xs:text-[10px]  xs:rounded-[5px] xs:px-2' onClick={()=>setAdd(true)} > Add  Person </button>
            </div>
        </div>    
        <div className="mt-6 ">
            <div className="flex justify-items-center justify-between px-12 font-semibold sm:text-sm xs:text-[12px] ">
                <h3>
                Found <span  className='text-[#3069FE] ' > {Cards.length} results   </span> 
                </h3>
                <div className='flex gap-1 items-center rounded-[5px] p-2 text-md bg-[#C2D7FF] text-[#3069FE] cursor-pointer'  onClick={()=>ClickHandel()} >
                Filter
             { FilterClicked ?   <BiChevronUp className=' text-2xl translate-y-[-5%] sm:text-lg  '></BiChevronUp> :  <BiChevronDown className=' text-2xl translate-y-[-5%] sm:text-lg '></BiChevronDown>}
                </div>
            </div>
            <div className="grid grid-cols-[repeat(4,220px)] gap-14 p-6 py-8 justify-center xl:gap-8 lg:gap-6 lg:px-4 lg:grid-cols-[repeat(3,220px)] md:gap-5 md:grid-cols-[repeat(3,190px)] sm:grid-cols-[repeat(2,200px)] 
            xs:grid-cols-[200px] ">
            {currentPosts.map((card:any)=>{
                return <CardMMB key={Math.random()} {...card} ></CardMMB >
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
        </>
);
}
 
export default Material;