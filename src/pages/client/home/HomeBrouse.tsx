import React from 'react'
import Container from '../../../components/Container'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const categories = [
    { title: 'Casual', src: '/images/e1b774aba32d9a769caba77c08e107a9198dcd6d_1_1.png', col: 1 },
    { title: 'Formal', src: '/images/e46ed6ac8bdbe2c750dcc6e834bf1d98a4a73b29_1.png', col: 2 },
    { title: 'Party', src: '/images/aa19c69e82cd85a823c989c1c8631bd976e2cbfb_3.png', col: 2 },
    { title: 'Gym', src: '/images/fce658e0c17a220fe8bfb1126626f3ab58a761ec_4.png', col: 1 },
]

function HomeBrouse() {
    return (
        <Container classNameContent="rounded-lg scrollbar-hide">
            <div className="bg-[#F0F0F0] rounded-4xl px-6 py-10 md:px-16 md:py-16">
                <header className="mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-heavy text-center uppercase tracking-tight text-black">
                        Browse by dress style
                    </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            className={`relative group rounded-3xl overflow-hidden ${cat.col === 2 ? 'md:col-span-2' : 'md:col-span-1'} h-[190px] md:h-[289px]`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <Link to="/product" className="block w-full h-full relative rounded-3xl overflow-hidden">
                                <motion.img
                                    alt={`${cat.title} dress`}
                                    src={cat.src}
                                    className="w-full h-full object-cover object-center rounded-3xl transition-all duration-500 ease-in-out"
                                    whileHover={{ scale: 1.05, opacity: 0.7 }}
                                />
                                <span className="absolute top-8 left-8 text-2xl md:text-3xl font-bold text-black z-10">
                                    {cat.title}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default HomeBrouse