export interface CatUsableProduct {
    // Basic Product Info
    category: string;
    subCatProducts: SubCatUsableProduct[];
}

export interface SubCatUsableProduct {
    subCategory: string;
    usableProducts: UsableProduct[];
}

// Usable Product Specific Info
export interface UsableProduct {
    id: number;
    name: string;
    isBought: boolean;
    quantity: number;
}
