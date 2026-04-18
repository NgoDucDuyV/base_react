import { queryKeysProduct } from "@/queries/product.query";
import { productService } from "@/services/product.service";
import type { TProductFrom } from "@/types/product.type";
import { Mutation, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";

export const useProducts = () => {
    return useQuery({
        queryKey: queryKeysProduct.product.list(),
        queryFn: productService.products,
        retry: false,
        staleTime: 1000 * 60 * 5,
    })
}

export const useProduct = (id: string | number) => {
    return useQuery({
        queryKey: queryKeysProduct.product.detail(String(id)),
        queryFn: () => productService.product(id),
        retry: false,
        staleTime: 1000 * 60 * 5,
    })
}

export const useProductCreate = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: TProductFrom) => productService.createProduct(data),
        onSuccess: () => {
            queryClient.invalidateQueries(
                { queryKey: queryKeysProduct.product.list() }
            )
            message.success("Thêm mới thành công")
        },
        onError: (error) => {
            message.error("Thêm mới thất bại")
            console.log(error);
        }
    })
}

export const useProductUpdate = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id, data }: { id: string | number, data: TProductFrom }) => productService.updateProduct(id, data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: queryKeysProduct.product.list(),
            })
            
            queryClient.invalidateQueries({
                queryKey: queryKeysProduct.product.detail(String(data.id))
            })
            message.success("Cập nhật thành công")
        },
        onError: (error) => {
            message.error("Cập nhật thất bại")
            console.log(error);
        }
    })
}
export const useProductDelete = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id: string | number) => productService.deleteProduct(id),
        onSuccess: () => {
            queryClient.invalidateQueries(
                { queryKey: queryKeysProduct.product.list() }
            )
            message.success("Xóa thành công")
        },
        onError: (error) => {
            message.error("Xóa thất bại")
            console.log(error);
        }
    })
}

export const useSearchProduct = (keyword: string, category_id: string) => {
    return useQuery({
        queryKey: queryKeysProduct.product.search(keyword, category_id),
        queryFn: () => productService.searchProduct(keyword, category_id),
        retry: false,
        staleTime: 1000 * 60 * 5,
    })
}