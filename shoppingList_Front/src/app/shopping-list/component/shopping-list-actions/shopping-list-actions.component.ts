//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region App Component, Model
import * as fromForm from '@form/store';
//#endregion


@Component({
  selector: 'shopping-list-actions',
  templateUrl: './shopping-list-actions.component.html'
})
export class ShoppingListActionComponent {

  formId = 'ShoppingListActions';
  readonly editMode$ = this.store.select(fromForm.selectControlValue('ShoppingListActions', 'EditMode'));
  readonly accordionExpanded$ = this.store.select(fromForm.selectControlValue('ShoppingListActions', 'Accordeon'));

  constructor(public store: Store) { }
}
