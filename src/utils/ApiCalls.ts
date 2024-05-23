import {ApiResponse, User} from "@/utils/Interfaces";

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
export const getUsers = async (): Promise<ApiResponse<ApiResponse<any>>> => { // Use previously defined APIResponse interface
    try {
        const response = await fetch(`${baseUrl}/users`);

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

export const addUser = async (user: User): Promise<ApiResponse<any>> => {
    try {
        const response = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });

        if (response.ok) { // Check for 200-level status
            const data = await response.json();
            return {
                statusCode: response.status,
                message: 'User added successfully',
                data,
            };
        } else {
            return {
                statusCode: response.status,
                message: `Error adding user: ${response.statusText}`,
            }; // No data when unsuccessful
        }
    } catch (error) { // Catch network errors
        console.error('Network error adding user:', error);
        return {
            statusCode: 500,
            message: 'Network error adding user',
        };
    }
};