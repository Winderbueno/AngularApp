//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import { FieldFormatEnum } from '@form/model';
//#endregion


@Component({ templateUrl: './login.component.html' })
export class LoginComponent {
  FieldFormatEnum = FieldFormatEnum;
  formId = 'Sign In';
}
