//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//#endregion

//#region Model
import { ShoppingList } from '@shoppingList/model/current/shopping-list.model';
import { UsedProduct } from '@shoppingList/model/current/used-product.model';
import { CreateProductReq } from '@shoppingList/model/current/create-product-req.model';
//#endregion

// Api Info
import { envBusinessAPI } from '@env/environment';
const baseUrl = `${envBusinessAPI.apiUrl}/shoppinglist`;


@Injectable({ providedIn: 'root' })
export class ShoppingListService {

  constructor(private http: HttpClient) {}

  /** Get active shoppingList */
  getActive():Observable<ShoppingList> {
    return this.http.get<ShoppingList>(`${baseUrl}/active`);
  }

  /** For all shoppingList product, reset bought status */
  resetBoughtStatus(idSL: string) : Observable<ShoppingList> {
    return this.http.put<ShoppingList>(`${baseUrl}/reset-bought/${idSL}`, []);
  }

  /** In a shoppingList, create a product */
  createProduct(idSL: string, body: CreateProductReq) : Observable<{}> {
    return this.http.post(`${baseUrl}/create-product/${idSL}`, body);
  }

  /** In a shoppingList, update a product  */
  updtProduct(idSL: string, body: Partial<UsedProduct>) : Observable<{}> {
    return this.http.put(`${baseUrl}/update-product/${idSL}`, body);
  }

  /** In a shoppingList, delete a product  */
  deleteProduct(idSL: string, idProd: string) : Observable<{}> {
    return this.http.delete(`${baseUrl}/delete-product/${idSL}&${idProd}`);
  }
}
