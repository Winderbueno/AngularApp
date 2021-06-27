//#region Angular, Material, RxJS
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
//#endregion

//#region Model and Service
import { AlertService } from '@app_error/service/alert.service';
import { EnumService } from '@app_shared/enum/enum.service';
import { Enum } from '@app_shared/enum/enum.model';
import { ShoppingListService } from '@app/shopping-list/service/shopping-list.service';
import { CreateProductReq } from '@app/shopping-list/model/create-product-req.model';
//#endregion

@Component({
  selector: 'app-dialog-add-product',
  templateUrl: './dialog-add-product.component.html'
})
export class DialogAddProductComponent implements OnInit {

  // Proposition values
  productCatEnum!: Enum;
  productSubCatEnum!: Enum;

  // Selected values
  productName: string = '';
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

  onSubmit() {

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
    // TODO - Handle case when the user dont give a product name

    // Call the server
    this.shoppingListService.createProduct(idSl, this.prodToCreate)
      .subscribe({
        next: res => {
          this.dialogRef.close();
          this.shoppingListService.getActive().subscribe();
        },
        error: error => this.alertService.error(error)
    });
  }

  onNoClick(): void {
    this.productName='';
    this.dialogRef.close();
  }
}
