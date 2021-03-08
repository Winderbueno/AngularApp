import { Product } from "./product.model";

export interface ShoppingList {

    // Identification Info
    id: number;
    
    // Model used by the ShoppingList
    idModelShoppingList: number;

    // ShoppingList Product List 
    productList: Product[];
}