import { useSearchProduct } from "@/hook/product.hook";
import { productService } from "@/services/product.service";
import type { TProduct } from "@/types/product.type";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


type TcategoryContex = {
    categoryselect: string
    keyword:string
    setCategoryselect: (categoryselect: string) => void,
    setKeyword: (keyword: string) => void,
    onSearch: () => void
    // dataSearch: TProduct[]
    isLoading: boolean
}

export const searchContext = createContext<TcategoryContex | null>(null)

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {

    const [categoryselect, setCategoryselect] = useState<string>("")
    const [keyword, setKeyword] = useState<string>("")
    // const [dataSearch, setDataSearch] = useState<TProduct[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onSearch = async () : Promise<TProduct[]> => {
        setIsLoading(true)
        try {
            const data:TProduct[] = await productService.searchProduct(keyword || "", categoryselect || "")
            console.log(data);
            return data
        } catch (error) {
            console.log(error);
            return []
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <searchContext.Provider value={{
            categoryselect,
            keyword,

            setCategoryselect,
            setKeyword,

            onSearch,

            isLoading
        }}>
            {children}
        </searchContext.Provider>
    )
}

export const useSearchContext = () => {
    const context = useContext(searchContext)
    if (!context) {
        throw new Error("usecategoryContext must be used within a categoryProvider")
    }
    return context
}