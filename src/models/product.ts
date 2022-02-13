import { ProductOption, ProductOptionConfigured } from "./product-options";

export type Product = {
    id: string;
    title: string;
    category: string;
    picture?: string;
    description?: string;
    basePrice: number;
    options?: ProductOption[];
    active: boolean;
}

export type ProductConfigured = {
    base: Product,
    optionsConfigured: ProductOptionConfigured[]
}

export type ProductBatch = {
    productConfigured: ProductConfigured,
    count: number
}

export type UploadProductData = {
    product: Product,
    picture?: File
}

export const emptyProduct: Product ={
    id: 'empty',
    title: 'empty title',
    category: '',
    basePrice: 50,
    active: false    
}