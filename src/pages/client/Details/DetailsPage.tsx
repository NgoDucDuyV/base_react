import React, { useEffect, useState } from 'react'
import HomeViewsProduct from '../home/HomeViewsProduct'
import Container from '../../../components/Container'
import { Check, ChevronDown, ChevronRight, Ellipsis, Minus, Plus, Star, StarHalf } from 'lucide-react'
import ViewsProduct from '../product/ViewsProduct'
import { useParams } from 'react-router-dom'
import { useProduct } from '@/hook/product.hook'
import { Spin } from 'antd'
import RatingStars from '@/components/RatingStars'

function DetailsPage() {

    const [viewImage, setViewImage] = useState<string>("")
    const { id } = useParams()
    console.log(id);

    const { data: product, isLoading } = useProduct(String(id))

    useEffect(() => {
        setViewImage(`${product?.image_url}`)
    }, [product])

    return (
        <>
            <Container>
                {isLoading ? (
                    <div className='flex items-center justify-center h-screen'>
                        <h3>Loading...</h3>
                        <Spin size='large' />
                    </div>
                ) : (

                    <>
                        <nav className="flex items-center gap-2 text-[16px] text-black/60 py-8">
                            <a className="hover:text-black" href="#">Home</a>
                            <span className="material-symbols-outlined text-xs">
                                <ChevronRight className='text-black/60' />
                            </span>
                            <a className="hover:text-black" href="#">Shop</a>
                            <span className="material-symbols-outlined text-xs">
                                <ChevronRight className='text-black/60' />
                            </span>
                            <a className="hover:text-black" href="#">Men</a>
                            <span className="material-symbols-outlined text-xs">
                                <ChevronRight />
                            </span>
                            <span className="text-black font-medium">
                                T-shirts
                            </span>
                        </nav>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
                            {/* Left Column: Product Images */}
                            <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4 max-h-[530px]  ">
                                <div className="flex md:flex-col grid-cols-1 md:grid-cols-1 gap-4 overflow-x-auto overflow-y-auto">
                                    {
                                        product?.gallery && product?.gallery.map((item, index) => {
                                            return (
                                                <div key={index} onClick={() => {
                                                    setViewImage(item)
                                                }} className={`min-w-[155px] h-[170px] md:min-h-[170px] md:w-32 bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden cursor-pointer hover:opacity-80 hover:border-2 hover:border-black transition-all duration-50 ${viewImage === item ? "border-2 border-black" : ""}`}>
                                                    <img className="w-full h-full object-cover"
                                                        data-alt="Close up of black graphic t-shirt design"
                                                        src={item} />
                                                </div>
                                            )
                                        })
                                    }
                                    {/* <div className="min-w-[155px] h-[170px] md:min-h-[170px] md:w-32 rounded-3xl overflow-hidden border-2 border-black overflow-hidden cursor-pointer hover:opacity-80 hover:border-2 hover:border-black transition-all duration-50">
                                        <img className="w-full h-full object-cover" data-alt="Close up of black graphic t-shirt design" src="/product/men/product_1.1.png" />
                                    </div>
                                    <div className="min-w-[155px] h-[170px] md:min-h-[170px] md:w-32 bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden cursor-pointer hover:opacity-80 hover:border-2 hover:border-black transition-all duration-50">
                                        <img className="w-full h-full object-cover" data-alt="Model wearing black graphic t-shirt front view" src="/product/men/product_1.2.png" />
                                    </div>
                                    <div className="min-w-[155px] h-[170px] md:min-h-[170px] md:w-32 bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden cursor-pointer hover:opacity-80 hover:border-2 hover:border-black transition-all duration-50">
                                        <img className="w-full h-full object-cover" data-alt="Black graphic t-shirt back view detail" src="/product/men/product_1.3.png" />
                                    </div> */}
                                </div>
                                <div className="flex-1 rounded-3xl overflow-hidden">
                                    <img className="w-full h-full object-cover"
                                        data-alt={product?.name}
                                        src={viewImage} />
                                </div>
                            </div>
                            {/* Right Column: Product Info */}
                            <div className="lg:col-span-5 flex flex-col gap-4">
                                <h2 className="text-4xl font-black uppercase tracking-tight leading-none">{product?.name}</h2>
                                <RatingStars rating={Number(product?.rating)} />
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl font-bold">{product?.current_price}{product?.currency}</span>
                                    <span className="text-3xl font-bold text-slate-300 line-through">{product?.original_price}{product?.currency}</span>
                                    <span className="bg-red-100 text-red-500 text-sm font-bold px-3 py-1 rounded-full">-{product?.discount_percentage}%</span>
                                </div>
                                <p className="text-slate-500 text-[16px] leading-relaxed border-b border-slate-200 dark:border-slate-800 pb-6">
                                    {product?.description}
                                </p>
                                {/* Color Selection */}
                                <div className="flex flex-col gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                                    <span className="text-sm font-medium text-slate-500">Select Colors</span>
                                    <div className="flex gap-3">
                                        <button className="w-10 h-10 rounded-full bg-[#4F533E] flex items-center justify-center ring-2 ring-offset-2 ring-slate-900">
                                            <span className="material-symbols-outlined text-white text-lg">
                                                <Check />
                                            </span>
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-[#314F4A]"></button>
                                        <button className="w-10 h-10 rounded-full bg-[#31344F]"></button>
                                    </div>
                                </div>
                                {/* Size Selection */}
                                <div className="flex flex-col gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                                    <span className="text-sm font-medium text-slate-500">Choose Size</span>
                                    <div className="flex flex-wrap gap-3">
                                        <button className="px-6 py-2 rounded-full bg-[#F0F0F0] text-slate-600 hover:bg-black hover:text-white transition-all duration-75 shadow-sm">Small</button>
                                        <button className="px-6 py-2 rounded-full bg-[#F0F0F0] text-slate-600 hover:bg-black hover:text-white transition-all duration-75 shadow-sm">Medium</button>
                                        <button className="px-6 py-2 rounded-full bg-[#F0F0F0] text-slate-600 hover:bg-black hover:text-white transition-all duration-75 shadow-sm bg-black text-white">Large</button>
                                        <button className="px-6 py-2 rounded-full bg-[#F0F0F0] text-slate-600 hover:bg-black hover:text-white transition-all duration-75 shadow-sm">X-Large</button>
                                    </div>
                                </div>
                                {/* Quantity & Add to Cart */}
                                <div className="flex gap-4">
                                    <div className="flex items-center justify-between bg-[#F0F0F0] rounded-full w-[170px] px-4 py-3 gap-6">
                                        <button className="text-xl font-bold">
                                            <Minus />
                                        </button>
                                        <span className="font-bold w-4 text-center">1</span>
                                        <button className="text-xl font-bold">
                                            <Plus />
                                        </button>
                                    </div>
                                    <button className="flex-1 px-6 py-2 rounded-full bg-[#F0F0F0] text-slate-600 hover:bg-black hover:text-white transition-all duration-75 shadow-sm bg-black text-white">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Tabs Section */}
                        <div className="mt-20">
                            <div className="flex border-b-2 border-slate-200 dark:border-slate-800/10">
                                <button className="flex-1 py-4 text-center font-medium text-slate-500 hover:text-slate-900">Product Details</button>
                                <button className="flex-1 py-4 text-center font-bold text-slate-900 border-b-2 border-slate-900 relative">
                                    Rating &amp; Reviews
                                </button>
                                <button className="flex-1 py-4 text-center font-medium text-slate-500 hover:text-slate-900">FAQs</button>
                            </div>
                            {/* Reviews Header */}
                            <div className="flex items-center justify-between py-8">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-2xl font-bold">All Reviews</h3>
                                    <span className="text-slate-500 text-lg">(451)</span>
                                </div>
                                <div className="flex gap-3">
                                    <button className="p-3 h-[48px] bg-[#F0F0F0] rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.125 11.625V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V11.625C10.875 11.3266 10.9935 11.0405 11.2045 10.8295C11.4155 10.6185 11.7016 10.5 12 10.5C12.2984 10.5 12.5845 10.6185 12.7955 10.8295C13.0065 11.0405 13.125 11.3266 13.125 11.625ZM18.75 18C18.4516 18 18.1655 18.1185 17.9545 18.3295C17.7435 18.5405 17.625 18.8266 17.625 19.125V20.25C17.625 20.5484 17.7435 20.8345 17.9545 21.0455C18.1655 21.2565 18.4516 21.375 18.75 21.375C19.0484 21.375 19.3345 21.2565 19.5455 21.0455C19.7565 20.8345 19.875 20.5484 19.875 20.25V19.125C19.875 18.8266 19.7565 18.5405 19.5455 18.3295C19.3345 18.1185 19.0484 18 18.75 18ZM21 14.25H19.875V3.75C19.875 3.45163 19.7565 3.16548 19.5455 2.9545C19.3345 2.74353 19.0484 2.625 18.75 2.625C18.4516 2.625 18.1655 2.74353 17.9545 2.9545C17.7435 3.16548 17.625 3.45163 17.625 3.75V14.25H16.5C16.2016 14.25 15.9155 14.3685 15.7045 14.5795C15.4935 14.7905 15.375 15.0766 15.375 15.375C15.375 15.6734 15.4935 15.9595 15.7045 16.1705C15.9155 16.3815 16.2016 16.5 16.5 16.5H21C21.2984 16.5 21.5845 16.3815 21.7955 16.1705C22.0065 15.9595 22.125 15.6734 22.125 15.375C22.125 15.0766 22.0065 14.7905 21.7955 14.5795C21.5845 14.3685 21.2984 14.25 21 14.25ZM5.25 15C4.95163 15 4.66548 15.1185 4.4545 15.3295C4.24353 15.5405 4.125 15.8266 4.125 16.125V20.25C4.125 20.5484 4.24353 20.8345 4.4545 21.0455C4.66548 21.2565 4.95163 21.375 5.25 21.375C5.54837 21.375 5.83452 21.2565 6.0455 21.0455C6.25647 20.8345 6.375 20.5484 6.375 20.25V16.125C6.375 15.8266 6.25647 15.5405 6.0455 15.3295C5.83452 15.1185 5.54837 15 5.25 15ZM7.5 11.25H6.375V3.75C6.375 3.45163 6.25647 3.16548 6.0455 2.9545C5.83452 2.74353 5.54837 2.625 5.25 2.625C4.95163 2.625 4.66548 2.74353 4.4545 2.9545C4.24353 3.16548 4.125 3.45163 4.125 3.75V11.25H3C2.70163 11.25 2.41548 11.3685 2.2045 11.5795C1.99353 11.7905 1.875 12.0766 1.875 12.375C1.875 12.6734 1.99353 12.9595 2.2045 13.1705C2.41548 13.3815 2.70163 13.5 3 13.5H7.5C7.79837 13.5 8.08452 13.3815 8.2955 13.1705C8.50647 12.9595 8.625 12.6734 8.625 12.375C8.625 12.0766 8.50647 11.7905 8.2955 11.5795C8.08452 11.3685 7.79837 11.25 7.5 11.25ZM14.25 6.75H13.125V3.75C13.125 3.45163 13.0065 3.16548 12.7955 2.9545C12.5845 2.74353 12.2984 2.625 12 2.625C11.7016 2.625 11.4155 2.74353 11.2045 2.9545C10.9935 3.16548 10.875 3.45163 10.875 3.75V6.75H9.75C9.45163 6.75 9.16548 6.86853 8.9545 7.0795C8.74353 7.29048 8.625 7.57663 8.625 7.875C8.625 8.17337 8.74353 8.45952 8.9545 8.6705C9.16548 8.88147 9.45163 9 9.75 9H14.25C14.5484 9 14.8345 8.88147 15.0455 8.6705C15.2565 8.45952 15.375 8.17337 15.375 7.875C15.375 7.57663 15.2565 7.29048 15.0455 7.0795C14.8345 6.86853 14.5484 6.75 14.25 6.75Z" fill="black" />
                                            </svg>
                                        </span>
                                    </button>
                                    <button className="flex h-[48px] flex-row items-center sm:flex px-6 py-3 bg-[#F0F0F0] rounded-fulltext-white font-bold rounded-full hover:opacity-90 gap-4">
                                        <span>
                                            Latest
                                        </span>
                                        <span>
                                            <ChevronDown className='w-5 h-5' />
                                        </span>
                                    </button>
                                    <button className="hidden h-[48px] sm:block px-6 py-3 bg-black text-white font-bold rounded-full hover:opacity-90">
                                        Write a Review
                                    </button>
                                </div>
                            </div>
                            {/* Review Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                {/* Review Card 1 */}
                                {
                                    [1, 2, 3].map(() => {
                                        return (
                                            <div className="p-8 border max-w-[610px] min-h-[250px] border-slate-200 dark:border-slate-800 rounded-xl flex flex-col gap-4">
                                                <div className="flex justify-between">
                                                    {/* sao */}
                                                    <div className="flex items-center text-yellow-400 gap-1">
                                                        <span className="material-symbols-outlined text-xl">
                                                            <Star />
                                                        </span>
                                                        <span className="material-symbols-outlined text-xl">
                                                            <Star />
                                                        </span>
                                                        <span className="material-symbols-outlined text-xl">
                                                            <Star />
                                                        </span>
                                                        <span className="material-symbols-outlined text-xl">
                                                            <Star />
                                                        </span>
                                                        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>
                                                            <StarHalf />
                                                        </span>
                                                    </div>
                                                    <span className="material-symbols-outlined text-slate-400">
                                                        <Ellipsis />
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <h4 className="font-bold text-lg">Samantha D.</h4>
                                                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                                </div>
                                                <p className="text-slate-500 leading-relaxed italic">
                                                    "I absolutely love this t-shirt! The design is unique and the fabric feels so soft. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                                                </p>
                                                <p className="text-slate-400 text-sm mt-2">Posted on August 14, 2023</p>
                                            </div>
                                        )
                                    })
                                }
                                {/* Review Card 2 */}
                                {
                                    [1, 2, 3].map(() => {
                                        return (
                                            <div className="p-8 border border-slate-200 min-h-[250px] dark:border-slate-800 rounded-xl flex flex-col gap-4">
                                                <div className="flex justify-between">
                                                    <div className="flex items-center text-yellow-400 gap-1">
                                                        <span className="material-symbols-outlined text-xl">
                                                            <Star />
                                                        </span>
                                                        <span className="material-symbols-outlined text-xl">
                                                            <Star />
                                                        </span>
                                                        <span className="material-symbols-outlined text-xl">
                                                            <Star />
                                                        </span>
                                                        <span className="material-symbols-outlined text-xl">
                                                            <Star />
                                                        </span>
                                                    </div>
                                                    <span className="material-symbols-outlined text-slate-400">
                                                        <Ellipsis />
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <h4 className="font-bold text-lg">Alex M.</h4>
                                                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                                </div>
                                                <p className="text-slate-500 leading-relaxed italic">
                                                    "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. It fits perfectly and has held up well after multiple washes. Highly recommended!"
                                                </p>
                                                <p className="text-slate-400 text-sm mt-2">Posted on August 15, 2023</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="flex justify-center mt-12 mb-20">
                                <button className="px-8 py-3 border-2 border-slate-200 dark:border-slate-800/20 rounded-full font-bold hover:bg-slate-50 transition">
                                    Load More Reviews
                                </button>
                            </div>
                        </div>
                    </>
                )}
                {/* Breadcrumbs */}

            </Container>
            <ViewsProduct />
        </>
    )
}

export default DetailsPage