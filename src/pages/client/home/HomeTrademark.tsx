import { motion } from "framer-motion"
import Container from '../../../components/Container'

function HomeTrademark() {

    const trademarkS = [
        {
            name: "VERSACE",
            image: "/trademark/Group(1).png"
        },
        {
            name: "ZARA",
            image: "/trademark/Group.png"
        },
        {
            name: "GUCCI",
            image: "/trademark/gucci-logo-1.png"
        },
        {
            name: "PRADA",
            image: "/trademark/prada-logo-1.png"
        },
        {
            name: "Calvin Klein",
            image: "/trademark/zara-logo-1.png"
        }
    ]
    return (
        <Container className='bg-black scrollbar-hide px-0'>
            <section className="bg-black flex flex-row items-center w-full py-8 md:py-12 h-auto xl:max-h-[120px]">

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24"
                >

                    {
                        trademarkS && trademarkS.map((trademark, index) => {
                            return (
                                <motion.div key={index} variants={item} className="text-white text-2xl md:text-3xl lg:text-4xl font-versace select-none">
                                    <img src={trademark.image} className="max-w-40" alt={trademark.name} />
                                </motion.div>
                            )
                        })
                    }

                </motion.div>

            </section>
        </Container>
    )
}

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
}

export default HomeTrademark