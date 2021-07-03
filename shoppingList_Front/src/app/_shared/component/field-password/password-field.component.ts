//#region Angular, Material, RxJS
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
//#endregion

//#region Model and Service
import { FormErrorService } from '@app_error/service/form-error.service';
import { MustMatch } from '@app/_shared/error/must-match.validator';
//#endregion

/**
 * Password Component
 *  @param withConfirm -
 *  @param formToModify - the formGroup to add the fields on
 *
 * The fields has to respect these rules
 *
 */
@Component({
  selector: 'app-password-field',
  templateUrl: 'password-field.component.html' })
export class PasswordFieldComponent implements OnInit {

  @Input() withConfirm: boolean = false;
  @Input() formToModify!: FormGroup;

  // TODO - Add Password format policy (At least 6 characters...) -->
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
