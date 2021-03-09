import { Component, OnInit } from '@angular/core';

// DataModel
import { ShoppingList } from 'src/app/_shared/model/shopping-list.model';
import { Product } from 'src/app/_shared/model/product.model';

// Service, Mock
import { ProductService } from 'src/app/_shared/service/product.service';
import { PRODUCTS } from 'src/app/_shared/service/mock/product.mock';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  
  private shoppingList: ShoppingList = {
    id: 1,
    idModelShoppingList: 1,
    productList:[]
  };

  constructor(
    private prodServ: ProductService
  ) { }

  ngOnInit(): void {

    // Get Products
    this.shoppingList.productList = this.prodServ.getMock();
  }

  // Swap value of isBought info for product
  onClick(prod: Product): void {
    let isBought = this.shoppingList.productList[prod.id].isBought;
    isBought ? isBought=false : isBought=true; 
  }

}
