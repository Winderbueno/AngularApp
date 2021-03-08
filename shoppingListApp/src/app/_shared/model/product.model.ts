export interface Product {
    
  // Identification Info
  id: number;
  category: string;
  subCategory: string;
  name: string;

  // Buying Info
  quantity: number;
  isBought: boolean;
}