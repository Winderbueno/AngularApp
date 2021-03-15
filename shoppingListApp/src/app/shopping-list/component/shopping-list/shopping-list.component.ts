import { Component, OnInit } from '@angular/core';

// Model
import { ShoppingList } from 'src/app/_shared/model/shopping-list.model';
import { UsableProduct } from 'src/app/_shared/model/categorised-usable-product.model';

// Service
import { ShoppingListService } from 'src/app/_shared/service/shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  
  myShoppingList: ShoppingList | undefined;

  constructor(
    private shoppingListServ: ShoppingListService
  ) { }

  ngOnInit(): void {
    // Asynchronously Get User's shopping list
    this.shoppingListServ.getShoppingList()
        .subscribe(shoppingList => this.myShoppingList = shoppingList);
  }

  // If user click on 1 prod, Swap value of isBought for product
  onProductClick(cat: string, subCat: string, prod: UsableProduct): void {
    
    if(this.myShoppingList){
      let catProdToUpdt = this.myShoppingList.productList.find(elt => elt.category == cat);
      if (catProdToUpdt) { 
        let subCatProdToUpdt = catProdToUpdt.subCatProducts.find(elt => elt.subCategory == subCat);
        if (subCatProdToUpdt) { 
          let prodToUpdt = subCatProdToUpdt.usableProducts.find(elt => elt.id == prod.id);
          if(prodToUpdt) prodToUpdt.isBought ? prodToUpdt.isBought=false : prodToUpdt.isBought = true;
        }
      } 
    }
  }

}