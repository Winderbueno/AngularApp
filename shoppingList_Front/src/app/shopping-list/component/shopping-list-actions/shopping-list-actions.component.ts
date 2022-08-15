//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromForm from '@form/store';
import * as fromDialog from '@dialog/store';
//#endregion

//#region Component
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';
//#endregion


@Component({
  selector: 'shopping-list-actions',
  templateUrl: './shopping-list-actions.component.html'
})
export class ShoppingListActionComponent {
  
  readonly editModeCtrl$ = this.store.select(fromForm.selectControl('ShoppingListActions', 'EditMode'));
  readonly accordionExpandedCtrl$ = this.store.select(fromForm.selectControl('ShoppingListActions', 'Accordeon'));

  openDialogAction = fromDialog.openDialogAction({ 
    component: Object.assign({}, AddProductDialogComponent)
  });

  constructor(public store: Store) {}
}
