import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// Model
import { Product } from '../model/product.model';


@Injectable({ providedIn: 'root' })
export class ProductService {

  private productURL = 'api/products';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get All product from server
   * @returns 
   */
  getAll():Observable<Product[]> {
    return this.http.get<Product[]>(this.productURL);
  }

}
