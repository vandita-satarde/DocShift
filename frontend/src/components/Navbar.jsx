import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/DocShift-logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <div className='fixed top-0 left-0 w-full z-50 bg-[#0E1836] text-[19px] font-[400] text-white flex flex-col xl:flex-row xl:items-center justify-between px-6 xl:px-[120px] py-5 xl:h-[110px]'>
                {/* Logo and hamburger */}
                <div className='flex justify-between items-center w-full xl:w-auto'>
                    <Link to="/">
                        <img src={logo} className='w-[150px] h-[40px]' />
                    </Link>
                    <div className='xl:hidden'>
                        <button onClick={toggleMenu}>
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Nav links */}
                <div className={`text-[15px] xl:text-[19px] flex-col xl:flex-row flex xl:items-center justify-between xl:gap-14 gap-4 mt-4 xl:mt-0 ${isOpen ? 'flex' : 'hidden'} xl:flex`}>
                    <div className='flex flex-col xl:flex-row gap-4 xl:gap-7 text-center xl:text-left'>
                        <Link to="/" className='cursor-pointer'>Home</Link>
                        <Link to="/features" className='cursor-pointer'>Feature</Link>
                        <Link to="/use-cases" className='cursor-pointer'>Use Cases</Link>
                        <Link to="/security" className='cursor-pointer'>Security</Link>
                        <Link to="/integrations" className='cursor-pointer'>Integrations</Link>
                        <Link to="/pricing" className='cursor-pointer'>Pricing</Link>
                    </div>
                    <div className='text-center xl:text-left'>
                        <Link to="/contact">
                            <button className='cursor-pointer w-[150px] h-[45px] bg-[#FD6B70] mt-2 xl:mt-0'>Contact</button>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='text-[#808080]' />
        </>
    );
}

export default Navbar;
