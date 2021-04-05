import { CatUsableProduct } from "./usable-product.model";

export interface ShoppingList {

    id: string;
    idAccount: string; // User Id
    idShoppingListModel: string; // ShoppingList based model Id

    // ShoppingList Product List 
    productList: CatUsableProduct[];
}