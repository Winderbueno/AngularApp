import { CatUsedProduct } from "@app_model/used-product.model";

export interface ShoppingList {

    shoppingListId: string;
    active?: boolean;
    name?: string;
    description?: string;

    idAccount?: string; // User Id
    idShoppingListModel?: string; // ShoppingList based model Id

    // ShoppingList Product List
    catProducts?: CatUsedProduct[];
}
