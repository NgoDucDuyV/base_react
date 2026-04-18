import React from "react"
import { motion } from "framer-motion"
import Container from "../../../components/Container"

const stats = [
    { value: "200+", label: "International Brands" },
    { value: "2,000+", label: "High-Quality Products" },
    { value: "30,000+", label: "Happy Customers" }
]

function HomeBanner() {
    return (
        <section className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 pt-16 md:pt-0">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-200/50 dark:bg-zinc-800/30 -skew-x-12 translate-x-24 z-0 hidden lg:block" />
            
            <Container className="relative z-10 min-h-[85vh] flex items-center">
                <div className="grid lg:grid-cols-2 items-center gap-16 py-12 md:py-24">
                    {/* LEFT CONTENT */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="max-w-2xl"
                        >
                            <motion.span 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-5 py-2 rounded-full bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-zinc-100 text-sm font-black uppercase tracking-widest mb-8"
                            >
                                Premium Quality Essentials
                            </motion.span>
                            
                            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.85] mb-10">
                                FIND YOUR <br />
                                <span className="text-indigo-600">SIGNATURE</span> <br />
                                STYLE
                            </h1>
                            
                            <p className="text-zinc-500 text-lg md:text-xl lg:text-2xl mb-12 max-w-xl leading-relaxed font-medium">
                                Browse through our diverse range of meticulously crafted garments,
                                designed to bring out your individuality and cater to your sense of style.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-12 py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-lg font-black uppercase tracking-tight shadow-2xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all w-full sm:w-auto"
                                >
                                    Shop Collection
                                </motion.button>
                                <a href="#" className="font-bold text-lg text-zinc-900 dark:text-white border-b-2 border-zinc-900 dark:border-white pb-1 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                                    Our Story
                                </a>
                            </div>

                            {/* STATS */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-zinc-200 dark:border-zinc-800">
                                {stats.map((item, index) => (
                                    <div key={index}>
                                        <h3 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter">
                                            {item.value}
                                        </h3>
                                        <p className="text-zinc-500 text-sm md:text-base font-medium mt-1 uppercase tracking-wider">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative h-full min-h-[500px] lg:min-h-0 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="relative z-10 w-full"
                        >
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-zinc-200 dark:bg-zinc-800">
                                <motion.img
                                    src="/images/b26fea69ccfd8aa5825862cdb9604a4fb4930464.jpg"
                                    alt="Latest Collection"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.7 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-8 -left-8 md:-left-12 p-6 md:p-8 glass-morphism rounded-[2.5rem] shadow-2xl z-20 max-w-[200px] md:max-w-xs"
                            >
                                <span className="block text-indigo-600 font-black text-xs uppercase tracking-widest mb-2">Editor's Pick</span>
                                <p className="text-zinc-900 dark:text-white text-lg md:text-xl font-black leading-tight">Trending Items for Summer 2024</p>
                            </motion.div>

                            {/* Decorative Sparkles */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute top-10 -right-10 md:-right-16 text-zinc-900 dark:text-white"
                            >
                                <svg width="84" height="84" viewBox="0 0 100 100" fill="currentColor">
                                    <path d="M50 0L54.3 45.7L100 50L54.3 54.3L50 100L45.7 54.3L0 50L45.7 45.7L50 0Z" />
                                </svg>
                            </motion.div>
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute bottom-1/4 -right-4 text-zinc-900 dark:text-white/30"
                            >
                                <svg width="44" height="44" viewBox="0 0 100 100" fill="currentColor">
                                    <path d="M50 0L54.3 45.7L100 50L54.3 54.3L50 100L45.7 54.3L0 50L45.7 45.7L50 0Z" />
                                </svg>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HomeBanner