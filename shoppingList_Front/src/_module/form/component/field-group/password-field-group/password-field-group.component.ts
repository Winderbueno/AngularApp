//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Component, Model, Service
import { mustMatch } from '@form/validation-fns/must-match.validation-fns';
//#endregion


/**
 * Password Field Component
 *  @param formID - FormGroupState ID to add the FormControlState on
 *  @param withConfirm - Specify if the password field comes with a "confirm Password" field
 *
 * This component adds 1 or 2 FormControlState to the FormGroupState
 * "confirmPwd" field is valid only if it has the same value as Pwd field
 */
@Component({
  selector: 'app-password-field-group',
  templateUrl: 'password-field-group.component.html' })
export class PasswordFieldGroupComponent {

  @Input() formId!: string;
  @Input() withConfirm: boolean = false;

  // Make mustMatch fonction accessible in the template
  mustMatch = mustMatch;

  constructor(protected store: Store) { }
}
