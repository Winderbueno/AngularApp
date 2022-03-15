//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import { maxLength, minLength, number } from 'ngrx-forms/validation';
import * as fromEnum from '@enum/store/';
import { FieldFormatEnum } from '@form/model';
//#endregion


@Component({
  selector: 'demo-form',
  templateUrl: './form.component.html'
})
export class FormComponent {  

  // Form
  formId:string = "Form";
  FieldFormatEnum=FieldFormatEnum;

  // ValidationFns
  number = number;
  minLength = minLength;
  maxLength = maxLength;

  // Option values
  readonly productCatEnum$ = this.store.select(fromEnum.selectEnumValues('ProductCategory'));

  constructor(public store: Store) {}
}