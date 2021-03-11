export interface UsableProduct {
    // Basic Product Info
    id: number;
    category: string;
    subCategory: string;
    name: string;

    // Usable Product Specific Info
    isBought: boolean;
    quantity: number;
}
