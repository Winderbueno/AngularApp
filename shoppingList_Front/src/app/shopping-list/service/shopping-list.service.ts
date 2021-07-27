//#region Angular, Material, RxJS
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//#endregion

//#region App Component, Model, Service
import { ShoppingList } from '@app/shopping-list/model/shopping-list.model';
import { UsedProduct } from '@app/shopping-list/model/used-product.model';
import { CreateProductReq } from '../model/create-product-req.model';
//#endregion

// Api Info
import { envBusinessAPI } from '@env/environment';
const baseUrl = `${envBusinessAPI.apiUrl}/shoppinglist`;


@Injectable({ providedIn: 'root' })
export class ShoppingListService {

  private sLSubject!: BehaviorSubject<ShoppingList>;
  public sL!: Observable<ShoppingList>;

  constructor(private http: HttpClient) {
    // No Account logged in is a user with a '-1' id } */
    this.sLSubject = new BehaviorSubject<ShoppingList>({ shoppingListId: "-1" });
    this.sL = this.sLSubject.asObservable();
  }

  public get active(): ShoppingList { return this.sLSubject.value; }

  /** Get active shoppingList */
  getActive():Observable<ShoppingList> {
    return this.http.get<ShoppingList>(`${baseUrl}/active`)
      .pipe(map(sL => {
        this.sLSubject.next(sL);
        return sL;
      }));
  }

  /** For all shoppingList product, reset bought status */
  resetBoughtStatus(idSL: string|undefined) : Observable<ShoppingList> {
    return this.http.put<ShoppingList>(`${baseUrl}/reset-bought/${idSL}`, [])
      .pipe(map(sL => {
        this.sLSubject.next(sL);
        return sL;
      }));
  }

  /** In a shoppingList, create a product */
  createProduct(idSL: string|undefined, body: CreateProductReq) : Observable<{}> {
    return this.http.post(`${baseUrl}/create-product/${idSL}`, body);
  }

  /** In a shoppingList, update a product  */
  updtProduct(idSL: string|undefined, body: UsedProduct) : Observable<{}> {
    return this.http.put(`${baseUrl}/update-product/${idSL}`, body);
  }
}
