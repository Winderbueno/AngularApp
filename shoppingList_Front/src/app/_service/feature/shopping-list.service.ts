//#region Angular, Material, RxJS
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//#endregion

//#region App Component, Model, Service
import { ShoppingList } from '@app_model/shopping-list.model';
import { UsedProduct } from '@app_model/used-product.model';
import { CreateProductReq } from '@app_model/create-product-req.model';
//#endregion

// Api Info
import { envBusinessAPI } from '@env/environment';
const baseUrl = `${envBusinessAPI.apiUrl}/shoppinglist`;


@Injectable({ providedIn: 'root' })
export class ShoppingListService {

  private _sLSubject!: BehaviorSubject<ShoppingList>;
  public sL$!: Observable<ShoppingList>;

  constructor(private http: HttpClient) {
    // No Account logged in is a user with a '-1' id } */
    this._sLSubject = new BehaviorSubject<ShoppingList>({ shoppingListId: "-1" });
    this.sL$ = this._sLSubject.asObservable();
  }

  public get active(): ShoppingList { return this._sLSubject.value; }

  /** Get active shoppingList */
  getActive():Observable<ShoppingList> {
    return this.http.get<ShoppingList>(`${baseUrl}/active`)
      .pipe(map(sL => {
        this._sLSubject.next(sL);
        return sL;
      }));
  }

  /** For all shoppingList product, reset bought status */
  resetBoughtStatus(idSL: string) : Observable<ShoppingList> {
    return this.http.put<ShoppingList>(`${baseUrl}/reset-bought/${idSL}`, [])
      .pipe(map(sL => {
        this._sLSubject.next(sL);
        return sL;
      }));
  }

  /** In a shoppingList, create a product */
  createProduct(idSL: string, body: CreateProductReq) : Observable<{}> {
    return this.http.post(`${baseUrl}/create-product/${idSL}`, body);
  }

  /** In a shoppingList, update a product  */
  updtProduct(idSL: string, body: UsedProduct) : Observable<{}> {
    return this.http.put(`${baseUrl}/update-product/${idSL}`, body);
  }

  /** In a shoppingList, delete a product  */
  deleteProduct(idSL: string, idProd: string) : Observable<{}> {
    return this.http.delete(`${baseUrl}/delete-product/${idSL}&${idProd}`);
  }
}
