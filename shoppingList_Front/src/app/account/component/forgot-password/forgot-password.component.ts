//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion


//#region App Component, Model
import { FormComponent } from '@form/component/form.component';
import * as ComponentActions from './forgot-password.actions';
//#endregion


@Component({ templateUrl: 'forgot-password.component.html' })
export class ForgotPasswordComponent extends FormComponent {

  ngOnInit(){
    super.title = "Forgot Password";
    super.ngOnInit();
  }

  submitAction() {

    // Dispatch Forgot Password action
    this.store.dispatch(
      ComponentActions.forgotPasswordSubmit({
        email: this.ctrls.Email.value,
      })
    );
  }
}
