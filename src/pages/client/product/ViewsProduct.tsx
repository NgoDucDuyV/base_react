import React from 'react'
import Container from '@/components/Container'
import ProductCard from '@/components/client/product/ProductCard'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { productService } from '@/services/product.service'
import { Link } from 'react-router-dom'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useProducts } from '@/hook/product.hook'

type ViewsProductProps = {
    title?: string
}

function ViewsProduct({ title }: ViewsProductProps) {
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    }

    const { data: products, isLoading } = useProducts()

    return (
        <Container className="py-10 mx-auto py-16 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.header
                className="mb-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <h2
                    className="text-4xl md:text-5xl text-center heading-bold uppercase"
                    data-purpose="section-title"
                >
                    {title ? title : "NEW ARRIVALS"}
                </h2>
            </motion.header>

            {/* Products Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className='px-2'
            >
                {!isLoading ? (
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-[full] sm:max-w-xs  sm:max-w-full mx-auto"
                    >
                        <CarouselContent className='-ml-2'>
                            {
                                products && products.map((item, index) => {
                                    return (
                                        <CarouselItem key={index}
                                            className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">

                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <ProductCard product={item} />
                                            </CardContent>
                                        </CarouselItem>
                                    )
                                })
                            }
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext />
                    </Carousel>
                ) : (
                    <p>Loading...</p>
                )}
                {/* {data && data.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ProductCard product={item} />
                    </motion.div>
                ))} */}
            </motion.div>

            {/* View All Button */}
            <motion.div
                className="mt-16 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            >
                <Link to={"/casual"}
                    className="px-14 py-4 border border-gray-200 rounded-full text-base font-semibold hover:bg-gray-50 transition-colors"
                    data-purpose="view-all-button"
                >
                    View All
                </Link>
            </motion.div>
        </Container>
    )
}

export default ViewsProduct
