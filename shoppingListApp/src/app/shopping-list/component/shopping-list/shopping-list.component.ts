import { Component, OnInit } from '@angular/core';

// Model and Service 
import { ShoppingList } from 'src/app/_shared/business/model/shopping-list.model';
import { CategorisedUsableProduct, UsableProduct } from 'src/app/_shared/business/model/categorised-usable-product.model';
import { ShoppingListService } from '@app/shopping-list/service/shopping-list.service';


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
  ResetBuyStatusOfProductCategory(event: Event, catProds:CategorisedUsableProduct): void {
    event.stopPropagation(); // To deactivate the collapse/uncollapse when clicking 'Reset'
    catProds.subCatProducts.forEach(
      subCatProd => subCatProd.usableProducts.forEach(
        prod => prod.isBought = false
      )
    )
  }

}