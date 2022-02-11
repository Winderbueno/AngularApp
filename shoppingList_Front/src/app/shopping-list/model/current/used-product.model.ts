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
export class UsedProduct {
  usedProductId!: number;
  name!: string;
  bought: boolean = false;
  quantity: number = 0;
  note: string | undefined;
}
