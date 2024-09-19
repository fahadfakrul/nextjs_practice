import Link from 'next/link';
import React from 'react';

const AboutComponents = () => {
    return (
        <div className='flex justify-around gap-4'>
           <button className='btn bg-gray-600 rounded'> <Link href={'/about/history'}>History</Link></button>
           <button className='btn bg-gray-600 rounded'> <Link href={'/about/mission'}>Mission</Link></button>
        </div>
    );
};

export default AboutComponents;