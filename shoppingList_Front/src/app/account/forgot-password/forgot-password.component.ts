//#region Angular & Material
import { Component } from '@angular/core';
//#endregion

//#region NgRx
import * as AccountComponentActions from '@app/_store/action/component/account.component.actions';
//#endregion

//#region App Component, Model
import { FormComponent } from '@app_form/component/form.component';
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
      AccountComponentActions.forgotPasswordSubmit({
        email: this.ctrls.Email.value,
      })
    );
  }
}
