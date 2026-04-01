import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d36858d7-0189-418d-bf92-d5a2f9fa6925");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='contact'
            className='w-full px-6 md:px-[8%] py-16 md:py-24 scroll-mt-20 relative overflow-hidden'
        >
            {/* Background Decorations */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>

            <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
            >
                <h4 className='text-center text-lg mb-2 font-ovo text-blue-600 font-medium tracking-widest uppercase'>Connection</h4>
                <h2 className='text-center text-4xl md:text-6xl font-ovo font-bold tracking-tight'>Get in Touch</h2>
                <p className='text-center max-w-2xl mx-auto mt-6 mb-10 md:mb-16 font-ovo text-gray-600 dark:text-gray-400 text-lg'>
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
            </motion.div>

            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl mx-auto bg-white/40 dark:bg-zinc-900/40 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-[30px] md:rounded-[40px] p-6 md:p-16 shadow-2xl"
            >
                <form onSubmit={onSubmit} className='space-y-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 dark:text-zinc-300 ml-4 uppercase tracking-widest">Name</label>
                            <input
                                type='text'
                                placeholder='How should I call you?'
                                required
                                className='w-full px-6 py-5 outline-none border border-gray-200 dark:border-zinc-800 rounded-2xl bg-white/50 dark:bg-zinc-950/50 focus:border-blue-500 dark:focus:border-blue-400 transition-all font-ovo text-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600'
                                name='name'
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 dark:text-zinc-300 ml-4 uppercase tracking-widest">Email</label>
                            <input
                                type='email'
                                placeholder='Where can I reply?'
                                required
                                className='w-full px-6 py-5 outline-none border border-gray-200 dark:border-zinc-800 rounded-2xl bg-white/50 dark:bg-zinc-950/50 focus:border-blue-500 dark:focus:border-blue-400 transition-all font-ovo text-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600'
                                name='email'
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-zinc-300 ml-4 uppercase tracking-widest">Message</label>
                        <textarea
                            rows='6'
                            placeholder='Tell me about your project...'
                            required
                            className='w-full px-6 py-5 outline-none border border-gray-200 dark:border-zinc-800 rounded-2xl bg-white/50 dark:bg-zinc-950/50 focus:border-blue-500 dark:focus:border-blue-400 transition-all font-ovo text-lg resize-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600'
                            name='messsage'
                        ></textarea>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <motion.button
                            type='submit'
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className='py-5 px-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all flex items-center gap-3 group'
                        >
                            Send Message
                            <Image src={assets.right_arrow_white} alt='arrow' className='w-5 group-hover:translate-x-1 transition-transform' />
                        </motion.button>

                        <AnimatePresence>
                            {result && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className={`text-lg font-medium ${result.includes('Successfully') ? 'text-green-500' : 'text-blue-500'}`}
                                >
                                    {result}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    )
}

export default Contact