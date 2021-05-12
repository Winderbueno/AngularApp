//#region Angular and RxJS Module
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//#endregion

//#region Model and Service
import { Product } from '@app_model/product.model';
//#endregion

// Api Info
import { environment } from '@env/environment';
const baseUrl = `${environment.apiUrl}/products`;

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private http: HttpClient) { }

  /**
   * Get All product from server
   * @returns 
   */
  getAll():Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}`);
  }

}
