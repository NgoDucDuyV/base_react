import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Container from '../../../Container'
import Logo from '../../../logo/Logo'
import { Menu } from 'lucide-react'
import { cn } from '../../../../lib/utils'
import { Link, useNavigate } from 'react-router-dom'
import { useSearchContext } from '@/contexts/client/search.contex'
import { useCart } from '@/contexts/client/cart.context'

function Header() {
    const navigater = useNavigate()
    const { keyword: keywordContext, setKeyword: setKeywordContext } = useSearchContext()
    const { cartCount } = useCart()
    const [isheaderTop, setIsHeaderTop] = useState<boolean>(true)
    const [keyword, setKeyword] = useState<string>("")
    const handleSearch = () => {
        navigater(`/casual?keyword=${keyword}`)
        setKeywordContext(keyword)        
    }
    
    useEffect(() => {
        const time = setTimeout(() => {
            handleSearch()
        }, 500)
        return () => clearTimeout(time)
    },[keyword])

    return (
        <>
            {/* HEADER TOP */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={
                    cn(
                        "transition-all duration-300 ease-in-out",
                        isheaderTop ? "block" : "hidden"
                    )
                }
            >
                <Container
                    className='bg-[#000000] scrollbar-hide'
                    classNameContent='py-1'>
                    <div className="text-white text-center py-2.5 px-4 relative">
                        <p className="text-sm font-light">
                            Sign up and get 20% off to your first order.
                            <a className="font-medium underline hover:text-gray-300 transition-colors" href="#">
                                Sign Up Now
                            </a>
                        </p>
                        <button onClick={() => setIsHeaderTop(pre => !pre)} className="absolute right-0 top-1/2 -translate-y-1/2 hover:opacity-70">
                            <svg fill="none" height="20" stroke="currentColor" viewBox="0 0 24 24" width="20">
                                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                        </button>
                    </div>
                </Container>
            </motion.div>

            {/* HEADER */}
            <header className='sticky top-0 z-50'>
                <Container className='bg-white shadow-sm py-3 scrollbar-hide'>

                    <motion.nav
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-between gap-x-8 h-[48px]"
                    >
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={{
                                hidden: {},
                                show: { transition: { staggerChildren: 0.1 } }
                            }}
                            className="flex items-center gap-3"
                        >

                            {/* mobile search */}
                            <motion.button variants={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="md:hidden p-1">
                                <Menu className='w-7 h-7' />
                            </motion.button>
                            {/* LOGO */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Logo />
                            </motion.div>

                        </motion.div>


                        {/* MENU */}
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={{
                                hidden: {},
                                show: { transition: { staggerChildren: 0.1 } }
                            }}
                            className="hidden lg:flex items-center space-x-6 whitespace-nowrap"
                        >
                            <motion.div variants={item}>
                                <div className="relative group">
                                    <button className="nav-link flex items-center gap-1">
                                        Shop
                                        <svg fill="currentColor" height={16} viewBox="0 0 16 16" width={16}>
                                            <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </button>
                                </div>
                            </motion.div>

                            <motion.a variants={item} className="nav-link" href="#">On Sale</motion.a>
                            <motion.a variants={item} className="nav-link" href="#">New Arrivals</motion.a>
                            <motion.a variants={item} className="nav-link" href="#">Brands</motion.a>
                        </motion.div>

                        {/* SEARCH */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="hidden md:block flex-grow max-w-xl"
                        >
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                    </svg>
                                </span>
                                <form onSubmit={(e) => {
                                    e.preventDefault()
                                    handleSearch()

                                }}>
                                    <input
                                        className="block w-full pl-11 pr-4 py-3 bg-brand-gray border-none rounded-full text-sm focus:ring-black focus:ring-1"
                                        placeholder="Search for products..."
                                        type="text"
                                        onChange={(value) => {
                                            setKeyword(value.target.value)
                                        }}
                                    />
                                </form>
                            </div>
                        </motion.div>

                        {/* ACTIONS */}
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={{
                                hidden: {},
                                show: { transition: { staggerChildren: 0.1 } }
                            }}
                            className="flex items-center gap-2 lg:gap-3 xl:gap-4"
                        >

                            {/* mobile search */}
                            <motion.button variants={item} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="md:hidden p-1">
                                <svg fill="none" height={24} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <circle cx={11} cy={11} r={8} />
                                    <line x1={21} y1={21} x2="16.65" y2="16.65" />
                                </svg>
                            </motion.button>

                            {/* cart */}
                            <Link to={"/cart"}>
                                <motion.button variants={item} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="p-1 hover:opacity-70 relative">
                                    <svg fill="none" height={24} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <circle cx={9} cy={21} r={1} />
                                        <circle cx={20} cy={21} r={1} />
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                    </svg>
                                    {cartCount > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                            {cartCount}
                                        </span>
                                    )}
                                </motion.button>
                            </Link>

                            {/* user */}
                            <Link to={"/register"}>
                                <motion.button variants={item} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="p-1 hover:opacity-70">
                                    <svg fill="none" height={24} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                </motion.button>
                            </Link>

                        </motion.div>

                    </motion.nav>

                </Container>
            </header>
        </>
    )
}

const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 }
}

export default Header