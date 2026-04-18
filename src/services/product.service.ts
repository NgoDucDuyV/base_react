import http from "../lib/http"
import type { TProduct, TProductFrom } from "../types/product.type"

export const productService = {
    getProduct: (): Promise<TProduct[]> => {
        return http.get<TProduct[]>(`/product`).then((res) => res.data)
    },
    getDetailProduct: (id: string): Promise<TProduct> => {
        return http.get<TProduct>(`/product/${id}`).then((res) => res.data)
    },

    products: (): Promise<TProduct[]> => {
        return http.get<TProduct[]>(`/product`).then((res) => res.data)
    },

    product: (id: string | number): Promise<TProduct> => {
        return http.get<TProduct>(`/product/${id}`).then((res) => res.data)
    },

    createProduct: (data: TProductFrom): Promise<TProduct> => {
        return http.post<TProduct>(`/product`, data).then((res) => res.data)
    },
    deleteProduct: (id: string | number): Promise<TProduct> => {
        return http.delete<TProduct>(`/product/${id}`).then((res) => res.data)
    },
    updateProduct: (id: string | number, data: TProductFrom): Promise<TProduct> => {
        return http.put<TProduct>(`/product/${id}`, data).then((res) => res.data)
    },

    searchProduct: (keyword: string, category_id: string): Promise<TProduct[]> => {

        let url = `/product?name_like=${keyword}`;

        if (category_id) {
            url += `&category_id=${category_id}`
        }
        
        return http.get<TProduct[]>(url).then((res) => res.data)
    }
}