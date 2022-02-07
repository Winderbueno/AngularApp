//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region App Component, Model
import { FormComponent } from '@form/component';
//#endregion


@Component({ templateUrl: 'forgot-password.component.html' })
export class ForgotPasswordComponent extends FormComponent {

  ngOnInit(){
    super.formId = "Forgot Password";
    super.unpersist = true;
    super.ngOnInit();
  }
}
