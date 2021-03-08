import { Component, OnInit } from '@angular/core';

// Data Model
import { ShoppingList } from 'src/app/_shared/model/shopping-list.model';

// Mock
import { PRODUCTS } from 'src/app/_shared/mock/product.mock';
import { Product } from 'src/app/_shared/model/product.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  
  shoppingList: ShoppingList = {
    id: 1,
    idModelShoppingList: 1,
    productList:PRODUCTS
  };

  constructor() { }

  ngOnInit(): void {
  }

  // Swap value of isBought info for product
  onClick(prod: Product): void {
    let isBought = this.shoppingList.productList[prod.id].isBought;
    isBought ? isBought=false : isBought=true; 
  }

}
