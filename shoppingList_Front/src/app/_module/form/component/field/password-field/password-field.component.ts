//#region Angular & Material
import { Component, Input, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
//#endregion

//#region App Component, Model
import { MustMatch } from '@app_form/validator/must-match.validator';
//#endregion


/**
 * Password Field Component
 *  @param formMod - FormGroup to add the FormControl on
 *  @param withConfirm - Specify if the password field comes with a "confirm password field"
 *
 * This component adds 1 or 2 FormControl to the FormGroup
 *
 * These field to be valid :
 *  - The "Pwd" has to be : 6 characters minimum
 *  - The "confirmPwd" has to have the same value as the pwd
 */
@Component({
  selector: 'app-field-password',
  templateUrl: 'password-field.component.html' })
export class PasswordFieldComponent implements AfterViewInit {

  @Input() formMod!: FormGroup;
  @Input() withConfirm: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    if(this.withConfirm){ this.formMod.validator = MustMatch('Password', 'ConfirmPassword'); }
  }
}
