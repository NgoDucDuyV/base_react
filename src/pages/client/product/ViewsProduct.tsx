import React from 'react'
import Container from '@/components/Container'
import ProductCard from '@/components/client/product/ProductCard'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowRight } from 'lucide-react'

type ViewsProductProps = {
    title?: string
    subtitle?: string
}

function ViewsProduct({ title, subtitle }: ViewsProductProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
            <Container>
                {/* Header */}
                <motion.header
                    className="relative mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4"
                        >
                            Collection 2024
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.9]">
                            {title ? title : "NEW ARRIVALS"}
                        </h2>
                        <p className="mt-6 text-lg text-zinc-500 max-w-lg leading-relaxed">
                            {subtitle || "Explore our latest collection of premium essentials designed for modern life. Quality materials meets timeless design."}
                        </p>
                    </div>

                    <Link to="/casual" className="group flex items-center gap-3 text-zinc-900 dark:text-white font-bold text-lg hover:text-indigo-600 transition-colors">
                        Explore All 
                        <span className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all duration-300">
                            <ArrowRight size={20} />
                        </span>
                    </Link>
                </motion.header>

                {/* Products Carousel */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative"
                >
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-6">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                                <CarouselItem key={index} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <ProductCard />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        
                        <div className="hidden md:flex items-center gap-2 absolute -top-24 right-0">
                            <CarouselPrevious className="static translate-x-0 translate-y-0 h-12 w-12 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all" />
                            <CarouselNext className="static translate-x-0 translate-y-0 h-12 w-12 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all" />
                        </div>
                    </Carousel>
                </motion.div>
            </Container>
        </section>
    )
}

export default ViewsProduct
