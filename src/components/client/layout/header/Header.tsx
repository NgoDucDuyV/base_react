import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Container from '../../../Container'
import Logo from '../../../logo/Logo'
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { cn } from '../../../../lib/utils'
import { Link, useNavigate } from 'react-router-dom'
import { useSearchContext } from '@/contexts/client/search.contex'
import { useCart } from '@/contexts/client/cart.context'

function Header() {
    const navigater = useNavigate()
    const { setKeyword: setKeywordContext } = useSearchContext()
    const { cartCount } = useCart()
    const [isheaderTop, setIsHeaderTop] = useState<boolean>(true)
    const [keyword, setKeyword] = useState<string>("")
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleSearch = () => {
        if (keyword.trim()) {
            navigater(`/casual?keyword=${keyword}`)
            setKeywordContext(keyword)
        }
    }

    return (
        <>
            {/* Announcement Bar */}
            <AnimatePresence>
                {isheaderTop && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-zinc-900 text-white overflow-hidden"
                    >
                        <Container classNameContent="py-2.5 flex justify-center items-center relative">
                            <p className="text-xs md:text-sm font-medium tracking-wide">
                                Join our community and get <span className="text-indigo-400 font-bold">20% OFF</span> your first order. 
                                <Link to="/register" className="ml-2 underline underline-offset-4 hover:text-indigo-300 transition-colors">Sign up now</Link>
                            </p>
                            <button onClick={() => setIsHeaderTop(false)} className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors">
                                <X size={14} />
                            </button>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Header */}
            <header className={cn(
                "sticky top-0 z-[100] transition-all duration-300 w-full",
                scrolled ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 py-2 shadow-sm" : "bg-white dark:bg-zinc-950 py-5"
            )}>
                <Container>
                    <nav className="flex items-center justify-between gap-8 h-12">
                        {/* Left: Logo & Nav */}
                        <div className="flex items-center gap-12">
                            <div className="flex items-center gap-4">
                                <button className="lg:hidden p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors">
                                    <Menu size={24} />
                                </button>
                                <Logo />
                            </div>

                            <ul className="hidden lg:flex items-center gap-8">
                                {['Shop', 'On Sale', 'New Arrivals', 'Brands'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Middle: Search */}
                        <div className="hidden md:flex flex-grow max-w-xl group">
                            <div className="relative w-full">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
                                <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                                    <input
                                        type="text"
                                        placeholder="Search premium styles..."
                                        className="w-full pl-12 pr-4 py-3 bg-zinc-100 dark:bg-zinc-800/50 border-2 border-transparent rounded-[1.25rem] text-sm font-medium focus:bg-white dark:focus:bg-zinc-900 focus:border-indigo-600/20 focus:ring-4 focus:ring-indigo-600/5 transition-all outline-none"
                                        onChange={(e) => setKeyword(e.target.value)}
                                        value={keyword}
                                    />
                                </form>
                            </div>
                        </div>

                        {/* Right: Actions */}
                        <div className="flex items-center gap-2 md:gap-4">
                            <button className="md:hidden p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors">
                                <Search size={20} />
                            </button>

                            <Link to="/cart" className="relative p-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors group">
                                <ShoppingBag size={22} className="group-hover:text-indigo-600 transition-colors" />
                                {cartCount > 0 && (
                                    <span className="absolute top-1 right-1 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-white dark:ring-zinc-900">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>

                            <Link to="/register" className="p-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors group">
                                <User size={22} className="group-hover:text-indigo-600 transition-colors" />
                            </Link>
                        </div>
                    </nav>
                </Container>
            </header>
        </>
    )
}

export default Header