import { useQuery } from '@tanstack/react-query'
import Container from '@/components/Container'
import ProductCard from '@/components/client/product/ProductCard'
import { productService } from '@/services/product.service'
import FitersCasual from '@/components/Casual/FitersCasual'
import { ArrowLeft, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'react-router-dom'
import { Spin } from 'antd'
import { useSearchProduct } from '@/hook/product.hook'
import { useSearchContext } from '@/contexts/client/search.contex'
import { useEffect } from 'react'

function CasualPage() {
    // const { keyword: keywordContext, categoryselect: category_idContext } = useSearchContext()
    const [searchParams] = useSearchParams()
    const keyword = searchParams.get("keyword")
    const category_id = searchParams.get("category_id")

    // console.log(keywordContext, category_idContext);
    // console.log(keyword, category_id);
    const { data: dataSearch, isLoading: searchLoading } = useSearchProduct(keyword || "", category_id || "")

    if (searchLoading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <h3>Loading...</h3>
                <Spin size='large' />
            </div>
        )
    }

    // console.log(dataSearch);

    return (
        <Container>
            {
                searchLoading && (
                    <div className='flex items-center justify-center h-screen'>
                        <h3>Loading...</h3>
                        <Spin size='large' />
                    </div>
                )
            }
            <nav className="flex items-center gap-2 text-[16px] text-black/60 py-8">
                <a className="hover:text-black" href="#">Home</a>
                <span className="material-symbols-outlined text-xs">
                    <ChevronRight className='text-black/60' />
                </span>
                <a className="hover:text-black text-black font-medium" href="#">Casual</a>
            </nav>
            <div className="flex flex-col sm:flex-row gap-4 pb-20">
                {/* Sidebar Filters */}
                <FitersCasual className='hidden md:flex' />
                {/* Product Grid Area */}
                <section className="flex-1 h-full">
                    <div className="flex justify-between items-end mb-10">
                        <div className='flex flex-row gap-2 items-end sm:items-start sm:flex-col'>
                            <h1 className="text-4xl font-black tracking-tighter font-headline uppercase">Casual</h1>
                            <p className="text-on-surface-variant text-sm">Showing 1-10 of 100 Products</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                            <span className="text-on-surface-variant hidden sm:block">Sort by:</span>
                            <button className="flex items-center gap-2 hidden sm:flex">
                                <span>
                                    Most Popular
                                </span>
                                <span className="material-symbols-outlined">
                                    <ChevronDown />
                                </span>
                            </button>
                            <button className="p-3 h-[48px] bg-[#F0F0F0] rounded-full flex items-center justify-center sm:hidden">
                                <span className="material-symbols-outlined">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.125 11.625V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V11.625C10.875 11.3266 10.9935 11.0405 11.2045 10.8295C11.4155 10.6185 11.7016 10.5 12 10.5C12.2984 10.5 12.5845 10.6185 12.7955 10.8295C13.0065 11.0405 13.125 11.3266 13.125 11.625ZM18.75 18C18.4516 18 18.1655 18.1185 17.9545 18.3295C17.7435 18.5405 17.625 18.8266 17.625 19.125V20.25C17.625 20.5484 17.7435 20.8345 17.9545 21.0455C18.1655 21.2565 18.4516 21.375 18.75 21.375C19.0484 21.375 19.3345 21.2565 19.5455 21.0455C19.7565 20.8345 19.875 20.5484 19.875 20.25V19.125C19.875 18.8266 19.7565 18.5405 19.5455 18.3295C19.3345 18.1185 19.0484 18 18.75 18ZM21 14.25H19.875V3.75C19.875 3.45163 19.7565 3.16548 19.5455 2.9545C19.3345 2.74353 19.0484 2.625 18.75 2.625C18.4516 2.625 18.1655 2.74353 17.9545 2.9545C17.7435 3.16548 17.625 3.45163 17.625 3.75V14.25H16.5C16.2016 14.25 15.9155 14.3685 15.7045 14.5795C15.4935 14.7905 15.375 15.0766 15.375 15.375C15.375 15.6734 15.4935 15.9595 15.7045 16.1705C15.9155 16.3815 16.2016 16.5 16.5 16.5H21C21.2984 16.5 21.5845 16.3815 21.7955 16.1705C22.0065 15.9595 22.125 15.6734 22.125 15.375C22.125 15.0766 22.0065 14.7905 21.7955 14.5795C21.5845 14.3685 21.2984 14.25 21 14.25ZM5.25 15C4.95163 15 4.66548 15.1185 4.4545 15.3295C4.24353 15.5405 4.125 15.8266 4.125 16.125V20.25C4.125 20.5484 4.24353 20.8345 4.4545 21.0455C4.66548 21.2565 4.95163 21.375 5.25 21.375C5.54837 21.375 5.83452 21.2565 6.0455 21.0455C6.25647 20.8345 6.375 20.5484 6.375 20.25V16.125C6.375 15.8266 6.25647 15.5405 6.0455 15.3295C5.83452 15.1185 5.54837 15 5.25 15ZM7.5 11.25H6.375V3.75C6.375 3.45163 6.25647 3.16548 6.0455 2.9545C5.83452 2.74353 5.54837 2.625 5.25 2.625C4.95163 2.625 4.66548 2.74353 4.4545 2.9545C4.24353 3.16548 4.125 3.45163 4.125 3.75V11.25H3C2.70163 11.25 2.41548 11.3685 2.2045 11.5795C1.99353 11.7905 1.875 12.0766 1.875 12.375C1.875 12.6734 1.99353 12.9595 2.2045 13.1705C2.41548 13.3815 2.70163 13.5 3 13.5H7.5C7.79837 13.5 8.08452 13.3815 8.2955 13.1705C8.50647 12.9595 8.625 12.6734 8.625 12.375C8.625 12.0766 8.50647 11.7905 8.2955 11.5795C8.08452 11.3685 7.79837 11.25 7.5 11.25ZM14.25 6.75H13.125V3.75C13.125 3.45163 13.0065 3.16548 12.7955 2.9545C12.5845 2.74353 12.2984 2.625 12 2.625C11.7016 2.625 11.4155 2.74353 11.2045 2.9545C10.9935 3.16548 10.875 3.45163 10.875 3.75V6.75H9.75C9.45163 6.75 9.16548 6.86853 8.9545 7.0795C8.74353 7.29048 8.625 7.57663 8.625 7.875C8.625 8.17337 8.74353 8.45952 8.9545 8.6705C9.16548 8.88147 9.45163 9 9.75 9H14.25C14.5484 9 14.8345 8.88147 15.0455 8.6705C15.2565 8.45952 15.375 8.17337 15.375 7.875C15.375 7.57663 15.2565 7.29048 15.0455 7.0795C14.8345 6.86853 14.5484 6.75 14.25 6.75Z" fill="black" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 pt-15 relative">
                        {dataSearch && dataSearch.length === 0 ? (
                            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">

                                {/* Icon */}
                                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-6">
                                    <svg
                                        className="w-10 h-10 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 15.75L19.5 19.5M10.5 17.25a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5z"
                                        />
                                    </svg>
                                </div>

                                <p className="text-2xl font-semibold text-gray-800">
                                    Không tìm thấy kết quả
                                </p>

                                <p className="text-gray-500 mt-2 max-w-md">
                                    Không có sản phẩm nào phù hợp với{" "}
                                    <span className="font-medium text-gray-700">"{keyword}"</span>
                                </p>

                                <button
                                    onClick={() => window.location.href = "/"}
                                    className="mt-6 px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
                                >
                                    Quay về trang chủ
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="absolute w-full flex flex-col items-center flex-row justify-between">
                                    {
                                        keyword && (
                                            <>
                                                <h2 className="text-2xl font-semibold text-slate-800 mb-1">
                                                    Kết quả cho "{keyword}"
                                                </h2>
                                            </>
                                        )
                                    }

                                    <p className="text-slate-500 italic text-sm">
                                        Chúng tôi đã tìm thấy {dataSearch?.length} kết quả phù hợp
                                    </p>
                                </div>
                                {dataSearch?.map((item) => {
                                    return (
                                        <ProductCard className='min-w-0 h-[180px] sm:h-[280px]' key={item.id} product={item} />
                                    )
                                })}
                            </>

                        )}
                    </div>
                    {dataSearch && dataSearch.length !== 0 && (
                        <>
                            {/* Pagination */}
                            <div className=''>
                                <nav className="mt-20 flex justify-between items-center border-t border-surface-container-highest pt-8">
                                    <button className="border-2 border-black/10 flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl text-sm font-semibold hover:bg-surface-container transition-colors">
                                        <ArrowLeft />
                                        <span className="material-symbols-outlined">Previous</span>
                                    </button>
                                    <div className="flex gap-2">
                                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-black/10">1</button>
                                        <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-low transition-colors">2</button>
                                        <span className="flex items-center justify-center px-2">...</span>
                                        <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-low transition-colors">9</button>
                                        <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-low transition-colors">10</button>
                                    </div>
                                    <button className="border-2 border-black/10 flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl text-sm font-semibold hover:bg-surface-container transition-colors">
                                        <span className="material-symbols-outlined">Next</span>
                                        <ArrowRight />
                                    </button>
                                </nav>
                            </div>
                        </>
                    )}


                </section>
            </div>

        </Container>
    )
}

export default CasualPage