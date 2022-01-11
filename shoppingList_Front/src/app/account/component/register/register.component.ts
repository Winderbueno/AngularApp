﻿//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion

//#region App Component, Model
import { FormComponent } from '@form/component/form.component';
import * as ComponentActions from './register.actions';
//#endregion


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent extends FormComponent {

  ngOnInit(){
    super.title = "Sign Up";
    // TODO
    // super.submitValidAction = ComponentActions.registerSubmitAction({
    //   account: this.value,
    // });
    super.ngOnInit();
  }
}
