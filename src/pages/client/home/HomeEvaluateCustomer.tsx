import { ArrowLeft, ArrowRight } from 'lucide-react'
import Container from '../../../components/Container'
import TestimonialCard from '../../../components/client/Testimonial/TestimonialCard'
import { motion } from 'framer-motion'

const testimonials = [
    {
        name: "Sarah M.",
        review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece exceeds my expectations.",
        rating: 5
    },
    {
        name: "Alex K.",
        review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.",
        rating: 5
    },
    {
        name: "James L.",
        review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-trend.",
        rating: 5
    }
]

const HomeEvaluateCustomer = () => {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.h1 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white leading-[0.9]"
                    >
                        Our Happy <br /><span className="text-zinc-400">Customers</span>
                    </motion.h1>
                    
                    <div className="flex gap-4">
                        <button className="w-14 h-14 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
                            <ArrowLeft size={24} />
                        </button>
                        <button className="w-14 h-14 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <TestimonialCard {...t} />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default HomeEvaluateCustomer