import http from "@/lib/http"
import type { TCaregory, TCaregoryForm } from "@/types/caregory.type"

export const caregoryService = {
    caregorys: (): Promise<TCaregory[]> => {
        return http.get(`/categories`).then((res) => res.data)
    },
    caregory: (id: string | number): Promise<TCaregory> => {
        return http.get(`/categories/${id}`).then((res) => res.data)
    },
    createCaregory: (data: TCaregoryForm): Promise<TCaregory[]> => {
        return http.post(`/categories`, data).then((res) => res.data)
    },
    updateCaregory: (id: string | number, data: TCaregoryForm): Promise<TCaregory> => {
        return http.put(`/categories/${id}`, data).then((res) => res.data)
    },
    deleteCaregory: (id: string | number): Promise<TCaregory[]> => {
        return http.delete(`/categories/${id}`).then((res) => res.data)
    }
}