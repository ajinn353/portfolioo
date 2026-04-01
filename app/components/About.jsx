import { assets, toolsData, infoList } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'
import { motion } from 'framer-motion'

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className='w-full px-6 md:px-[8%] py-16 md:py-24 scroll-mt-20 relative overflow-hidden' id='about'
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h4 className='text-center mb-2 text-lg font-ovo text-blue-600 font-medium tracking-widest uppercase'>The Story</h4>
        <h2 className='text-center mb-12 md:mb-20 text-4xl md:text-6xl font-ovo font-bold tracking-tight'>Behind the Code</h2>
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10'>

        {/* Main Bio Card - Top Left (8 cols) */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8 p-10 rounded-[40px] bg-gradient-to-br from-white/40 to-white/10 dark:from-white/5 dark:to-transparent backdrop-blur-3xl border border-white/20 dark:border-white/10 shadow-2xl flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            {/* <span className="ml-2 text-sm text-gray-400 font-mono tracking-tighter">ajin_profile_v2.js</span> */}
          </div>
          <p className='font-ovo text-2xl md:text-3xl text-gray-800 dark:text-gray-100 leading-snug'>
            I am a <span className='italic font-light text-blue-600'>Full Stack Architect</span> based in Kerala.
            I specialize in the <span className='font-bold underline decoration-purple-600/30'>MERN stack</span>, creating high-performance digital experiences that bridge the gap between complex engineering and human-centric design.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <span className="px-5 py-2 rounded-full bg-blue-600/10 text-blue-600 text-sm font-bold border border-blue-600/20">1 Year Exp</span>
            <span className="px-5 py-2 rounded-full bg-purple-600/10 text-purple-600 text-sm font-bold border border-purple-600/20">MERN Specialist</span>
            <span className="px-5 py-2 rounded-full bg-pink-600/10 text-pink-600 text-sm font-bold border border-pink-600/20">Next.js Expert</span>
          </div>
        </motion.div>

        {/* Stats Card - Top Right (4 cols) */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 grid grid-cols-1 gap-6"
        >
          <div className="p-8 rounded-[40px] bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl flex flex-col items-center justify-center text-center">
            <h5 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">3+</h5>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Major Deployments</p>
          </div>
          <div className="p-8 rounded-[40px] bg-gradient-to-tr from-blue-600 to-purple-600 shadow-2xl flex flex-col items-center justify-center text-center">
            <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-4">Current Focus</p>
            <h5 className="text-2xl font-bold text-white">Scalable Architecture</h5>
          </div>
        </motion.div>

        {/* Tech Stack Card - Bottom Left (6 cols) */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-7 p-10 rounded-[40px] bg-white/30 dark:bg-black/20 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl"
        >
          <h4 className='mb-10 text-gray-700 font-ovo dark:text-white font-bold text-xl flex items-center gap-3'>
            <div className='w-12 h-[2px] bg-blue-600'></div>
            Technical Arsenal
          </h4>
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6'>
            {toolsData.map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, y: -10, rotate: 5 }}
                className='group relative flex items-center justify-center aspect-square bg-white dark:bg-white/10 rounded-3xl border border-gray-100 dark:border-white/5 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/20 transition-all duration-300'
              >
                <Image src={tool} alt='Tool' className='w-8 sm:w-10 group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-500 dark:invert opacity-70 group-hover:opacity-100' />
                <div className='absolute inset-0 rounded-3xl bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Info Cards - Bottom Right (6 cols total) */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 grid grid-cols-1 gap-6"
        >
          {infoList.map(({ icon, iconDark, title, description }, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 10 }}
              className='flex items-center gap-6 p-6 rounded-[30px] bg-white/20 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg'
            >
              <div className='p-4 bg-blue-500/10 dark:bg-white/5 rounded-2xl'>
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-6 h-6' />
              </div>
              <div>
                <h3 className='font-bold text-gray-800 dark:text-white text-lg'>{title}</h3>
                <p className='text-gray-500 dark:text-gray-400 text-sm font-ovo'>{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  )
}

export default About
