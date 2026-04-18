import React from "react"
import { motion } from "framer-motion"
import Container from "../../../components/Container"
import { cn } from "../../../lib/utils"

const stats = [
    { value: "200+", label: "International Brands" },
    { value: "2,000+", label: "High-Quality Products" },
    { value: "30,000+", label: "Happy Customers" }
]

function HomeBanner() {
    return (
        <Container
            className="bg-[#F2F0F1] overflow-hidden"
            classNameContent={cn(
                "grid md:grid-cols-2 items-center gap-10 px-4 sm:px-8 md:px-16 lg:px-4 py-10"
            )}
        >
            {/* LEFT */}
            <div className="max-w-2xl">

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="font-integral text-4xl md:text-6xl lg:text-7xl font-extrabold text-black mb-6 tracking-tight leading-tight"
                >
                    FIND CLOTHES <br />
                    THAT MATCHES <br />
                    YOUR STYLE
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-500 text-sm md:text-base lg:text-lg mb-8 leading-relaxed"
                >
                    Browse through our diverse range of meticulously crafted garments,
                    designed to bring out your individuality and cater to your sense of style.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition w-full sm:w-auto"
                >
                    Shop Now
                </motion.button>

                {/* STATS */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="text-center md:text-left border-gray-300 md:border-r last:border-none px-4"
                        >
                            <h3 className="text-2xl md:text-4xl font-bold text-black">
                                {item.value}
                            </h3>
                            <p className="text-gray-500 text-xs md:text-sm mt-1">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
                <motion.img
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    src="/images/b26fea69ccfd8aa5825862cdb9604a4fb4930464.jpg"
                    alt="banner"
                    className="w-full max-w-md object-cover"
                />

                {/* decor */}
                <motion.img
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    src="/images/Vector.png"
                    className="absolute w-16 top-10 left-0"
                    alt=""
                />

                <motion.img
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    src="/images/Vector.png"
                    className="absolute w-20 bottom-10 right-0"
                    alt=""
                />
            </div>
        </Container>
    )
}

export default HomeBanner