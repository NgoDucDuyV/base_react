export const queryKeysProduct = {
    product: {
        all: ['product'] as const,
        list: () => [...queryKeysProduct.product.all, 'list'] as const,
        detail: (id: string) => [...queryKeysProduct.product.all, 'detail', id] as const,
        search: (keyword: string, category_id: string) => [...queryKeysProduct.product.all, 'search', keyword, category_id] as const
    }
}