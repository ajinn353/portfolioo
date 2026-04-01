"use client";

import React, { useState, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { workData, assets } from "@/assets/assets";
import Image from "next/image";

export default function Works() {
    const [active, setActive] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const id = useId();

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) =>
            (prev - 1 + (active.images?.length || 1)) % (active.images?.length || 1)
        );
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) =>
            (prev + 1) % (active.images?.length || 1)
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="work"
            className="w-full px-6 md:px-[8%] py-16 md:py-24 scroll-mt-20 relative"
        >
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h4 className="text-center text-lg mb-2 font-ovo text-blue-600 font-medium tracking-widest uppercase">Portfolio</h4>
                <h2 className="text-center text-4xl md:text-6xl font-ovo font-bold tracking-tight">Latest Projects</h2>
                <p className="text-center max-w-2xl mx-auto mt-6 mb-10 md:mb-20 font-ovo text-gray-600 dark:text-gray-400 text-lg">
                    A curated selection of my recent work, showcasing expertise in full-stack development and modern design principles.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                {workData.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        layoutId={`card-${project.title}-${id}`}
                        className="group relative h-[320px] rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                        onClick={() => {
                            setActive(project);
                            setCurrentIndex(0);
                        }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${project.bgImage})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                            >
                                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-white/70 font-ovo">{project.description}</p>
                                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                                        <Image src={assets.send_icon} alt="view" className="w-3 brightness-0 invert" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {active && (
                    <motion.div
                        className="fixed inset-0 z-[100] grid place-items-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setActive(null)}
                        />

                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            className="bg-white dark:bg-zinc-900 border border-transparent dark:border-white/10 w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl relative z-10 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image Slider - Full Width Top */}
                            <div className="w-full aspect-video relative bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center border-b dark:border-white/5">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentIndex}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        src={active.images[currentIndex]}
                                        alt={active.title}
                                        className="w-full h-full object-cover"
                                    />
                                </AnimatePresence>

                                {active.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 dark:bg-white/10 text-white flex items-center justify-center hover:bg-black/60 dark:hover:bg-white/20 backdrop-blur-md transition-all"
                                        >
                                            ←
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 dark:bg-white/10 text-white flex items-center justify-center hover:bg-black/60 dark:hover:bg-white/20 backdrop-blur-md transition-all"
                                        >
                                            →
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Details - Bottom */}
                            <div className="p-4 md:p-6 bg-white dark:bg-zinc-900">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{active.title}</h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">{active.description}</p>
                                    </div>
                                    <button
                                        onClick={() => setActive(null)}
                                        className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-white transition-all"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-gray-600 dark:text-zinc-400 font-ovo leading-relaxed mb-8">
                                    {active.description2}
                                </p>
                                <a
                                    href={active.link}
                                    target='_blank'
                                    className="inline-flex items-center gap-3 px-6 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20"
                                >
                                    {active.linkname}
                                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
