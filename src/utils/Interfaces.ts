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
    data?: {
        products: Product[];
        total: number;
        skip: number;
        limit: number;
    };
    users?: User[]; // Add the users property

}
export interface ApiResponseForOthers<T> {
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


interface Address {
    address: string;
    city: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    postalCode: string;
    state: string;
}

interface Hair {
    color: string;
    type: string;
}

interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

interface Company {
    address: Address;
    department: string;
    name: string;
    title: string;
}

interface Crypto {
    coin: string;
    wallet: string;
    network: string;
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
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    domain: string;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: Crypto;

}

export interface UpdateUserPayload {
    lastName?: string;
    firstName?: string;
    age?: number;
    gender?: string;
    email?: string;
    phone?: string;
    username?: string;
    password?: string;

}