//#region Angular, Material, RxJS
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//#endregion

//#region App Component, Model, Service
import { FormErrorService } from '@app_form/service/form-error.service';
import { MustMatch } from '@app_form/validator/must-match.validator';
//#endregion


/**
 * Password Field Component
 *  @param formToModify - FormGroup to add the FormControl on
 *  @param withConfirm - Specify if the password field comes with a "confirm password field"
 *
 * For these field to be valid :
 *  - The "Pwd" has to be : 6 characters minimum
 *  - The "confirmPwd" has to have the same value as the pwd
 */
@Component({
  selector: 'app-field-password',
  templateUrl: 'password-field.component.html' })
export class PasswordFieldComponent implements OnInit {

  @Input() formToModify!: FormGroup;
  @Input() withConfirm: boolean = false;

  // TODO - Change Password Format Policy
  pwdCtrl: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  pwdConfirmCtrl: FormControl = new FormControl('', Validators.required);

  pwdHide: boolean = true;
  pwdConfirmHide: boolean = true;

  // Getters
  get err() { return this.formErrorService; }

  constructor(private formErrorService: FormErrorService) { }

  ngOnInit() {
    this.formToModify.addControl('password', this.pwdCtrl);

    if(this.withConfirm){
      this.formToModify.addControl('confirmPassword', this.pwdConfirmCtrl);
      this.formToModify.validator = MustMatch('password', 'confirmPassword');
    }
  }
}
