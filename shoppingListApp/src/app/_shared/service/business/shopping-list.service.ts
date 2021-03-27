//#region Angular and RxJS Module
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
//#endregion

//#region Model and Service
import { ShoppingList } from '../../model/shopping-list.model';
//#endregion


@Injectable({ providedIn: 'root' })
export class ShoppingListService {

  private shoppingListURL = 'api/shoppingList';

  constructor(private http: HttpClient) { }
  
  /**
   * Get shoppingList from server
   * @returns 
   */
  getShoppingList():Observable<ShoppingList> {
    return this.http.get<ShoppingList>(this.shoppingListURL);
  }
}
