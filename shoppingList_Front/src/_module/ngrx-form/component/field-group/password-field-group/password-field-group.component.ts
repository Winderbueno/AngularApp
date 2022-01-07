//#region Angular, Material, NgRx
import { Component, Input, AfterViewInit } from '@angular/core';
//#endregion

//#region Component, Model, Service
import { MustMatch } from '@form/validator/must-match.validator';
//#endregion


/**
 * Password Field Component
 *  @param formID - FormGroupState ID to add the FormControl on
 *  @param withConfirm - Specify if the password field comes with a "confirm password field"
 *
 * This component adds 1 or 2 FormControl to the FormGroup
 *
 * These field to be valid :
 *  - The "Pwd" has to be : 6 characters minimum
 *  - The "confirmPwd" has to have the same value as the pwd
 */
@Component({
  selector: 'app-password-field-group',
  templateUrl: 'password-field-group.component.html' })
export class PasswordFieldGroupComponent implements AfterViewInit {

  @Input() formId!: string;
  @Input() withConfirm: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    //if(this.withConfirm){ this.formMod.validator = MustMatch('Password', 'ConfirmPassword'); }
  }
}
