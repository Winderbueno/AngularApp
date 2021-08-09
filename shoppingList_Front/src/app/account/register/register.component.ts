//#region Angular & Material
import { Component } from '@angular/core';
//#endregion

//#region NgRx
import * as AccountComponentActions from '@app_action/component/account.component.action';
//#endregion

//#region App Component, Model
import { FormComponent } from '@app_form/component/form.component';
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
      AccountComponentActions.registerSubmit({
        account: this.form.value,
      })
    );
  }
}
