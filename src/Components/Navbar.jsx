import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className=''>
            <ul className='flex items-center justify-center gap-2'>
                <li>Home </li>
                <li><Link href={'/about'}>About </Link></li>
            </ul>
        </div>
    );
};

export default Navbar;