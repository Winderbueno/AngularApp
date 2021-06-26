//#region Angular, Material, RxJS
import { Component, OnInit } from '@angular/core';
//#endregion

//#region Material Module
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
//#endregion

//#region Model and Service
import { AlertService } from '@app_error_mngt/service/alert.service';
import { EnumService } from '@app_shared/enum/enum.service';
import { Enum } from '@app_shared/enum/enum.model';
import { ShoppingListService } from '@app_business/service/shopping-list.service';
import { CreateProductReq } from '@app/_shared/business/model/create-product-req.model';
//#endregion

@Component({
  selector: 'app-dialog-add-product',
  templateUrl: './dialog-add-product.component.html'
})
export class DialogAddProductComponent implements OnInit {

  productName: string = '';

  // Proposition values
  productCatEnum!: Enum;
  productSubCatEnum!: Enum;

  // Selection Values
  selectedCat!: string;
  selectedSubCat!: string;

  prodToCreate!: CreateProductReq;

  constructor(
    public dialogRef: MatDialogRef<DialogAddProductComponent>,
    private alertService: AlertService,
    private enumService: EnumService,
    private shoppingListService: ShoppingListService,

  ) { }

  ngOnInit(): void {
    // TODO - Change Backend Design to only have 1 backend call to retrieve multiple enums values
    this.enumService.getValuesOf("ProductCategory")
      .subscribe({
        next: res => { this.productCatEnum = res; },
        error: error => this.alertService.error(error)
      });
    this.enumService.getValuesOf("ProductSubCategory")
      .subscribe({
        next: res => { this.productSubCatEnum = res; },
        error: error => this.alertService.error(error)
    });
  }

  submit() {

    // Get Active List Id
    var idSl: string = this.shoppingListService.active.shoppingListId;

    // Create product to create
    this.prodToCreate = {
      category: this.selectedCat,
      subCategory: this.selectedSubCat,
      name: this.productName,
      quantity: 1,
      note: "test"
    }

    // Call the server
    this.shoppingListService.createProduct(idSl, this.prodToCreate)
      .subscribe({
        next: res => { console.log("jycroispas"); },
        error: error => this.alertService.error(error)
    });
  }

  onNoClick(): void {
    this.productName='';
    this.dialogRef.close();
  }
}
