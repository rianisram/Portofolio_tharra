"use client";
import React, { useState } from "react";
import Link from "next/link";


export default function Navbar  () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-[#FFF4EB] sticky top-0 z-50">
            <nav className="max-w-[1600px] lg:mx-auto flex items-center justify-between px-5 py-4">
                <div className="flex items-start">
                <h1 className="font-extrabold text-1xl sm:text-4xl md:text-2xl flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-[#e4e4e6] via-[#2d5b70] to-[#a39f97] mb-1 sm:mb-1 gap-3">
                <span className="text-[#000000]"><Link href="/"> My Portfolio</Link></span>
            </h1>
                </div>

                {/* Hamburger menu for small screens */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Main Navigation for Large Screens */}
                <div className="hidden lg:flex lg:flex-row lg:gap-5 pr-10 ">
                    <Link href="/" className="text-[#000000] transition-transform duration-300 transform hover:scale-125 font-semibold">Home</Link>
                    <Link href="/About" className="text-[#000000] transition-transform duration-300 transform hover:scale-125 font-semibold">About Me</Link>
                    <Link href="/Skills" className="text-[#000000] transition-transform duration-300 transform hover:scale-125 font-semibold">Skills</Link>
                    <Link href="/MyProject" className="text-[#000000] transition-transform duration-300 transform hover:scale-125 font-semibold">Project</Link>
                    <Link href="/Servicess" className="text-[#000000] transition-transform duration-300 transform hover:scale-125 font-semibold">Services</Link>
                    
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden` } >
                <div className="flex flex-col gap-4 items-start bg-[#FFF4EB]">
                    <Link href="/" className="text-[#000000] transition-transform duration-300 transform hover:scale-125 font-semibold">Home</Link>
                    <Link href="/About" className="text-[#000000] transition-transform duration-300 transform hover:scale-125 font-semibold">About Me</Link>
                    <Link href="/Skills" className="text-[#000000] transition-transform duration-300 transform hover:scale-125 font-semibold">Skills</Link>
                    <Link href="/MyProject" className="text-[#000000] transition-transform duration-300 transform hover:scale-125 font-semibold">Projects</Link>
                    <Link href="/Servicess" className="text-[#000000] transition-transform duration-300 transform hover:scale-125 font-semibold">Services</Link>
                </div>
            </div>
        </header>
    );
};
