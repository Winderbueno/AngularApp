import { CatUsedProduct } from "./used-product.model";

export interface ShoppingList {

    shoppingListId: string;
    active?: boolean;
    name?: string;
    description?: string;

    // Related object
    idAccount?: string;
    catProducts?: CatUsedProduct[];
}
