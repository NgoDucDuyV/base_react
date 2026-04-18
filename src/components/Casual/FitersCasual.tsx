import { useSearchContext } from '@/contexts/client/search.contex'
import { useCaregorys } from '@/hook/caregory.hook'
import { cn } from '@/lib/utils'
import { Spin } from 'antd'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

type FitersCasualProps = {
    className?: string
}
function FitersCasual({ className }: FitersCasualProps) {

    const { categoryselect, setCategoryselect } = useSearchContext()
    const { data: categoryData, isLoading: categoryLoading } = useCaregorys()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const keyword = searchParams.get("keyword") || ""
    const category_id = searchParams.get("category_id") || ""

    useEffect(() => {
        if (category_id) {
            setCategoryselect(category_id)
        }
    }, [category_id])

    return (
        <>
            <aside className={cn(
                "w-[295px] bg-white rounded-[20px] shadow-sm border border-gray-200 overflow-hidden",
                className
            )}>
                <div className="p-6">
                    {/* BEGIN: Header */}
                    <header className="flex justify-between items-center mb-6" data-purpose="sidebar-header">
                        <h2 className="text-2xl font-bold text-black">Filters</h2>
                        {/* Settings/Adjust Icon */}
                        <button className='hidden sm:flex'>
                            <svg className="text-gray-400" fill="none" height={24} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                <line x1={4} x2={4} y1={21} y2={14} />
                                <line x1={4} x2={4} y1={10} y2={3} />
                                <line x1={12} x2={12} y1={21} y2={12} />
                                <line x1={12} x2={12} y1={8} y2={3} />
                                <line x1={20} x2={20} y1={21} y2={16} />
                                <line x1={20} x2={20} y1={12} y2={3} />
                                <line x1={1} x2={7} y1={14} y2={14} />
                                <line x1={9} x2={15} y1={8} y2={8} />
                                <line x1={17} x2={23} y1={16} y2={16} />
                            </svg>
                        </button>
                    </header>
                    {/* END: Header */}
                    <hr className="border-gray-100 mb-5" />
                    {/* BEGIN: CategoriesList */}
                    <nav className="space-y-4 mb-6" data-purpose="category-navigation">
                        {
                            categoryLoading && (
                                <div className='flex items-center justify-center h-screen'>
                                    <h3>Loading...</h3>
                                    <Spin size='large' />
                                </div>
                            )
                        }
                        <div className="w-full max-w-sm mx-auto bg-white p-4">

                            {categoryData?.map((category) => (
                                <div
                                    onClick={() => {
                                        if (category_id !== String(category.id)) {
                                            navigate(`/casual?keyword=${keyword}&category_id=${category.id}`)
                                        }
                                    }}
                                    key={category.id}
                                    className="flex items-center justify-between py-3 border-b last:border-none cursor-pointer group"
                                >
                                    {/* Text */}
                                    <span className={cn("text-gray-400 text-lg group-hover:text-black transition", categoryselect === String(category.id) && "text-black")}>
                                        {category.name}
                                    </span> 

                                    {/* Arrow */}
                                    <svg
                                        className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M9 5l7 7-7 7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            ))}

                        </div>
                        {/* <div className="filter-item flex justify-between items-center py-1 transition-colors">
                            <span className="text-gray-500 font-medium">T-shirts</span>
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            </svg>
                        </div>
                        <div className="filter-item flex justify-between items-center py-1 transition-colors">
                            <span className="text-gray-500 font-medium">Shorts</span>
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            </svg>
                        </div>
                        <div className="filter-item flex justify-between items-center py-1 transition-colors">
                            <span className="text-gray-500 font-medium">Shirts</span>
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            </svg>
                        </div>
                        <div className="filter-item flex justify-between items-center py-1 transition-colors">
                            <span className="text-gray-500 font-medium">Hoodie</span>
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            </svg>
                        </div>
                        <div className="filter-item flex justify-between items-center py-1 transition-colors">
                            <span className="text-gray-500 font-medium">Jeans</span>
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            </svg>
                        </div> */}
                    </nav>
                    {/* END: CategoriesList */}
                    <hr className="border-gray-100 mb-6" />
                    {/* BEGIN: PriceSection */}
                    <section className="mb-8" data-purpose="price-filter">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-black">Price</h3>
                            <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            </svg>
                        </div>
                        {/* Interactive Price Slider UI */}
                        <div className="px-2 mb-2">
                            <div className="relative w-full h-1 bg-gray-200 rounded-full">
                                <div className="absolute h-1 bg-black rounded-full" style={{ left: '15%', right: '20%' }} />
                                <div className="range-handle left-[15%]" />
                                <div className="range-handle left-[80%]" />
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 px-1 text-black font-semibold">
                            <span>$50</span>
                            <span>$200</span>
                        </div>
                    </section>
                    {/* END: PriceSection */}
                    <hr className="border-gray-100 mb-6" />
                    {/* BEGIN: ColorsSection */}
                    <section className="mb-8" data-purpose="colors-filter">
                        <div className="flex justify-between items-center mb-5">
                            <h3 className="text-xl font-bold text-black">Colors</h3>
                            <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            </svg>
                        </div>
                        {/* Color Grid */}
                        <div className="grid grid-cols-5 gap-y-4 gap-x-2">
                            <button className="w-10 h-10 rounded-full bg-[#1AC124] border border-transparent" />
                            <button className="w-10 h-10 rounded-full bg-[#EE2323] border border-transparent" />
                            <button className="w-10 h-10 rounded-full bg-[#F2EB15] border border-transparent" />
                            <button className="w-10 h-10 rounded-full bg-[#F27E15] border border-transparent" />
                            <button className="w-10 h-10 rounded-full bg-[#15D0F2] border border-transparent" />
                            {/* Selected Color (Blue with Checkmark) */}
                            <button className="w-10 h-10 rounded-full bg-[#063AF5] flex items-center justify-center text-white">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="w-10 h-10 rounded-full bg-[#8E15F2] border border-transparent" />
                            <button className="w-10 h-10 rounded-full bg-[#F215B4] border border-transparent" />
                            <button className="w-10 h-10 rounded-full bg-white border border-gray-300" />
                            <button className="w-10 h-10 rounded-full bg-black border border-transparent" />
                        </div>
                    </section>
                    {/* END: ColorsSection */}
                    <hr className="border-gray-100 mb-6" />
                    {/* BEGIN: SizeSection */}
                    <section className="mb-8" data-purpose="size-filter">
                        <div className="flex justify-between items-center mb-5">
                            <h3 className="text-xl font-bold text-black">Size</h3>
                            <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            </svg>
                        </div>
                        {/* Size Pill Buttons */}
                        <div className="flex flex-wrap gap-2">
                            <button className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-500 text-sm font-medium">XX-Small</button>
                            <button className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-500 text-sm font-medium">X-Small</button>
                            <button className="px-8 py-2.5 rounded-full bg-gray-100 text-gray-500 text-sm font-medium">Small</button>
                            <button className="px-8 py-2.5 rounded-full bg-gray-100 text-gray-500 text-sm font-medium">Medium</button>
                            {/* Selected State */}
                            <button className="px-8 py-2.5 rounded-full bg-black text-white text-sm font-medium">Large</button>
                            <button className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-500 text-sm font-medium">X-Large</button>
                            <button className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-500 text-sm font-medium">XX-Large</button>
                            <button className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-500 text-sm font-medium">3X-Large</button>
                            <button className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-500 text-sm font-medium">4X-Large</button>
                        </div>
                    </section>
                    {/* END: SizeSection */}
                    <hr className="border-gray-100 mb-6" />
                    {/* BEGIN: DressStyleSection */}
                    <section className="mb-8" data-purpose="dress-style-filter">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-black">Dress Style</h3>
                            <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            </svg>
                        </div>
                        <div className="space-y-4">
                            <div className="filter-item flex justify-between items-center py-1 transition-colors">
                                <span className="text-gray-500 font-medium">Casual</span>
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                    </path>
                                </svg>
                            </div>
                            <div className="filter-item flex justify-between items-center py-1 transition-colors">
                                <span className="text-gray-500 font-medium">Formal</span>
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                    </path>
                                </svg>
                            </div>
                            <div className="filter-item flex justify-between items-center py-1 transition-colors">
                                <span className="text-gray-500 font-medium">Party</span>
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                    </path>
                                </svg>
                            </div>
                            <div className="filter-item flex justify-between items-center py-1 transition-colors">
                                <span className="text-gray-500 font-medium">Gym</span>
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </section>
                    {/* END: DressStyleSection */}
                    {/* BEGIN: FooterAction */}
                    <footer className="mt-4" data-purpose="apply-filter-footer">
                        <button className="w-full bg-black text-white py-4 rounded-full font-semibold text-base transition-transform active:scale-95">
                            Apply Filter
                        </button>
                    </footer>
                    {/* END: FooterAction */}
                </div>
            </aside>
        </>
    )
}

export default FitersCasual