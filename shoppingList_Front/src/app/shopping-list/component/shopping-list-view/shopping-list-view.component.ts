//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//#endregion

//#region App Component, Model
import * as fromStore from '@shoppingList/store/';
//#endregion

//#region Model
import { ShoppingList } from '@shoppingList/model/current/shopping-list.model';
import { UsedProduct } from '@shoppingList/model/current/used-product.model';
//#endregion


@Component({ 
  selector: 'shopping-list-view',
  templateUrl: './shopping-list-view.component.html' 
})
export class ShoppingListViewComponent {

  // View Status
  readonly editMode$: Observable<boolean>= this.store.select(fromStore.editMode);

  // Shopping List
  myShoppingList!: ShoppingList[];

  constructor(private store: Store) {
    this.store.select(fromStore.selectActive)
      .subscribe(value => this.myShoppingList=value);
  }

  /** For clicked product, swap 'bought' status value */
  swapProductBoughtStatus(prod: UsedProduct): void {

    // Swap 'bought' status value
    if(prod) prod.bought ? prod.bought=false : prod.bought = true;

    // TODO - Update Product
    /*this.store.dispatch(
      ShopListPageActions.updtProduct({
        ShoppingListId: this.myShoppingList.shoppingListId,
        Product: prod
      })
    );*/
  }

  deleteProduct(prod: UsedProduct): void {
    // TODO - Delete Product
    /*this.store.dispatch(
      ShopListPageActions.deleteProduct({
        ShoppingListId: this.myShoppingList.shoppingListId,
        ProductId : prod.usedProductId.toString()
      }));*/
  }

  deleteNode(nodeId: string): void {}
}
