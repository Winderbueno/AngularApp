//#region Angular and RxJS Module
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//#endregion

//#region Model and Service
import { ShoppingList } from '@app_business/model/shopping-list.model';
import { UsedProduct } from '@app_business/model/used-product.model';
//#endregion

// Api Info
import { environment } from '@env/environment';
const baseUrl = `${environment.apiUrl}/shoppinglist`;

@Injectable({ providedIn: 'root' })
export class ShoppingListService {

  constructor(private http: HttpClient) { }
  
  /** Get active shoppingList  */
  getActive():Observable<ShoppingList> {
    return this.http.get<ShoppingList>(`${baseUrl}/active`);
  }

  /** For all shoppingList product, reset bought status */
  resetBoughtStatus(idSL: string|undefined) : Observable<ShoppingList> {
    return this.http.put<ShoppingList>(`${baseUrl}/reset-bought/${idSL}`, []);
  }

  /** Update one shoppingList product */
  updtProduct(idSL: string|undefined, body: UsedProduct) : Observable<{}> {
    return this.http.put(`${baseUrl}/update-product/${idSL}`, body);
  }
}
