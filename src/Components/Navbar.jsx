"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    const router = useRouter()
    const links = [
        {
            title : "About",
            path : '/about'
        },
        {
            title : "Services",
            path : '/services'
        },
        {
            title : "Contact",
            path : '/contact'
        }
        ,
        {
            title : "Blogs",
            path : '/blogs'
        }
        ,
        {
            title : "Categories",
            path : '/categories'
        }
        ,
        {
            title : "Dashboard",
            path : '/dashboard'
        }
        
    ]
    const handler = () => {
           router.push('/login')
    }
    if (pathName.includes('dashboard'))
        return(
    <div className='bg-green-400'>Dashboard Layout </div>
        )
    return (
        <div className=''>
            <ul className='flex items-center justify-center gap-2'>
               {
                links?.map((link)=> <Link className={`${pathName === link.path && "text-cyan-300"}`} key={link.path} href={link.path}>{link.title}</Link>)
               }
               <button  onClick={handler} className='btn bg-slate-500 rounded p-2 text-cyan-800'>Login</button>
            </ul>
            
        </div>
    );
};

export default Navbar;