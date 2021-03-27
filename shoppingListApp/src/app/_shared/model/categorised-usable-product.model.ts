export interface CategorisedUsableProduct {
    // Basic Product Info
    category: string;
    subCatProducts: SubCategorisedUsableProduct[];
}

export interface SubCategorisedUsableProduct {
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
