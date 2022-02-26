//#region Angular, Material, NgRx
import { Component } from '@angular/core';
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

  ngOnInit(): void {
    super.formId = "Add Product";
    super.ngOnInit();
  }
}