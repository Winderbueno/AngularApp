//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromEnum from '@enum/store/';
import { FormComponent } from '@form/component';
//#endregion


@Component({ templateUrl: './dialog-add-product.component.html' })
export class DialogAddProductComponent extends FormComponent {

  // Option values
  readonly productCatEnum$ = this.store.select(fromEnum.selectEnumValues('ProductCategory'));
  readonly productSubCatEnum$ = this.store.select(fromEnum.selectEnumValues('ProductSubCategory'));

  // TODO - Optimize constructor because we herit from FormCompo ?
  constructor(
    router: Router,
    route: ActivatedRoute,
    store: Store<{}>, // TODO
    public dialogRef: MatDialogRef<DialogAddProductComponent>) {
    super(router, route, store);
  }

  ngOnInit(): void {
    super.formId = "Add Product";
    super.ngOnInit();
  }
}