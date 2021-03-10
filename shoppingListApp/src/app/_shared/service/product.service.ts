import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Data Model and Set 
import { Product } from '../model/product.model';
import { PRODUCTS } from './mock/product.mock';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllAsSimpleMock():Product[] {
    return PRODUCTS;
  }

  getAllAsAsyncMock():Observable<Product[]> {
    const prods = of(PRODUCTS);
    return prods;
  }
}
