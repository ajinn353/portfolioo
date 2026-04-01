import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Service = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className='w-full px-6 md:px-[8%] py-16 md:py-24 scroll-mt-20 relative'
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h4 className='text-center text-lg mb-2 font-ovo text-blue-600 font-medium tracking-widest uppercase'>Expertise</h4>
        <h2 className='text-center text-4xl md:text-6xl font-ovo font-bold tracking-tight'>What I Offer</h2>
        <p className='text-center max-w-2xl mx-auto mt-6 mb-12 md:mb-20 font-ovo text-gray-600 dark:text-gray-400 text-lg'>
          I provide cutting-edge solutions tailored to modern business needs, combining robust architecture with seamless user experiences.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -12, scale: 1.02 }}
            className='group relative p-10 rounded-[35px] bg-white/40 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden cursor-pointer'
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-blue-600/5 dark:bg-blue-400/5 rounded-full blur-3xl group-hover:bg-blue-600/15 transition-colors duration-500"></div>

            <div className='relative z-10'>
              <div className='w-16 h-16 rounded-2xl bg-blue-600/10 dark:bg-blue-400/10 flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/50'>
                <Image src={icon} alt={title} width={32} height={32} className={`transition-all duration-500 ${isDarkMode ? 'invert' : 'group-hover:invert'} opacity-80 group-hover:opacity-100`} />
              </div>

              <h3 className='text-xl font-bold mb-4 text-gray-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>{title}</h3>
              <p className='text-gray-600 dark:text-zinc-400 text-[15px] leading-relaxed font-ovo'>
                {description}
              </p>

              <div className='mt-8 pt-8 border-t border-gray-100 dark:border-white/5 flex items-center justify-between'>
                <span className='text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>Explore</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300"
                >
                  <Image alt='arrow' src={assets.right_arrow} className={`w-3 opacity-100 brightness-0 transition-all duration-300 ${isDarkMode ? 'invert' : 'group-hover:invert'}`} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Service
