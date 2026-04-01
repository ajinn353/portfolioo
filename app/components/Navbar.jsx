import Image from "next/image";
import { assets } from '@/assets/assets'
import React, { useRef, useEffect, useState } from 'react'
import Link from "next/link";


const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })

    })
    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                {/* <Image src={assets.header_bg_color} alt='' className="w-full" /> */}
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 md:py-2 flex items-center justify-between
                 z-50 ${isScroll ? "bg-white/60 dark:bg-[#11001f]/60 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-white/10" : ""}`}>
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="cursor-pointer"
                >
                    <Image
                        src={isDarkMode ? assets.logo_dark : assets.logo}
                        alt=""
                        className="w-28 md:w-32 mr-14"
                    />
                </div>
                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full 
                    px-12 py-3 ${isScroll ? "" : " bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"} `}
                >
                    <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer font-ovo">Home</li>

                    <li onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })} className="cursor-pointer font-ovo">About me</li>

                    <li onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })} className="cursor-pointer font-ovo">Services</li>

                    <li onClick={() => document.getElementById("work").scrollIntoView({ behavior: "smooth" })} className="cursor-pointer font-ovo">My Work</li>

                    <li onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} className="cursor-pointer font-ovo">Contact me</li>
                </ul>


                <div className="flex items-center gap-4">
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className="w-6" />
                    </button>
                    <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 
                    border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50">
                        Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3' /></a>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className="w-6" />
                    </button>
                </div>

                {/* -------- mobile menu -------- */}

                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 
             bg-rose-50 dark:bg-[color:var(--color-darktheme)] dark:text-white">

                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className="w-5 cursor-pointer" />
                    </div>
                    <li><a href="#top" onClick={closeMenu} className="font-ovo">Home</a></li>
                    <li><a href="#about" onClick={closeMenu} className="font-ovo">About me</a></li>
                    <li><a href="#services" onClick={closeMenu} className="font-ovo">Services</a></li>
                    <li><a href="#work" onClick={closeMenu} className="font-ovo">My Work</a></li>
                    <li><a href="#contact" onClick={closeMenu} className="font-ovo">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
