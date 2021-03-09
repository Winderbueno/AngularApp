import { Component, OnInit } from '@angular/core';

// DataModel
import { ShoppingList } from 'src/app/_shared/model/shopping-list.model';
import { Product } from 'src/app/_shared/model/product.model';

// Mock
import { PRODUCTS } from 'src/app/_shared/mock/product.mock';

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
