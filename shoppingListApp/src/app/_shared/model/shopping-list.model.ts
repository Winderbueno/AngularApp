import { CatUsableProduct } from "./usable-product.model";

export interface ShoppingList {

    id: number;
    idUser: number; // User Id
    idShoppingListModel: number; // ShoppingList based model Id

    // ShoppingList Product List 
    productList: CatUsableProduct[];
}