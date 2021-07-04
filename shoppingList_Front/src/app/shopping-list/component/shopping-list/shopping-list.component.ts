//#region Angular, Material, RxJS
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
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

  @ViewChild('accordion',{static:false}) Accordion!: MatAccordion;
  slideChecked = false;


  // Getters
  get myShoppingList():ShoppingList { return this.shoppingListService.active; }

  constructor(
    public dialog: MatDialog,
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit(): void {
    // Get user's active shoppingList from server
    this.shoppingListService
      .getActive()
      .subscribe();
  }

  /** For all shoppingList product, reset 'bought' status */
  resetBoughtStatus(): void {
    this.shoppingListService
      .resetBoughtStatus(this.myShoppingList.shoppingListId)
      .subscribe();
  }

  /** Add Product Button */
  openAddProductDialog(): void {

    // Open addProductDialog
    const addProductDialog = this.dialog
      .open(DialogAddProductComponent, { width: '300px' });

    // After dialog closing, refresh the active shoppingList
    addProductDialog
      .afterClosed()
      .subscribe(() => {
        this.shoppingListService
          .getActive()
          .subscribe();
      });
  }

  /** For clicked product, swap 'bought' status value */
  swapProductBoughtStatus(prod: UsedProduct): void {

    // Swap 'bought' status value
    if(prod) prod.bought ? prod.bought=false : prod.bought = true;

    // Send the updated product to server
    this.shoppingListService
      .updtProduct(this.myShoppingList.shoppingListId, prod)
      .subscribe();
  }

  onSlideChange():void {
    if(this.slideChecked == true){
      this.Accordion.openAll();
    } else {
      this.Accordion.closeAll();
    }
  }
}
