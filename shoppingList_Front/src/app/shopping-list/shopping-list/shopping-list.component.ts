//#region Angular, Material, RxJS
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
//#endregion

//#region Model and Service
import { ShoppingList } from '@app_business/model/shopping-list.model';
import { UsedProduct } from '@app_business/model/used-product.model';
import { ShoppingListService } from '@app_business/service/shopping-list.service';
import { DialogAddProductComponent } from '@app/shopping-list/dialog-add-product/dialog-add-product.component';
//#endregion

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  
  myShoppingList: ShoppingList | undefined;

  constructor(
    public dialog: MatDialog,
    private shoppingListServ: ShoppingListService
  ) { }

  ngOnInit(): void {
    // Get User's shopping list from server
    this.shoppingListServ.getActive()
      .subscribe(result => this.myShoppingList = result);
  }

  /** For all shoppingList product, reset 'bought' status */
  resetBoughtStatus(): void {
    this.shoppingListServ
      .resetBoughtStatus(this.myShoppingList?.shoppingListId)
      .subscribe(result => this.myShoppingList = result);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(
      DialogAddProductComponent, 
      { width: '250px' });

    dialogRef.afterClosed()
      .subscribe(result => { console.log('The dialog was closed');});
  }

  /** For clicked product, swap 'bought' status value */
  swapProductBoughtStatus(prod: UsedProduct): void {
    if(prod) prod.bought ? prod.bought=false : prod.bought = true;
    // TODO - What if the server does not answer ?
    this.shoppingListServ
      .updtProduct(this.myShoppingList?.shoppingListId, prod)
      .subscribe();
  }
}