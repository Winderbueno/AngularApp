//#region Angular, Material, RxJS
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//#endregion

//#region Model and Service
import { ShoppingList } from '@app/shopping-list/model/shopping-list.model';
import { UsedProduct } from '@app/shopping-list/model/used-product.model';
import { ShoppingListService } from '@app/shopping-list/service/shopping-list.service';
import { DialogAddProductComponent } from '@app/shopping-list/component/dialog-add-product/dialog-add-product.component';
//#endregion

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  // Getters
  get  myShoppingList():ShoppingList { return this.shoppingListServ.active; }

  constructor(
    public dialog: MatDialog,
    private shoppingListServ: ShoppingListService
  ) { }

  ngOnInit(): void {
    // Get user's shoppingList from server
    this.shoppingListServ
      .getActive()
      .subscribe();
  }

  /** For all shoppingList product, reset 'bought' status */
  resetBoughtStatus(): void {
    this.shoppingListServ
      .resetBoughtStatus(this.myShoppingList.shoppingListId)
      .subscribe();
  }

  /** Add Product Button */
  openDialog(): void {

    // Open addProductDialog
    const addProductDialog = this.dialog.open(DialogAddProductComponent, { width: '300px' });

    // After dialog closing, refresh the active shoppingList
    addProductDialog.afterClosed()
      .subscribe(result => {
        this.shoppingListServ.getActive()
          .subscribe();});
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
