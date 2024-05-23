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
    users?: User[]; // Add the users property

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




export interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;

}

