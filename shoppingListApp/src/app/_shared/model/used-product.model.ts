export interface CatUsedProduct {
    // Basic Product Info
    category: string;
    subCatProducts: SubCatUsedProduct[];
}

export interface SubCatUsedProduct {
    subCategory: string;
    products: UsedProduct[];
}

// Usable Product Specific Info
export interface UsedProduct {
    usedProductId: number;
    name: string;
    bought: boolean;
    quantity: number;
    note: string;
}
