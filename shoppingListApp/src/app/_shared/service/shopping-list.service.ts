import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Model and Mock
import { ShoppingList } from '../model/shopping-list.model';
import { MY_SHOPPING_LIST } from './mock/shopping-list.mock';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  getShoppingListAsAsyncMock():Observable<ShoppingList> {
    
    const myShoppingList = of(MY_SHOPPING_LIST);
    return myShoppingList;
  }
}
