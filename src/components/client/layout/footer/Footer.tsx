import { motion } from "framer-motion"
import Container from '../../../Container'
import Logo from '../../../logo/Logo'
import { Mail, Github, Twitter, Instagram, Linkedin } from "lucide-react"

function Footer() {
    return (
        <footer className="w-full bg-zinc-50 dark:bg-zinc-950 pt-32 pb-12 overflow-hidden border-t border-zinc-200/50 dark:border-zinc-800/50">
            <Container>
                {/* NEWSLETTER */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative -mt-48 mb-24"
                >
                    <div className="bg-zinc-900 dark:bg-zinc-800 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row justify-between items-center gap-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-indigo-600/20 transition-colors duration-700" />
                        
                        <div className="lg:w-1/2 relative z-10">
                            <h2 className="text-white text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter uppercase mb-6">
                                STAY UPDATED ON <br /><span className="text-indigo-400">OUR LATEST OFFERS</span>
                            </h2>
                            <p className="text-zinc-400 text-lg max-w-md">Subscribe to our newsletter and never miss our exclusive drops.</p>
                        </div>

                        <div className="w-full lg:w-1/3 flex flex-col gap-4 relative z-10">
                            <div className="relative group">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-white transition-colors" size={20} />
                                <input
                                    className="w-full bg-zinc-800 dark:bg-zinc-950/50 border border-zinc-700 rounded-full py-4 pl-14 pr-6 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium"
                                    placeholder="Enter your email address"
                                    type="email"
                                />
                            </div>
                            <button className="w-full bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                                Subscribe to Newsletter
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* MAIN FOOTER */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="col-span-2 lg:col-span-1">
                        <Logo className="mb-8 block" />
                        <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-[280px]">
                            Redefining style through premium craftsmanship and timeless design for the modern individual.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Twitter, Instagram, Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {[
                        { title: 'COMPANY', links: ['About', 'Features', 'Works', 'Career'] },
                        { title: 'HELP', links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'] },
                        { title: 'FAQ', links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'] },
                        { title: 'RESOURCES', links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'] }
                    ].map((col) => (
                        <div key={col.title}>
                            <h4 className="text-sm font-bold tracking-widest text-zinc-900 dark:text-zinc-100 mb-8 uppercase">{col.title}</h4>
                            <ul className="space-y-4">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-zinc-500 hover:text-indigo-600 dark:hover:text-amber-400 text-sm transition-colors font-medium">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* BOTTOM */}
                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-zinc-500 text-sm font-medium">
                        Shop.co © 2000-2024. Crafted with Passion.
                    </p>
                    <div className="flex items-center gap-4 opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
                        {['Visa', 'Mastercard', 'Paypal', 'Apple Pay', 'Google Pay'].map((pay) => (
                            <div key={pay} className="h-8 w-12 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md flex items-center justify-center p-1 shadow-sm">
                                <div className="text-[10px] font-black text-zinc-900 dark:text-white">{pay}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer