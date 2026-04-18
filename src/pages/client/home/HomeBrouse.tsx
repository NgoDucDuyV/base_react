import React from 'react'
import Container from '../../../components/Container'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const categories = [
    { title: 'Casual', src: '/images/e1b774aba32d9a769caba77c08e107a9198dcd6d_1_1.png', col: 1 },
    { title: 'Formal', src: '/images/e46ed6ac8bdbe2c750dcc6e834bf1d98a4a73b29_1.png', col: 2 },
    { title: 'Party', src: '/images/aa19c69e82cd85a823c989c1c8631bd976e2cbfb_3.png', col: 2 },
    { title: 'Gym', src: '/images/fce658e0c17a220fe8bfb1126626f3ab58a761ec_4.png', col: 1 },
]

function HomeBrouse() {
    return (
        <section className="py-24 bg-white dark:bg-zinc-950">
            <Container>
                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-[3rem] p-8 md:p-20 overflow-hidden relative">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl -mr-48 -mt-48" />
                    
                    <header className="mb-16 md:mb-24 relative z-10">
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black text-center uppercase tracking-tighter text-zinc-900 dark:text-white leading-none"
                        >
                            Browse by <br /><span className="text-zinc-400">dress style</span>
                        </motion.h2>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                className={`relative group rounded-[2.5rem] overflow-hidden ${cat.col === 2 ? 'md:col-span-2' : 'md:col-span-1'} h-[300px] md:h-[400px] shadow-sm`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Link to="/casual" className="block w-full h-full relative group">
                                    <motion.img
                                        alt={`${cat.title} style`}
                                        src={cat.src}
                                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                                    
                                    <div className="absolute top-10 left-10 z-20">
                                        <h3 className="text-3xl md:text-4xl font-black text-zinc-900 drop-shadow-sm group-hover:text-indigo-600 transition-colors duration-300">
                                            {cat.title}
                                        </h3>
                                    </div>

                                    <div className="absolute bottom-10 right-10 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                                        <ArrowUpRight className="text-zinc-900" size={24} />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HomeBrouse