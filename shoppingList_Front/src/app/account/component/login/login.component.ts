//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region App Component, Model
import { FormComponent } from '@app_form/component/form.component';
import * as ComponentActions from './login.actions';
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
      ComponentActions.loginSubmit({
        email: this.ctrls.Email.value,
        password: this.ctrls.Password.value // TODO - Put CtrlName as an input for password-field
      })
    );
  }
}
