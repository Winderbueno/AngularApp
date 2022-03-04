//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import * as fromEnum from '@enum/store/';
import { FormComponent } from '@form/component';
//#endregion


@Component({ templateUrl: './add-product-dialog.component.html' })
export class AddProductDialogComponent extends FormComponent {

  // Option values
  readonly productCatEnum$ = this.store.select(fromEnum.selectEnumValues('ProductCategory'));
  readonly productSubCatEnum$ = this.store.select(fromEnum.selectEnumValues('ProductSubCategory'));

  ngOnInit(): void {
    super.formId = "Add Product";
    super.ngOnInit();
  }
}