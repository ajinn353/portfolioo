import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Footer = ({ isDarkMode }) => {
    return (
        <div className='mt-20 border-t border-gray-100 dark:border-white/5 pt-12 pb-12'>
            <div className='text-center'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-32 mx-auto mb-4' />

                <div className='w-max flex items-center gap-3 mx-auto px-6 py-2 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-600 dark:text-zinc-400 font-ovo'>
                    <Image src={assets.mail_icon} alt='' className='w-5 dark:invert' />
                    ajincareerr@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between mx-[10%] mt-12 pt-8 border-t border-gray-100 dark:border-white/5'>
                <p className='text-gray-500 dark:text-zinc-500 text-sm'>
                    © 2025 <span className="text-gray-900 dark:text-white font-bold">Ajin</span>. All rights reserved.
                </p>
                <ul className='flex items-center gap-10 justify-center mt-6 sm:mt-0'>
                    <li><a target='_blank' href='#' className='text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>GitHub</a></li>
                    <li><a target='_blank' href='#' className='text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>LinkedIn</a></li>
                    <li><a target='_blank' href='#' className='text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>Twitter</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer