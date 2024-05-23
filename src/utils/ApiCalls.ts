import {ApiResponse} from "@/utils/Interfaces";

const baseUrl:string = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://dummyjson.com';

export const getProducts = async (): Promise<ApiResponse<ApiResponse<any>>> => { // Use previously defined APIResponse interface
    try {
        const response = await fetch(`${baseUrl}/products`);

        if (response.ok) { // Check for 200-level status
            const data = await response.json();
            return {
                statusCode: response.status,
                message: 'Products fetched successfully',
                data,
            };
        } else {
            return {
                statusCode: response.status,
                message: `Error fetching products: ${response.statusText}`,
            }; // No data when unsuccessful
        }
    } catch (error) { // Catch network errors
        console.error('Network error fetching products:', error);
        return {
            statusCode: 500,
            message: 'Network error fetching products',
        };
    }
};