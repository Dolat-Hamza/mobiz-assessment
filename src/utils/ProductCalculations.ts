import {Product} from "@/utils/Interfaces";


export function calculateAverageRating(products: Product[]): number {
    if (products.length === 0) return 0;

    const totalRating = products.reduce((sum, product) => sum + product.rating, 0);
    return totalRating / products.length;
}

export function countProductsByCategory(products: Product[]): Record<string, number> {
    const counts: Record<string, number> = {};
    products.forEach(product => {
        counts[product.category] = (counts[product.category] || 0) + 1;
    });
    return counts;
}

// Optional: Calculate discounted prices
export function getDiscountedPrice(price: number, discountPercentage: number): number {
    return price * (1 - discountPercentage / 100);
}

export function countProductsByBrand(products: Product[]): Record<string, number> {
    const counts: Record<string, number> = {};
    products.forEach(product => {
        counts[product.brand] = (counts[product.brand] || 0) + 1;
    });
    return counts;
}