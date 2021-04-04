//#region Angular and RxJS Module
import { Injectable } from '@angular/core';
//#endregion

//#region Model and Service
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '@app/_shared/model/product.model';
import { CategorisedUsableProduct } from '@app/_shared/model/categorised-usable-product.model';
import { ShoppingList } from '@app/_shared/model/shopping-list.model';
//#endregion

@Injectable({ providedIn: 'root' })
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
      {
        category: 'Repas',
        subCatProducts : [ 
          {
            subCategory:'Matin',
            usableProducts: [
              { id: 0, name: 'Nutella', isBought: false, quantity: 1},
              { id: 1, name: 'Confiture', isBought: false, quantity: 1},
              { id: 2, name: 'Café', isBought: false, quantity: 1},
              { id: 3, name: 'Miel', isBought: false, quantity: 1},
              { id: 4, name: 'Thé', isBought: false, quantity: 1},
              { id: 5, name: 'Biscuit', isBought: false, quantity: 1},
              { id: 6, name: 'Lait', isBought: false, quantity: 1}]
          },
          {
            subCategory:'Sandwich',
            usableProducts: [ 
              { id: 7, name: 'Pain2Mie', isBought: false, quantity: 1},
              { id: 8, name: 'Carotte', isBought: false, quantity: 1},
              { id: 9, name: 'Charcut\'', isBought: false, quantity: 1},
              { id: 10, name: 'Fromage', isBought: false, quantity: 1},
              { id: 11, name: 'Oeufs', isBought: false, quantity: 1},
              { id: 12, name: 'Tomate', isBought: false, quantity: 1},]
          }]
      }, 
      {
        category: 'Apéro/Invitation',
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
    
    return { products, shoppingList };
  }

}