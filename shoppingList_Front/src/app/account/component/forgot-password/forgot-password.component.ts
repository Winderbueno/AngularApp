//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion

//#region App Component, Model
import { FormComponent } from '@form/component';
import * as ComponentActions from './forgot-password.actions';
//#endregion


@Component({ templateUrl: 'forgot-password.component.html' })
export class ForgotPasswordComponent extends FormComponent {

  ngOnInit(){
    super.formId = "Forgot Password";
    super.ngOnInit();
  }

  submitValidAction(): TypedAction<string> {
    return ComponentActions.forgotPasswordSubmitAction({
      email: this.value.Email as string,
    });
  }
}
