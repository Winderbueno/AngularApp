//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region App Component, Model
import { FormComponent } from '@app_form/component/form.component';
import * as ComponentActions from './register.actions';
//#endregion


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent extends FormComponent {

  ngOnInit(){
    super.title = "Sign Up";
    super.ngOnInit();
  }

  submitAction() {
    // Dispatch Register action
    this.store.dispatch(
      ComponentActions.registerSubmit({
        account: this.form.value,
      })
    );
  }
}
