//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion

//#region App Component, Model
import { FormComponent } from '@form/component';
import * as ComponentActions from './login.actions';
//#endregion


@Component({ templateUrl: './login.component.html' })
export class LoginComponent extends FormComponent {

  ngOnInit(){
    super.formId = "Sign In";
    super.persist = true;
    super.ngOnInit();
  }

  submitValidAction(): TypedAction<string> {
    return ComponentActions.loginSubmitAction({
      email: this.value.Email as string,
      password: this.value.Password as string
    });
  }
}
