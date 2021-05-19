//#region Angular and RxJS Module
import { Component, OnInit } from '@angular/core';
//#endregion

//#region Material Module
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
//#endregion

//#region Model and Service
import { ShoppingList } from '@app_model/shopping-list.model';
import { ShoppingListService } from '@app_service/business/shopping-list.service';
//#endregion

@Component({
  selector: 'app-dialog-add-product',
  templateUrl: './dialog-add-product.component.html'
})
export class DialogAddProductComponent implements OnInit {
  
  product: string = '';

  constructor(
    public dialogRef: MatDialogRef<DialogAddProductComponent>,
  ) { }

  ngOnInit(): void {}

  setValue() {
    this.product = 'Nancy';
  }

  onNoClick(): void {
    console.log('when closing, prod :' + this.product);
    this.dialogRef.close();
  }
}