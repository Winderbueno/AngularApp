//#region Angular, Material, NgRx
import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Store } from '@ngrx/store';
import { SetValueAction } from 'ngrx-forms';
//#endregion

//#region App Component, Model
import * as fromStore from '@shoppingList/store/';
import * as fromForm from '@form/store/';
//#endregion

//#region Model
import { ShoppingList } from '@shoppingList/model/current/shopping-list.model';
import { UsedProduct } from '@shoppingList/model/current/used-product.model';
//#endregion


@Component({ 
  selector: 'shopping-list-view',
  templateUrl: './shopping-list-view.component.html' 
})
export class ShoppingListViewComponent implements AfterViewChecked {

  readonly editMode$=this.store.select(fromForm.selectControlValue('ShoppingListActions','EditMode'));
  readonly accordionExpanded$=this.store.select(fromForm.selectControlValue('ShoppingListActions','Accordeon'));

  // Shopping List
  myShoppingList!: ShoppingList[];
  @ViewChild('accordion',{static:false}) Accordion!: MatAccordion;
  
  constructor(private store: Store) {
    this.store.select(fromStore.selectActive)
      .subscribe(value => this.myShoppingList=value);
  }

  ngAfterViewChecked(){
    this.accordionExpanded$.subscribe(val => {
      // TODO - Should not update the view after ngChanges (in Component Lifecycle)
      if(this.Accordion != undefined) {
        val === true ?
        this.Accordion.openAll() :
        this.Accordion.closeAll();
      }
    });
  }

  openExpansionPanel(){
    this.store.dispatch(new SetValueAction('ShoppingListActions.Accordeon', true));   
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
}
