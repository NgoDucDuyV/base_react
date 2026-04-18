export interface TProduct {
  id: number,
  name: string,
  slug: string,
  image_url: string,
  gallery: string[],
  current_price: number,
  original_price: number,
  discount_percentage: number,
  rating: number,
  stock: number,
  currency: string,
  description: string,
  category_id: number | string,
  is_featured: boolean
}

export interface TProductFrom {
  name: string,
  description: string,
  slug: string,
  image_url: string,
  current_price: number,
  original_price: number,
  discount_percentage: number,
  stock: number,
  category_id: number | string,
  gallery?: string[],
  rating?: number,
  currency?: string,
  is_featured?: boolean
}

