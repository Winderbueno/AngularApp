//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region App Component, Model
import { FieldFormatEnum } from '@form/model';
//#endregion


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent {
  FieldFormatEnum=FieldFormatEnum;
  formId = 'Sign Up';
}