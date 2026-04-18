import { motion } from "framer-motion"
import Container from '../../../Container'
import Logo from '../../../logo/Logo'
import "./footer.css"
import { Mail } from "lucide-react"
function Footer() {
    return (
        <Container className='mt-auto'
            classNameContent='bg-white'>
            <footer className="w-full">

                {/* NEWSLETTER */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto sm:px-6 lg:px-0 newsletter-wrapper"
                >
                    <div className="bg-black rounded-[20px] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8">

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="lg:w-7/12"
                        >
                            <h2 className="text-white text-3xl md:text-5xl font-black leading-tight uppercase">
                                STAY UPTO DATE ABOUT<br />OUR LATEST OFFERS
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-4/12 flex flex-col gap-4"
                        >
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="text-white/60" />
                                </div>
                                <input
                                    className="block w-full rounded-full border-0 py-3 pl-12 text-white ring-1 ring-inset ring-gray-300"
                                    placeholder="Enter your email address"
                                    type="email"
                                />
                            </div>

                            <button className="w-full bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
                                Subscribe to Newsletter
                            </button>
                        </motion.div>

                    </div>
                </motion.div>

                {/* MAIN FOOTER */}
                <div className="bg-shop-gray footer-main-content">
                    <div className="w-full mx-auto px-2 sm:px-6 lg:px-0 pb-12">

                        {/* GRID */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                show: {
                                    transition: { staggerChildren: 0.15 }
                                }
                            }}
                            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 border-b border-black/10 pb-12"
                        >

                            {/* Column 1 */}
                            <motion.div variants={item}>
                                <Logo />
                                <p className="text-black/60 text-sm leading-relaxed mb-8 max-w-[250px]">
                                    We have clothes that suits your style and which you’re proud to wear. From women to men.
                                </p>
                                {/* social giữ nguyên */}
                            </motion.div>

                            {/* Các column giữ nguyên */}
                            <motion.div variants={item}>
                                <h4 className="footer-heading">COMPANY</h4>
                                <ul className="space-y-4">
                                    <li><a className="footer-link" href="#">About</a></li>
                                    <li><a className="footer-link" href="#">Features</a></li>
                                    <li><a className="footer-link" href="#">Works</a></li>
                                    <li><a className="footer-link" href="#">Career</a></li>
                                </ul>
                            </motion.div>

                            <motion.div variants={item}>
                                <h4 className="footer-heading">HELP</h4>
                                <ul className="space-y-4">
                                    <li><a className="footer-link" href="#">Customer Support</a></li>
                                    <li><a className="footer-link" href="#">Delivery Details</a></li>
                                    <li><a className="footer-link" href="#">Terms & Conditions</a></li>
                                    <li><a className="footer-link" href="#">Privacy Policy</a></li>
                                </ul>
                            </motion.div>

                            <motion.div variants={item}>
                                <h4 className="footer-heading">FAQ</h4>
                                <ul className="space-y-4">
                                    <li><a className="footer-link" href="#">Account</a></li>
                                    <li><a className="footer-link" href="#">Manage Deliveries</a></li>
                                    <li><a className="footer-link" href="#">Orders</a></li>
                                    <li><a className="footer-link" href="#">Payments</a></li>
                                </ul>
                            </motion.div>

                            <motion.div variants={item}>
                                <h4 className="footer-heading">RESOURCES</h4>
                                <ul className="space-y-4">
                                    <li><a className="footer-link" href="#">Free eBooks</a></li>
                                    <li><a className="footer-link" href="#">Development Tutorial</a></li>
                                    <li><a className="footer-link" href="#">How to - Blog</a></li>
                                    <li><a className="footer-link" href="#">Youtube Playlist</a></li>
                                </ul>
                            </motion.div>

                        </motion.div>

                        {/* BOTTOM */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6"
                        >
                            <p className="text-black/60 text-sm">
                                Shop.co © 2000-2023, All Rights Reserved
                            </p>

                            <div className="flex items-center gap-2">
                                {/* Visa */}
                                <div className="bg-white px-2 py-1 rounded border border-black/5 h-[32px] w-[46px] flex items-center justify-center">
                                    <img alt="Visa" className="h-full object-contain" src="/images/Badge.png" />
                                </div>
                                {/* Mastercard */}
                                <div className="bg-white px-2 py-1 rounded border border-black/5 h-[32px] w-[46px] flex items-center justify-center">
                                    <img alt="Mastercard" className="h-full object-contain" src="/images/Badge(1).png" />
                                </div>
                                {/* Paypal */}
                                <div className="bg-white px-2 py-1 rounded border border-black/5 h-[32px] w-[46px] flex items-center justify-center">
                                    <img alt="PayPal" className="h-full object-contain" src="/images/Badge(2).png" />
                                </div>
                                {/* Apple Pay */}
                                <div className="bg-white px-2 py-1 rounded border border-black/5 h-[32px] w-[46px] flex items-center justify-center">
                                    <img alt="Apple Pay" className="h-full object-contain" src="/images/Badge(3).png" />
                                </div>
                                {/* Google Pay */}
                                <div className="bg-white px-2 py-1 rounded border border-black/5 h-[32px] w-[46px] flex items-center justify-center">
                                    <img alt="Google Pay" className="h-full object-contain" src="/images/Badge(4).png" />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </footer>
        </Container>
    )
}

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
}

export default Footer