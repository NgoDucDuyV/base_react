export interface TCaregory {
    id: number | string,
    name: string,
    slug: string,
    image_url: string,
    description: string,
    is_active: boolean
}

export interface TCaregoryForm {
    name: string,
    slug: string,
    image_url: string,
    description: string,
    is_active: string
}