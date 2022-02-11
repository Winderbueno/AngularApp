//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region App Component, Model
import { FormComponent } from '@form/component';
import * as ComponentActions from './shopping-list-actions.actions';
import * as fromForm from '@form/store/';
//#endregion


@Component({ 
  selector: 'shopping-list-actions',
  templateUrl: './shopping-list-actions.component.html'
})
export class ShoppingListActionComponent extends FormComponent {

  readonly editMode$=this.store.select(fromForm.selectControlValue('ShoppingListActions','EditMode'));
  readonly accordionExpanded$=this.store.select(fromForm.selectControlValue('ShoppingListActions','Accordeon'));

  ngOnInit(){
    super.formId = "ShoppingListActions";
    super.ngOnInit();
  }

  /** For all shoppingList product, reset 'bought' status */
  resetBoughtStatus(): void {
    // ResetBoughtStatus
    this.store.dispatch(ComponentActions
      .resetBoughtStatusAction({ ShoppingListId: "1" }));
  }

  /** Add Product Button */
  openAddProductDialog(): void { // TODO
    this.store.dispatch(ComponentActions.clickOnAddProductButtonAction());
  }
}
