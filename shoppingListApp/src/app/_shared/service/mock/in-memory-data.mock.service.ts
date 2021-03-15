import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

// Model
import { Product } from '../../model/product.model';
import { CategorisedUsableProduct } from '../../model/categorised-usable-product.model';
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

    const catUsableProductSet: CategorisedUsableProduct[] = [ 
      { // Category "Repas"
        category: 'Repas',
        subCatProducts : [ 
          {
            subCategory:'Matin',
            usableProducts: [ 
              { id: 0, name: 'Nutella', isBought: false, quantity: 1} ]
          }]
      }, 
      {
        category: 'Apero',
        subCatProducts : [ 
          {
            subCategory:'Boisson',
            usableProducts: [ 
              { id: 1, name: 'Biere', isBought: false, quantity: 1}]
          }, 
          {
            subCategory:'Sales',
            usableProducts: [ 
              { id: 3, name: 'Chips', isBought: false, quantity: 2},
              { id: 10, name: 'Cacahuete', isBought: true, quantity: 1}]
          }]
      }, 
      {
        category: 'Hygiene',
        subCatProducts : [
          {
            subCategory:'Corps',
            usableProducts: [ 
              { id: 12, name: 'Creme', isBought: true, quantity: 1}]
          }]
      }]
  
    const shoppingList: ShoppingList = {
      id: 0, 
      idUser: 0,
      idShoppingListModel: 0, 
      productList: catUsableProductSet,
    };
    
    return { shoppingList, products };
  }

}