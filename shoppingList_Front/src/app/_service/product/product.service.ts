//#region Angular, Material, RxJS
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//#endregion

//#region App Component, Model, Service
import { Product } from '@app/product/model/product.model';
//#endregion

// Api Info
import { envBusinessAPI } from '@env/environment';
const baseUrl = `${envBusinessAPI.apiUrl}/products`;

// TODO - Le dossier "product" est actuellement non utilise dans l'App, A suppr ?
@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private http: HttpClient) { }

  /** Get All product from server */
  getAll():Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}`);
  }

}
