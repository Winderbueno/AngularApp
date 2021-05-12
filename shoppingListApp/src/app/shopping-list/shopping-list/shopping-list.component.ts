//#region Angular and RxJS Module
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
//#endregion

//#region Model and Service
import { ShoppingList } from '@app_model/shopping-list.model';
import { CatUsedProduct, UsedProduct } from '@app_model/used-product.model';
import { ShoppingListService } from '@app_service/business/shopping-list.service';
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
    this.shoppingListServ.getShoppingList()
        .subscribe(shoppingList => this.myShoppingList = shoppingList);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(
      DialogAddProductComponent, 
      { width: '250px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /** If user click on 1 prod, swap value of 'bought' status for product */
  SwapBuyStatusOfProduct(prod: UsedProduct): void {
    if(prod) prod.bought ? prod.bought=false : prod.bought = true;
    // TODO - What if the server does not answer ?
    this.shoppingListServ.updtShoppingListProduct(this.myShoppingList?.shoppingListId, prod)
      .subscribe();
  }

  /** Reset 'bought' status for all product in one category */
  ResetBuyStatusOfProductCategory(event: Event, catProds:CatUsedProduct): void {
    
    // To deactivate 'collapse/uncollapse" when clicking 'Reset'
    event.stopPropagation();

    // TODO - Call the back to make it OK
    catProds.subCatProducts.forEach(
      subCatProd => subCatProd.products.forEach(
        prod => prod.bought = false
      )
    )
  }

}