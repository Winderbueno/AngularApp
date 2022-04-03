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
  
  readonly editModeCtrl$ = this.store.select(fromForm.selectControl('ShoppingListActions', 'EditMode'));
  readonly accordionExpandedCtrl$ = this.store.select(fromForm.selectControl('ShoppingListActions', 'Accordeon'));

  constructor(public store: Store) {}
}
