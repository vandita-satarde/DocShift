import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/DocShift-logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({bgColor='bg-[#3d4762] '}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const baseClass = 'cursor-pointer hover:font-semibold'
    const activeClass ='border-b-2 border-[#FD6B70] ';

    return (
        <>
            <div className={`${bgColor} fixed top-0 left-0 w-full z-50 font-[400] text-white flex flex-col md:flex-row md:items-center justify-between px-6 lg:px-[120px] py-5 `}>
                {/* Logo and hamburger */}
                <div className='flex justify-between items-center w-full md:w-auto'>
                    <NavLink to="/">
                        <img src={logo} className='w-[100px] md:w-[135px] lg:w-[170px] h-auto' />
                    </NavLink>
                    <div className='md:hidden'>
                        <button onClick={toggleMenu}>
                            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>

                {/* Nav Links */}
                <div className={`text-[15px] md:text-[16px] lg:text-[19px] flex-col md:flex-row flex md:items-center justify-between gap-4 md:gap-5 lg:gap-14 mt-4 md:mt-0 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                    <div className='flex flex-col md:flex-row items-center md:items-start justify-center gap-3 md:gap-3 lg:gap-7'>
                        <NavLink to="/" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""} `} >Home</NavLink>
                        <NavLink to="/features" className={ ({isActive}) => `${baseClass} ${isActive ? activeClass : ""} ` } >Feature</NavLink>
                        <NavLink to="/use-cases" className={ ({isActive}) => `${baseClass} ${isActive ? activeClass : ""} ` } >Use Cases</NavLink>
                        <NavLink to="/security" className={ ({isActive}) => `${baseClass} ${isActive ? activeClass : ""}` } >Security</NavLink>
                        <NavLink to="/integrations" className={ ({isActive}) => `${baseClass} ${isActive ? activeClass : ""}` } >Integrations</NavLink>
                        <NavLink to="/pricing" className={ ({isActive}) => `${baseClass} ${isActive ? activeClass : ""} ` } >Pricing</NavLink>
                    </div>
                    <div className='text-center md:text-left'>
                        <NavLink to="/contact">
                            <button className=' rounded-xs cursor-pointer w-[90px] lg:w-[150px] h-[30px] lg:h-[45px] bg-[#FD6B70] mt-2 md:mt-0'>Contact</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <hr className='text-[#808080]' />
        </>
    );
}

export default Navbar;
