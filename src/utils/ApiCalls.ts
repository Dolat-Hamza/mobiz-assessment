import {ApiResponse, UpdateUserPayload, User} from "@/utils/Interfaces";

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
        const response = await fetch(`${baseUrl}/users/add`, {
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

export const getSingleUserById = async (userId: number): Promise<ApiResponse<User>> => {
    try {
        const response = await fetch(`${baseUrl}/users/${userId}`);

        if (response.ok) { // Check for 200-level status
            const data = await response.json();
            return {
                statusCode: response.status,
                message: 'User fetched successfully',
                data,
            };
        } else {
            return {
                statusCode: response.status,
                message: `Error fetching user: ${response.statusText}`,
            }; // No data when unsuccessful
        }
    } catch (error) { // Catch network errors
        console.error('Network error fetching user:', error);
        return {
            statusCode: 500,
            message: 'Network error fetching user',
        };
    }
};


export const updateUser = async (userId: number, updateData: UpdateUserPayload): Promise<ApiResponse<User>> => {
    try {
        const response = await fetch(`${baseUrl}/users/${userId}`, {
            method: 'PUT', // or 'PATCH' based on the use case
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateData),
        });

        if (response.ok) { // Check for 200-level status
            const data = await response.json();
            return {
                statusCode: response.status,
                message: 'User updated successfully',
                data,
            };
        } else {
            return {
                statusCode: response.status,
                message: `Error updating user: ${response.statusText}`,
            }; // No data when unsuccessful
        }
    } catch (error) { // Catch network errors
        console.error('Network error updating user:', error);
        return {
            statusCode: 500,
            message: 'Network error updating user',
        };
    }
};