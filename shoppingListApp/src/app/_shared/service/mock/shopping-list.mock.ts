import { UsableProduct } from "../../model/usable-product.model";
import { ShoppingList } from "../../model/shopping-list.model";

const USABLE_PRODUCT_SET_1: UsableProduct[] = [
    
    { id: 0, category: 'Repas', subCategory: 'Matin', name: 'Nutella', isBought: false, quantity: 1 },
    { id: 1, category: "Apero", subCategory: "Boisson", name: 'Biere', isBought: false, quantity: 1 },
    { id: 3, category: "Apero", subCategory: "Sales", name: 'Chips', isBought: false, quantity: 2 },
    { id: 12, category: "Hygiene", subCategory: "Corps", name: 'Creme', isBought: true, quantity: 1 },
];

export const MY_SHOPPING_LIST: ShoppingList = {
    id: 0, 
    idUser: 0,
    idShoppingListModel: 0, 
    productList: USABLE_PRODUCT_SET_1,
};

