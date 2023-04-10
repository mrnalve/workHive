import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='flex justify-between items-center flex-wrap'>
            <div className='text-3xl text-black font-extrabold'>WorkHive</div>
            <div>
                <Link className='text-[16px] md:px-4 px-1 my-2 md:my-0 text-gray-400 leading-4 font-medium' to={'/'}>Home</Link>
                <Link className='text-[16px] md:px-4 px-1 my-2 md:my-0 text-gray-400 leading-4 font-medium'>Statistics</Link>
                <Link className='text-[16px] md:px-4 px-1 my-2 md:my-0 text-gray-400 leading-4 font-medium' to={'/applied-jobs'}>Applied Jobs</Link>
                <Link className='text-[16px] md:px-4 px-1 my-2 md:my-0 text-gray-400 leading-4 font-medium' to={'/blog'}>Blog</Link>
            </div>
            <div>
                <button className='applied-button'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;