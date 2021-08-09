//#region Angular & Material
import { Component } from '@angular/core';
//#endregion

//#region NgRx
import * as AccountComponentActions from '@app_action/component/account.component.action';
//#endregion

//#region App Component, Model
import { FormComponent } from '@app_form/component/form.component';
//#endregion


@Component({ templateUrl: './login.component.html' })
export class LoginComponent extends FormComponent {

  ngOnInit(){
    super.title = "Sign In";
    super.ngOnInit();
  }

  submitAction(): void {
    // Dispatch Login action
    this.store.dispatch(
      AccountComponentActions.loginSubmit({
        email: this.ctrls.Email.value,
        password: this.ctrls.Password.value // TODO - Put CtrlName as an input for password-field
      })
    );
  }
}
