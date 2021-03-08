import { Product } from "./product.model";

export interface ShoppingList {

    // Identification Info
    id: string;
    
    // BasedTemplate
    idModelShoppingList: string;

    // ShoppingList Product List 
    productList: Product[];
}