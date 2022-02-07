//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region App Component, Model
import { FormComponent } from '@form/component';
//#endregion


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent extends FormComponent {
  
  ngOnInit(){
    super.formId = "Sign Up";
    super.ngOnInit();
  }
}