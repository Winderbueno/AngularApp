//#region Angular and RxJS Module
import { Component, OnInit } from '@angular/core';
//#endregion

//#region Model and Service
import { ShoppingList } from '@app/_shared/model/shopping-list.model';
import { CatUsedProduct, UsedProduct } from '@app/_shared/model/used-product.model';
import { ShoppingListService } from '@app/_shared/service/business/shopping-list.service';
//#endregion

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  
  myShoppingList: ShoppingList | undefined;

  constructor(private shoppingListServ: ShoppingListService) { }

  ngOnInit(): void {
    // Get User's shopping list from server
    this.shoppingListServ.getShoppingList()
        .subscribe(shoppingList => this.myShoppingList = shoppingList);
  }

  /**
   * If user click on 1 prod, Swap value of isBought for product
   * @param prod 
   */
  SwapBuyStatusOfProduct(prod: UsedProduct): void {
    if(prod) prod.bought ? prod.bought=false : prod.bought = true;
    // TODO - what if the server does not answer ?
    this.shoppingListServ.updtShoppingListProduct(this.myShoppingList?.shoppingListId, prod)
      .subscribe();
  }

  /**
   * Reset Bought Status for all product in one category
   * @param catProds 
   */
  ResetBuyStatusOfProductCategory(event: Event, catProds:CatUsedProduct): void {
    
    // To deactivate 'collapse/uncollapse" when clicking 'Reset'
    event.stopPropagation();

    catProds.subCatProducts.forEach(
      subCatProd => subCatProd.products.forEach(
        prod => prod.bought = false
      )
    )
  }

}