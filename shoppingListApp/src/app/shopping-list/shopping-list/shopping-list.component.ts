//#region Angular and RxJS Module
import { Component, OnInit } from '@angular/core';
//#endregion

//#region Model and Service
import { ShoppingList } from '@app/_shared/model/shopping-list.model';
import { CatUsableProduct, UsableProduct } from '@app/_shared/model/categorised-usable-product.model';
import { ShoppingListService } from '@app/_shared/service/business/shopping-list.service';
//#endregion

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
    // Get User's shopping list from server
    this.shoppingListServ.getShoppingList()
        .subscribe(shoppingList => this.myShoppingList = shoppingList);
  }

  /**
   * If user click on 1 prod, Swap value of isBought for product
   * @param prod 
   */
   SwapBuyStatusOfProduct(prod: UsableProduct): void {
    if(prod) prod.isBought ? prod.isBought=false : prod.isBought = true;    
  }

  /**
   * Reset Bought Status for all product in one category
   * @param catProds 
   */
  ResetBuyStatusOfProductCategory(event: Event, catProds:CatUsableProduct): void {
    event.stopPropagation(); // To deactivate the collapse/uncollapse when clicking 'Reset'
    catProds.subCatProducts.forEach(
      subCatProd => subCatProd.usableProducts.forEach(
        prod => prod.isBought = false
      )
    )
  }

}