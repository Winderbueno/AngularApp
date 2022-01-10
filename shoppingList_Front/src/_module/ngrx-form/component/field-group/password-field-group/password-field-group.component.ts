//#region Angular, Material, NgRx
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Component, Model, Service
import { ValidationFnsService } from '@formNew/service/validation-fns.service';
import { mustMatch } from '@formNew/validation-fns/must-match.validator';
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
export class PasswordFieldGroupComponent implements OnInit {

  @Input() formId!: string;
  @Input() withConfirm: boolean = false;

  constructor(
    protected store: Store,
    private validationFnsService: ValidationFnsService
  ) { }

  ngOnInit() {
    if(this.withConfirm) { 
      this.validationFnsService.addStateParametrizedValidationFn(
        this.formId,
        mustMatch('Password', 'ConfirmPassword'));
    }
  }
}
