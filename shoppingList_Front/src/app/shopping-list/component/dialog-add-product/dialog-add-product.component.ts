//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion

//#region App Component, Model
import { FormComponent } from '@form/component/form.component';
import { Enum } from '@enum/model/enum.model';
import { EnumService } from '@enum/service/enum.service';
import { AccountService } from '@app_account/service/account.service';
import { CreateProductReq } from '@app_shoppingList/model/create-product-req.model';
import { ShoppingListService } from '@app_shoppingList/service/shopping-list.service';
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
    accountService: AccountService,
    store: Store<{}>, // TODO
    public dialogRef: MatDialogRef<DialogAddProductComponent>,
    private enumService: EnumService,
    private shoppingListService: ShoppingListService,
  ) {
    super(router, route, store);
  }

  ngOnInit(): void {

    super.ngOnInit();

    // TODO - Change Backend Design to only have 1 backend call to retrieve multiple enums values
    // TODO NgrX
    /*this.enumService.getValuesOf("ProductCategory")
      .subscribe({
        next: res => { this.productCatEnum = res; },
        error: error => this.alertService.error(error)
      });
    this.enumService.getValuesOf("ProductSubCategory")
      .subscribe({
        next: res => { this.productSubCatEnum = res; },
        error: error => this.alertService.error(error)
    });*/
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
    // TODO - NgRx
    /*this.shoppingListService.createProduct(idSl, prodToCreate)
      .subscribe({
        next: res => {
          this.dialogRef.close();
          this.shoppingListService.getActive().subscribe();
        },
        error: error => this.alertService.error(error)
    });*/
  }
}
