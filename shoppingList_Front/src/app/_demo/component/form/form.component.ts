//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { maxLength, minLength, number } from 'ngrx-forms/validation';
//#endregion

//#region Module
import * as fromFormComponent from '@form/component';
import * as fromEnum from '@enum/store/';
//#endregion


@Component({
  selector: 'demo-form',
  templateUrl: './form.component.html'
})
export class FormComponent extends fromFormComponent.FormComponent {  

  // ValidationFns
  number = number;
  minLength = minLength;
  maxLength = maxLength;

  // Option values
  readonly productCatEnum$ = this.store.select(fromEnum.selectEnumValues('ProductCategory'));

  ngOnInit(){
    super.formId = "Form";
    super.ngOnInit();
  }
}