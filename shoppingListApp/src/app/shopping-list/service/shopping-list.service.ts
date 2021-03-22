import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// Model
import { ShoppingList } from '../../_shared/business/model/shopping-list.model';


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
