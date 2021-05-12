//#region Angular and RxJS Module
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//#endregion

//#region Model and Service
import { ShoppingList } from '@app_model/shopping-list.model';
import { UsedProduct } from '@app_model/used-product.model';
//#endregion

// Api Info
import { environment } from '@env/environment';
const baseUrl = `${environment.apiUrl}/shoppinglist`;

@Injectable({ providedIn: 'root' })
export class ShoppingListService {

  constructor(private http: HttpClient) { }
  
  /**
   * Get shoppingList from server
   * @returns 
   */
  getShoppingList():Observable<ShoppingList> {
    return this.http.get<ShoppingList>(`${baseUrl}/active`);
  }

  /**
   * Update shoppingList product from server
   * @returns 
   */
   updtShoppingListProduct(idSL: string|undefined, body: UsedProduct) : Observable<{}> {
    return this.http.put(`${baseUrl}/update-product/${idSL}`, body);
  }
}
