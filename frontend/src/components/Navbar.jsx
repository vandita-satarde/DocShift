import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/DocShift-logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { base } from 'framer-motion/client';

function Navbar({bgColor='bg-[#3d4762] '}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const baseClass = 'cursor-pointer hover:font-semibold'
    const activeClass ='border-b-2 border-[#FD6B70]';

    return (
        <>
            <div className={`${bgColor} fixed top-0 left-0 w-full z-50 text-[19px] font-[400] text-white flex flex-col md:flex-row md:items-center justify-between px-6 md:px-[120px] py-5 md:h-[85px]`}>
                {/* Logo and hamburger */}
                <div className='flex justify-between items-center w-full xl:w-auto'>
                    <NavLink to="/">
                        <img src={logo} className='w-[100px] md:w-[170px] h-auto' />
                    </NavLink>
                    <div className='xl:hidden'>
                        <button onClick={toggleMenu}>
                            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>

                {/* Nav Links */}
                <div className={`text-[15px] xl:text-[19px] flex-col xl:flex-row flex xl:items-center justify-between xl:gap-14 gap-4 mt-4 xl:mt-0 ${isOpen ? 'flex' : 'hidden'} xl:flex`}>
                    <div className='flex flex-col xl:flex-row gap-4 xl:gap-7 text-center xl:text-left'>
                        <NavLink to="/" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""} `} >Home</NavLink>
                        <NavLink to="/features" className={ ({isActive}) => `${baseClass} ${isActive ? activeClass : ""} ` } >Feature</NavLink>
                        <NavLink to="/use-cases" className={ ({isActive}) => `${baseClass} ${isActive ? activeClass : ""} ` } >Use Cases</NavLink>
                        <NavLink to="/security" className={ ({isActive}) => `${baseClass} ${isActive ? activeClass : ""}` } >Security</NavLink>
                        <NavLink to="/integrations" className={ ({isActive}) => `${baseClass} ${isActive ? activeClass : ""}` } >Integrations</NavLink>
                        <NavLink to="/pricing" className={ ({isActive}) => `${baseClass} ${isActive ? activeClass : ""} ` } >Pricing</NavLink>
                    </div>
                    <div className='text-center xl:text-left'>
                        <NavLink to="/contact">
                            <button className='rounded-xs cursor-pointer w-[150px] h-[45px] bg-[#FD6B70] mt-2 xl:mt-0'>Contact</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <hr className='text-[#808080]' />
        </>
    );
}

export default Navbar;
