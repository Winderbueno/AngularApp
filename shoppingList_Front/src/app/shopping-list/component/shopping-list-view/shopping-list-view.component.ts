//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromForm from '@form/store/';
//#endregion

//#region This
import * as fromStore from '../../store/';
import * as Actions from './shopping-list-view.actions';
import { ShoppingList } from '../../model/shopping-list.model';
import { UsedProduct } from '../../model/used-product.model';
//#endregion


@Component({
  selector: 'shopping-list-view',
  templateUrl: './shopping-list-view.component.html'
})
export class ShoppingListViewComponent {

  formId = 'ShoppingListView';
  readonly editMode$ = this.store.select(fromForm.selectControlValue('ShoppingListActions', 'EditMode'));
  readonly accordionExpanded$ = this.store.select(fromForm.selectControlValue('ShoppingListActions', 'Accordeon'));
  editMode: boolean = false;
  myShoppingList!: ShoppingList[];

  constructor(public store: Store) { }

  ngOnInit() {
    this.store.select(fromStore.selectActive).subscribe(value => this.myShoppingList = value);
    this.store.select(fromForm.selectControlValue('ShoppingListActions', 'EditMode'))
      .subscribe(variable => this.editMode = variable as boolean);
  }

  /** For clicked product, swap 'bought' status value */
  swapProductBoughtStatus(
    category: string,
    subCategory: string,
    prod: UsedProduct): void {

    let prodChanges: Partial<UsedProduct> = {
      usedProductId: prod.usedProductId,
      bought: !prod.bought
    };

    // Update Product
    if (this.editMode === false) {
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
        productId: prod.usedProductId!.toString()
      })
    );
  }
}