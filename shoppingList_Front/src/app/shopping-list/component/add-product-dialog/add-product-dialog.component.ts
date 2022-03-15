//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromEnum from '@enum/store/';
//#endregion


@Component({ templateUrl: './add-product-dialog.component.html' })
export class AddProductDialogComponent {

  formId = 'Add Product';
  readonly productCatEnum$ = this.store.select(fromEnum.selectEnumValues('ProductCategory'));
  readonly productSubCatEnum$ = this.store.select(fromEnum.selectEnumValues('ProductSubCategory'));

  constructor(public store: Store) {}
}
