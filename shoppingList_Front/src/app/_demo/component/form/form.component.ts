//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromEnum from '@enum/store';
import * as fromForm from '@form/store';
import { FieldFormatEnum } from '@form/model';
import { maxLength, minLength, number } from 'ngrx-forms/validation';
//#endregion


@Component({
  selector: 'demo-form',
  templateUrl: './form.component.html'
})
export class FormComponent {  

  // Form
  formId = 'Form';
  FieldFormatEnum=FieldFormatEnum;

  // ValidationFns
  number = number;
  minLength = minLength;
  maxLength = maxLength;

  // Option values
  readonly productCatEnum$ = this.store.select(fromEnum.selectEnumValues('ProductCategory'));

  // Action
  resetFormAction = fromForm.resetFormAction({ formId: this.formId });
  clearFormValueAction = fromForm.clearFormValueAction({ formId: this.formId });

  constructor(public store: Store) {}
}