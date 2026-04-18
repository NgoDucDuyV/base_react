import { queryKeysCaregory } from "@/queries/caregory.query"
import { caregoryService } from "@/services/caregory.service"
import type { TCaregoryForm } from "@/types/caregory.type"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { message } from "antd"

export const useCaregorys = () => {
    return useQuery({
        queryKey: queryKeysCaregory.list(),
        queryFn: caregoryService.caregorys,
        retry: false,
        staleTime: 1000 * 60 * 5,
    })
}

export const useCaregory = (id: string | number) => {
    return useQuery({
        queryKey: queryKeysCaregory.detail(String(id)),
        queryFn: () => caregoryService.caregory(id),
        retry: false,
        staleTime: 1000 * 60 * 5,
    })
}

export const useCaregoryCreate = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: TCaregoryForm) => caregoryService.createCaregory(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                    queryKey : queryKeysCaregory.list()
                }
            )
            message.success("Thêm mới Category thành công")
        },
        onError: (error) => {
            message.error("Thêm mới Category thất bại")
            console.log(error);
        }
    })
}

export const useCaregoryUpdate = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id, data }: { id: string | number, data: TCaregoryForm }) => caregoryService.updateCaregory(id, data),
        onSuccess: (data) => {

            console.log(data);
            
            queryClient.invalidateQueries({
                queryKey: queryKeysCaregory.list(),
            })
            
            queryClient.invalidateQueries({
                queryKey: queryKeysCaregory.detail(String(data.id))
            })
            
            message.success("Cập nhật Category thành công")
        },
        onError: (error) => {
            message.error("Cập nhật Category thất bại")
            console.log(error);
        }
    })
}

export const useCaregoryDelete = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id: string | number) => caregoryService.deleteCaregory(id),
        onSuccess: () => {
            queryClient.invalidateQueries(
                { queryKey: queryKeysCaregory.list() }
            )
            message.success("Xóa Category thành công")
        },
        onError: (error) => {
            message.error("Xóa Category thất bại")
            console.log(error);
        }
    })
}