//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
//#endregion

//#region Component, Model, Service
import { FieldFormatEnum } from '@form/model/field-format.enum';
import { mustMatch } from '@form/validation-fns/must-match.validation-fns';
//#endregion


/**
 * Password Field Group Component
 *   
 * This component adds a password field and, if configured this way, 
 * a PasswordConfirm field which is valid only if it has the same value as Pwd field
 * 
 *  @param formId? - FormGroupState Id to add the FormControlState on
 *  @param withConfirm? - (Default:false) - If true, confirmPwd field is added
 *  @param pwdCtrlName? - (Default:'Password')
 *  @param pwdConfirmCtrlName? (Default:'PasswordConfirm')
 */
@Component({
  selector: 'k-form-field-group-password',
  templateUrl: 'password-field-group.component.html',
  styles: ['k-form-field-input { width: 100%; }']
})
export class PasswordFieldGroupComponent {

  @Input() formId!: string;
  @Input() withConfirm: boolean = false;
  @Input() pwdCtrlName: string = 'Password';
  @Input() pwdConfirmCtrlName: string = 'PasswordConfirm';

  // Accessibility for template
  mustMatch = mustMatch;
  FieldFormatEnum = FieldFormatEnum;
}
