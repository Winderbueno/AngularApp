//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Component, Model, Service
import { FieldFormatEnum } from '@form/model/field-format.enum';
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
  selector: 'k-form-field-group-password',
  templateUrl: 'password-field-group.component.html',
  styles: ['k-form-field-input { width: 100%; }']
})
export class PasswordFieldGroupComponent {

  @Input() formId!: string;
  @Input() withConfirm: boolean = false;

  // Accessibility for template
  mustMatch = mustMatch;
  FieldFormatEnum = FieldFormatEnum;

  constructor(protected store: Store) { }
}
