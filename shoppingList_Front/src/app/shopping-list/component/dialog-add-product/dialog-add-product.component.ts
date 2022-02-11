//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion

//#region Store
import * as fromEnum from '@enum/store/';
//#endregion

//#region App Component, Model
import { FormComponent } from '@form/component';
import { CreateProductReq } from '@shoppingList/model/current/create-product-req.model';
import { ShoppingListService } from '@shoppingList/service/shopping-list.service';
//#endregion


@Component({ templateUrl: './dialog-add-product.component.html' })
export class DialogAddProductComponent extends FormComponent {

  // Proposition values
  readonly productCatEnum$ = this.store.select(fromEnum.selectEnumValues('ProductCategory'));
  readonly productSubCatEnum$ = this.store.select(fromEnum.selectEnumValues('ProductSubCategory'));

  // TODO - Optimize constructor because we herit from FormCompo ?
  constructor(
    router: Router,
    route: ActivatedRoute,
    store: Store<{}>, // TODO
    public dialogRef: MatDialogRef<DialogAddProductComponent>,
    private shoppingListService: ShoppingListService,
  ) {
    super(router, route, store);
  }

  ngOnInit(): void {
    super.formId = "Add Your Product";
    super.ngOnInit();
  }

  dispatchSubmitAction() {

    // Create product to create
    var prodToCreate: CreateProductReq = {
      category: this.value.Category as string,
      subCategory: this.value.SubCategory as string,
      name: this.value.ProductName as string,
      quantity: 1,
      note: "test" // TODO - This field should note be that
    }
  }
}
