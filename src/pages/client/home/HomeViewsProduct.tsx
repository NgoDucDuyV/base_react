import React from 'react'
import Container from '../../../components/Container'
import ProductCard from '../../../components/client/product/ProductCard'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { productService } from '../../../services/product.service'
import { Link } from 'react-router-dom'

function HomeViewsProduct() {
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

    const { data } = useQuery({
        queryKey: ['product'],
        queryFn: () => productService.getProduct(),
        staleTime: 1000 * 60 * 5
    })

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
                    NEW ARRIVALS
                </h2>
            </motion.header>

            {/* Products Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                data-purpose="product-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                {data && data.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ProductCard product={item} />
                    </motion.div>
                ))}
            </motion.div>

            {/* View All Button */}
            <motion.div
                className="mt-16 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            >
                <Link to={"details/1"}
                    className="px-14 py-4 border border-gray-200 rounded-full text-base font-semibold hover:bg-gray-50 transition-colors"
                    data-purpose="view-all-button"
                >
                    View All
                </Link>
            </motion.div>
        </Container>
    )
}

export default HomeViewsProduct