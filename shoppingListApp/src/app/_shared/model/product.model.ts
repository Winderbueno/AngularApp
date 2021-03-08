export interface Product {
    
  // Identification Info
  id: string;
  category: string;
  subCategory: string;
  name: string;

  // Buying Info
  quantity: BigInteger;
  isBought: boolean;
}