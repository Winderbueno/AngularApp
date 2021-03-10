import { Component, OnInit } from '@angular/core';

// DataModel
import { ShoppingList } from 'src/app/_shared/model/shopping-list.model';
import { Product } from 'src/app/_shared/model/product.model';

// Service
import { ProductService } from 'src/app/_shared/service/product.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  
  shoppingList: ShoppingList = {
    id: 1,
    idModelShoppingList: 1,
    productList:[]
  };

  constructor(
    private prodServ: ProductService
  ) { }

  ngOnInit(): void {
    // Asynchronously Get Products
    this.prodServ.getAllAsAsyncMock()
        .subscribe(prods => this.shoppingList.productList = prods);
  }

  // If user click on 1 prod, Swap value of isBought for product
  onClick(prod: Product): void {
    let isBought = this.shoppingList.productList[prod.id].isBought;
    isBought ? isBought=false : isBought=true; 
  }

}
