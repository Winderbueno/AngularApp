import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

// Model
import { UsableProduct } from '../model/usable-product.model';
import { ShoppingList } from '../model/shopping-list.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const USABLE_PRODUCT_SET_1: UsableProduct[] = [
    
      { id: 0, category: 'Repas', subCategory: 'Matin', name: 'Nutella', isBought: false, quantity: 1 },
      { id: 1, category: "Apero", subCategory: "Boisson", name: 'Biere', isBought: false, quantity: 1 },
      { id: 3, category: "Apero", subCategory: "Sales", name: 'Chips', isBought: false, quantity: 2 },
      { id: 12, category: "Hygiene", subCategory: "Corps", name: 'Creme', isBought: true, quantity: 1 },
    ];
  
    const MY_SHOPPING_LIST: ShoppingList = {
      id: 0, 
      idUser: 0,
      idShoppingListModel: 0, 
      productList: USABLE_PRODUCT_SET_1,
    };
    
    return { MY_SHOPPING_LIST };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is 
  //    Empty, the method below returns the initial number (11).
  //    Not empty, the method below returns the 'highest hero id + 1'
  //genId(products: Product[]): number {
  //  return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  //}
}