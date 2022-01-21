//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//#endregion

//#region Model
import { Product } from '../model/product.model';
//#endregion

// Api Info
import { envBusinessAPI } from '@env/environment';
const baseUrl = `${envBusinessAPI.apiUrl}/products`;

// TODO - Faire le back
@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private http: HttpClient) { }

  /** Get All product from server */
  getAll():Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}`);
  }
}
