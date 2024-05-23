export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface APIResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}
export interface ApiResponse<T> {
    statusCode: number;
    message: string;
    data?: T;
}

export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}
export interface Props {
    products: Product[];
}

// utils/types.ts

export interface User {
    id: number;
    name: string;
    email: string;
    // ... other fields
}

export interface Product {
    id: number;
    title: string;
    price: number;
    // ... other fields
}

export interface Order {
    id: number;
    userId: number;
    productId: number;
    quantity: number;
    // ... other fields
}
