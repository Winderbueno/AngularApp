import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_shared/model/product.model';
import { ShoppingList } from 'src/app/_shared/model/shopping-list.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  product: Product = {
      id: 1,
      category: 'testCat',
      subCategory: 'testSubCat',
      name: 'nameProd',
      quantity: 1,
      isBought: false
  }
  
  shoppingList: ShoppingList = {
    id: 1,
    idModelShoppingList: 1,
    productList:[this.product]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
