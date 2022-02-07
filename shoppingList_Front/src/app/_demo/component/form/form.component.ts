//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { maxLength, minLength, number } from 'ngrx-forms/validation';
//#endregion

//#region Module
import * as fromFormComponent from '@form/component';
import * as fromEnum from '@enum/store/';
import * as fromForm from '@form/store/';
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

  // Proposition values
  readonly productCatEnum$: Observable<string[] | undefined>
    = this.store.select(fromEnum.selectEnumValues('ProductCategory'));

  ngOnInit(){
    super.formId = "Form";
    super.ngOnInit();
  }

  resetForm() { 
    this.store.dispatch(fromForm.resetFormAction({ formId: this.formId })); 
  }

  clearFormValue() { 
    this.store.dispatch(fromForm.clearFormValueAction({ formId: this.formId })); 
  }
}