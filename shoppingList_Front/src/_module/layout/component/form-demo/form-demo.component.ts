//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { TypedAction } from '@ngrx/store/src/models';
import { Observable } from 'rxjs';
import { maxLength, minLength, number } from 'ngrx-forms/validation';
//#endregion

//#region Module
import { FormComponent } from '@form/component';
import * as fromAlert from '@alert/store/';
import * as fromEnum from '@enum/store/';
import * as fromForm from '@form/store/';
//#endregion


@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html'
})
export class FormDemoComponent extends FormComponent {  

  // ValidationFns
  number = number;
  minLength = minLength;
  maxLength = maxLength;

  // Proposition values
  readonly productCatEnum$: Observable<string[] | undefined>
    = this.store.select(fromEnum.selectEnumValues('ProductCategory'));

  ngOnInit(){    
    // Form Configuration
    super.title = "Form";
    super.persist = true;
    super.ngOnInit();
  }

  submitValidAction(): TypedAction<string> {
    return fromAlert.triggerAlertAction({
      alertType: fromAlert.AlertTypeEnum.Success,
      message: "Valid Form Submitted !",
      keepAfterRouteChange: false
    });
  }

  submitInvalidAction(): TypedAction<string> {
    return fromAlert.triggerAlertAction({
      alertType: fromAlert.AlertTypeEnum.Error,
      message: "Invalid Form Submitted !",
      keepAfterRouteChange: false
    });
  }

  resetForm() { 
    this.store.dispatch(fromForm.resetFormAction({ formId: this.title })); 
  }

  clearFormValue() { 
    this.store.dispatch(fromForm.clearFormValueAction({ formId: this.title })); 
  }
}
