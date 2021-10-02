//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion

//#region App Component, Model
import { FormComponent } from '@form/component/form.component';
import * as ComponentActions from './login.actions';
//#endregion


@Component({ templateUrl: './login.component.html' })
export class LoginComponent extends FormComponent {

  ngOnInit(){
    super.title = "Sign In";
    super.ngOnInit();
  }

  submitAction(): TypedAction<string> {
    return ComponentActions.loginSubmitAction({
      email: this.ctrls.Email.value,
      password: this.ctrls.Password.value
    });
  }
}
