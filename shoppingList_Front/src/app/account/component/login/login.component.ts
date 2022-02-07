//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region App Component, Model
import { FormComponent } from '@form/component';
//#endregion


@Component({ templateUrl: './login.component.html' })
export class LoginComponent extends FormComponent {
  
  ngOnInit(){
    super.formId = "Sign In";
    super.ngOnInit();
  }
}
