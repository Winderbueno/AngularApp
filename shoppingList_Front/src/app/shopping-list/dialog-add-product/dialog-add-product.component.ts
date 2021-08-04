//#region Angular, Material, RxJS
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
//#endregion

//#region App Component, Model, Service
import { FormComponent } from '@app_form/component/form.component';
import { EnumService } from '@app_enum/enum.service';
import { Enum } from '@app_enum/enum.model';
import { ShoppingListService } from '@app_shoppingList/service/shopping-list.service';
import { CreateProductReq } from '@app_shoppingList/model/create-product-req.model';
import { AlertService } from '@app_alert/service/alert.service';
import { AccountService } from '@app_account/service/account.service';
//#endregion

@Component({
  selector: 'app-dialog-add-product',
  templateUrl: './dialog-add-product.component.html'
})
export class DialogAddProductComponent extends FormComponent {

  // Proposition values
  productCatEnum!: Enum;
  productSubCatEnum!: Enum;

  // TODO - Optimize constructor because we herit from FormCompo ?
  constructor(
    router: Router,
    route: ActivatedRoute,
    alertService: AlertService,
    accountService: AccountService,
    public dialogRef: MatDialogRef<DialogAddProductComponent>,
    private enumService: EnumService,
    private shoppingListService: ShoppingListService,
  ) {
    super(router, route, alertService, accountService);
  }

  ngOnInit(): void {

    super.ngOnInit();

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

  submitAction() {

    // Get Active List Id
    var idSl: string = this.shoppingListService.active.shoppingListId;

    // Create product to create
    var prodToCreate: CreateProductReq = {
      category: this.ctrls.Category.value,
      subCategory: this.ctrls.SubCategory.value,
      name: this.ctrls.ProductName.value,
      quantity: 1,
      note: "test" // TODO - This field should note be that
    }

    // Call the server
    this.shoppingListService.createProduct(idSl, prodToCreate)
      .subscribe({
        next: res => {
          this.dialogRef.close();
          this.shoppingListService.getActive().subscribe();
        },
        error: error => this.alertService.error(error)
    });
  }
}
