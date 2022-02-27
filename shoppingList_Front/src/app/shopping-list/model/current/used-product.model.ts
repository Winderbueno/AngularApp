export interface CatUsedProduct {
    category: string;
    subCatProducts: SubCatUsedProduct[];
}

export interface SubCatUsedProduct {
    subCategory: string;
    products: UsedProduct[];
}

// Usable Product Specific Info
// TODO - differentiate model : API DTO / Internal Entity Model / Action Payload
export interface UsedProduct {
  usedProductId?: number;
  name?: string;
  bought?: boolean;
  quantity?: number;
  note?: string;
  category?: string;
  subCategory?: string;
}
