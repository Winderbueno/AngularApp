//#region Angular, Material, NgRx
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//#endregion

//#region App Component, Model
import * as ComponentActions from './shopping-list-actions.actions';
import * as fromStore from '@shoppingList/store/';
import { DialogAddProductComponent } from '@shoppingList/component/dialog-add-product/dialog-add-product.component';
//#endregion

//#region Model
import { ShoppingList } from '@shoppingList/model/current/shopping-list.model';
//#endregion


@Component({ 
  selector: 'shopping-list-actions',
  templateUrl: './shopping-list-actions.component.html'
})
export class ShoppingListActionComponent implements OnInit {

  @ViewChild('accordion',{static:false}) Accordion!: MatAccordion;

  // View Status
  readonly editMode$: Observable<boolean>= this.store.select(fromStore.editMode);
  accordion_expanded = false;

  // Shopping List
  myShoppingList!: ShoppingList[];

  constructor(
    public dialog: MatDialog,
    private store: Store
  ) {
    this.store.select(fromStore.selectActive).subscribe(value => this.myShoppingList=value);
  }

  ngOnInit(): void {}

  /** For all shoppingList product, reset 'bought' status */
  resetBoughtStatus(): void {
    // ResetBoughtStatus
    this.store.dispatch(ComponentActions
      .resetBoughtStatusAction({ ShoppingListId: "1" }));
  }

  /** Add Product Button */
  openAddProductDialog(): void {
    this.dialog.open(DialogAddProductComponent, { width: '400px' });
  }

  toggleAccordeon():void {
    this.accordion_expanded === false ?
      this.Accordion.openAll() :
      this.Accordion.closeAll();
    
    this.accordion_expanded = !this.accordion_expanded;
  }

  toggleEditMode():void {
    this.store.dispatch(ComponentActions.toggleEditModeAction());
  }
}
