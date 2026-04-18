"use client"

import Container from '@/components/Container'
import { ArrowRight, ChevronRight, Minus, Plus, Tag, Trash } from 'lucide-react'
import { motion, type Variants } from "framer-motion"
import React from 'react'
import { useCart } from '@/contexts/client/cart.context'
import { Link } from 'react-router-dom'

/* ================= ANIMATION CONFIG ================= */
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
}

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, totalAmount } = useCart()

    if (cartItems.length === 0) {
        return (
            <Container>
                <div className="flex flex-col items-center justify-center py-40 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6"
                    >
                        <Trash className="w-10 h-10 text-gray-400" />
                    </motion.div>
                    <h2 className="text-3xl font-bold mb-4">Giỏ hàng của bạn đang trống</h2>
                    <p className="text-gray-500 mb-8 max-w-md">Có vẻ như bạn chưa thêm sản phẩm nào vào giỏ hàng. Hãy bắt đầu mua sắm ngay!</p>
                    <Link to="/casual">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-black text-white px-8 py-4 rounded-full font-bold"
                        >
                            Tiếp tục mua sắm
                        </motion.button>
                    </Link>
                </div>
            </Container>
        )
    }

    return (
        <Container>

            {/* Breadcrumb */}
            <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 text-[16px] text-black/60 py-8"
            >
                <Link className="hover:text-black" to="/">Home</Link>
                <ChevronRight className='text-black/60 w-4 h-4' />
                <span className="text-black font-medium">Cart</span>
            </motion.nav>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-integral mb-8"
            >
                YOUR CART
            </motion.h1>

            <div className="flex flex-col lg:flex-row gap-6 mb-20">

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex-3 space-y-4 shadow-sm border border-black/10 rounded-3xl p-4 md:p-6"
                >

                    {cartItems.map((cartItem) => (
                        <motion.div
                            key={cartItem.id}
                            variants={item}
                            whileHover={{ scale: 1.01 }}
                            className="flex gap-4 pb-4 border-b border-gray-100 last:border-0"
                        >
                            {/* Image */}
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-[#F0EEED] rounded-lg overflow-hidden flex-shrink-0">
                                <img className='w-full h-full object-cover' src={cartItem.image_url} alt={cartItem.name} />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-between flex-grow">

                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-lg">{cartItem.name}</h3>
                                        <p className="text-sm text-gray-500">Size: <span className="text-gray-400">L</span></p>
                                        <p className="text-sm text-gray-500">Color: <span className="text-gray-400">White</span></p>
                                    </div>

                                    {/* Delete */}
                                    <motion.button
                                        onClick={() => removeFromCart(cartItem.id)}
                                        whileTap={{ scale: 0.9 }}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <Trash />
                                    </motion.button>
                                </div>

                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-xl font-bold">{cartItem.current_price * cartItem.quantity}{cartItem.currency}</span>

                                    {/* Quantity */}
                                    <div className="flex items-center justify-between bg-[#F0F0F0] rounded-full w-[140px] px-4 py-2 gap-4">

                                        <motion.button 
                                            onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                                            whileTap={{ scale: 0.85 }}
                                        >
                                            <Minus size={16} />
                                        </motion.button>

                                        <span className="font-bold w-4 text-center">{cartItem.quantity}</span>

                                        <motion.button 
                                            onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
                                            whileTap={{ scale: 0.85 }}
                                        >
                                            <Plus size={16} />
                                        </motion.button>

                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}

                </motion.div>

                <motion.aside
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex-2 w-full lg:w-[400px] border border-black/10 shadow-sm rounded-3xl p-6 h-fit"
                >

                    <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                    <div className="space-y-4 mb-6">
                        <div className="flex justify-between text-gray-500">
                            <span>Subtotal</span>
                            <span className="text-black font-bold">{totalAmount}{cartItems[0]?.currency}</span>
                        </div>

                        <div className="flex justify-between text-gray-500">
                            <span>Discount</span>
                            <span className="text-red-500 font-bold">-$0</span>
                        </div>

                        <div className="flex justify-between text-gray-500 pb-4 border-b">
                            <span>Delivery</span>
                            <span className="text-black font-bold">Free</span>
                        </div>

                        <div className="flex justify-between text-lg font-bold pt-2">
                            <span>Total</span>
                            <span>{totalAmount}{cartItems[0]?.currency}</span>
                        </div>
                    </div>


                    <div className="flex flex-row gap-2 mb-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex-2 hidden md:block flex-grow max-w-xl"
                        >
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Tag className="text-gray-400" />
                                </span>
                                <input
                                    className="block w-full pl-11 pr-4 py-3 bg-brand-gray border-none rounded-full text-sm focus:ring-black focus:ring-1"
                                    placeholder="Add promo code"
                                    type="text"
                                />
                            </div>
                        </motion.div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-[100px] bg-black text-white rounded-full font-bold flex items-center justify-center gap-2"
                        >
                            Apply
                        </motion.button>
                    </div>

                    {/* Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-black text-white py-4 rounded-full font-bold flex items-center justify-center gap-2"
                    >
                        Go to Checkout  <span><ArrowRight /></span>
                    </motion.button>

                </motion.aside>

            </div>
        </Container>
    )
}
