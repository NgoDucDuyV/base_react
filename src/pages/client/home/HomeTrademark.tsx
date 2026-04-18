import { motion } from "framer-motion"
import Container from '../../../components/Container'

const trademarkS = [
    { name: "VERSACE", image: "/trademark/Group(1).png" },
    { name: "ZARA", image: "/trademark/Group.png" },
    { name: "GUCCI", image: "/trademark/gucci-logo-1.png" },
    { name: "PRADA", image: "/trademark/prada-logo-1.png" },
    { name: "Calvin Klein", image: "/trademark/zara-logo-1.png" }
]

function HomeTrademark() {
    return (
        <section className="bg-zinc-900 border-y border-white/5 overflow-hidden py-10">
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center items-center gap-12 md:gap-24 lg:gap-32"
                >
                    {trademarkS.map((trademark, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 flex items-center justify-center"
                        >
                            <img 
                                src={trademark.image} 
                                className="h-6 md:h-10 lg:h-12 w-auto object-contain invert" 
                                alt={trademark.name} 
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    )
}

export default HomeTrademark