import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-36 md:pt-40 pb-10'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                className='mb-4 relative group'
            >
                <div className='absolute -inset-2 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-500'></div>
                <div className='p-1 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shadow-2xl inline-block relative z-10'>
                    <Image
                        src={assets.Ajin}
                        alt="Profile Image"
                        className='rounded-full w-28 h-28 md:w-40 md:h-40 object-cover border-4 border-white dark:border-zinc-900 group-hover:scale-105 transition-transform duration-500'
                        priority
                    />
                </div>
            </motion.div>
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-center justify-center gap-3 text-xl md:text-3xl mb-3 font-ovo text-gray-700 dark:text-gray-300'
            >
                Hi there! <motion.span animate={{ rotate: [0, 20, 0, 20, 0] }} transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }} className='inline-block origin-bottom-right'>👋</motion.span> I&apos;m <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 uppercase tracking-wide'>Ajin K</span>
            </motion.h3>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='text-3xl sm:text-6xl lg:text-[72px] font-ovo leading-tight text-gray-900 dark:text-white capitalize'
            >
                full stack developer
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='max-w-2xl mx-auto font-ovo text-gray-600 dark:text-gray-400 text-lg md:text-xl'
            >
                I am a full-stack developer from Kerala, India with <span className='text-blue-600 font-bold'>1 Year</span> of experience at <span className='italic'>Esta - Expert Software Technology Assistance</span>.
            </motion.p>
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='flex flex-col sm:flex-row items-center gap-6 mt-6'
            >
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href='#contact'
                    className='px-12 py-4 border rounded-full bg-black text-white flex items-center gap-3 dark:bg-white dark:text-black hover:shadow-lg hover:shadow-blue-500/20 transition-all font-bold group'
                >
                    Contact me
                    <Image src={assets.right_arrow_white} alt='' className='w-4 group-hover:translate-x-1 transition-transform dark:invert' />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href='/sample-resume.pdf'
                    download
                    className='px-12 py-4 border-2 rounded-full border-gray-400 dark:border-white/50 flex items-center gap-3 bg-white dark:bg-transparent dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all font-bold group'
                >
                    My resume
                    <div className='w-6 h-6 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-all'>
                        <Image src={assets.download_icon} alt='' className='w-3 dark:invert group-hover:invert-0' />
                    </div>
                </motion.a>
            </motion.div>
        </div>
    )
}

export default Header
