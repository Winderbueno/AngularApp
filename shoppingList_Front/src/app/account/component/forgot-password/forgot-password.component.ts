//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import { FieldFormatEnum } from '@form/model';
//#endregion


@Component({ templateUrl: 'forgot-password.component.html' })
export class ForgotPasswordComponent {
  FieldFormatEnum=FieldFormatEnum;
  formId = 'Forgot Password';
}
