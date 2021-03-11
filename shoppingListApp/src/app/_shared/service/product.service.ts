import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Model and Mock
import { Product } from '../model/product.model';
import { PRODUCTS } from './mock/product.mock';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllAsAsyncMock():Observable<Product[]> {
    const prods = of(PRODUCTS);
    return prods;
  }
}
