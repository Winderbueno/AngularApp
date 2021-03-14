import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

// Model
import { Product } from '../../model/product.model';
import { UsableProduct } from '../../model/usable-product.model';
import { ShoppingList } from '../../model/shopping-list.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  /**
   * Create a DB that mock Product service and ShoppingList Service 
   * @returns
   */
  createDb() {

    const products: Product[] = [
      { id: 0, category: 'Repas', subCategory: 'Matin', name: 'Nutella'},
      { id: 1, category: "Apero", subCategory: "Boisson", name: 'Biere'},
    ];

    const usableProductSet: UsableProduct[] = [
    
      { id: 0, category: 'Repas', subCategory: 'Matin', name: 'Nutella', isBought: false, quantity: 1 },
      { id: 1, category: "Apero", subCategory: "Boisson", name: 'Biere', isBought: false, quantity: 1 },
      { id: 3, category: "Apero", subCategory: "Sales", name: 'Chips', isBought: false, quantity: 2 },
      { id: 12, category: "Hygiene", subCategory: "Corps", name: 'Creme', isBought: true, quantity: 1 },
    ];
  
    const shoppingList: ShoppingList = {
      id: 0, 
      idUser: 0,
      idShoppingListModel: 0, 
      productList: usableProductSet,
    };
    
    return { shoppingList, products };
  }

}