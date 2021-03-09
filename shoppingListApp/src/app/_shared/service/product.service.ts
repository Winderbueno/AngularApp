import { Injectable } from '@angular/core';

import { Product } from '../model/product.model';
import { PRODUCTS } from './mock/product.mock';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getMock():Product[] {
    return PRODUCTS;
  }
}
