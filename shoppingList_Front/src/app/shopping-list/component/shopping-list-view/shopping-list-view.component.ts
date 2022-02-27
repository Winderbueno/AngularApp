//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region App Component, Model
import * as fromStore from '@shoppingList/store/';
import * as fromForm from '@form/store/';
import * as Actions from './shopping-list-view.actions';
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

  // Component State
  readonly editMode$=this.store.select(fromForm.selectControlValue('ShoppingListActions','EditMode'));
  readonly accordionExpanded$=this.store.select(fromForm.selectControlValue('ShoppingListActions','Accordeon'));
  editMode:boolean = false;
  myShoppingList!: ShoppingList[];
  
  constructor(private store: Store) {
    this.store.select(fromStore.selectActive).subscribe(value => this.myShoppingList=value);
    this.store.select(fromForm.selectControlValue('ShoppingListActions','EditMode'))
      .subscribe(variable => this.editMode = variable as boolean);
  }

  /** For clicked product, swap 'bought' status value */
  swapProductBoughtStatus(
    category:string,
    subCategory:string,
    prod: UsedProduct): void {
    
    let prodChanges:Partial<UsedProduct> = {
      usedProductId: prod.usedProductId,
      bought: !prod.bought
    };

    // Update Product
    if(this.editMode === false) {
      this.store.dispatch(
        Actions.productChipClickedAction({
          shoppingListId: this.myShoppingList[0].shoppingListId,
          category: category,
          subCategory: subCategory,
          productUpdate: { id: prod.usedProductId!, changes: prodChanges }
        })
      );
    }
  }

  deleteProduct(prod: UsedProduct) {
    this.store.dispatch(
      Actions.productChipDeleteButtonClickedAction({
        shoppingListId: this.myShoppingList[0].shoppingListId,
        productId : prod.usedProductId!.toString()
      })
    );
  }
}