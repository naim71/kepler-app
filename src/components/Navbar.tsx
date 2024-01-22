import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../assets/Kepler-LOGO.png'

const Navbar = () => {
    return (
        <nav className="flex justify-evenly items-center mx-36 bg-white">
            <Link href={''} className='mt-5 mb-5 mr-80'><Image src={logo} width={150} height={50} alt='logo' /></Link>
            <ul className="flex justify-center items-center space-x-6 font-medium">
                <Link href={'/'} className='hover:text-deep-orange'>Home</Link>
                <Link href={'/about'} className='hover:text-deep-orange'>About Us</Link>
                <Link href={'/'} className='hover:text-deep-orange'>Courses</Link>
                <Link href={'/assesment'} className='hover:text-deep-orange'>Exam Assesment</Link>
                <Link href={'/'} className='hover:text-deep-orange'>Study Overseas</Link>
            </ul>
            <button className="w-28 py-2 bg-deep-orange rounded font-semibold text-white">Login</button>
        </nav>
    );
};

export default Navbar;