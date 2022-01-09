//#region Angular, Material, NgRx
import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
//#endregion

//#region Component, Model, Service
import { ValidationFnsService } from '@module/ngrx-form/service/validation-fns.service';
import { FormValue } from '@module/ngrx-form/store/form.state';
import * as fromStore from '@module/ngrx-form/store';
import { mustMatch } from '@module/ngrx-form/validation-fns/must-match.validator';
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
export class PasswordFieldGroupComponent implements OnInit, AfterViewInit {

  private _formGroupState : FormGroupState<FormValue> | undefined;

  @Input() formId!: string;
  @Input() withConfirm: boolean = false;

  constructor(
    protected store: Store,
    private validationFnsService: ValidationFnsService
  ) { }

  ngOnInit() {

    // Subscribe to FormGroupState
    this.store.select(fromStore.selectFormByID(this.formId))
      .subscribe(s => this._formGroupState = s);

    // TODO
    if(this.withConfirm) { 
      //this.validationFnsService.add(mustMatch('Password', 'ConfirmPassword'));
    }
  }

  ngAfterViewInit() {
    //if(this.withConfirm){ this.formMod.validator = MustMatch('Password', 'ConfirmPassword'); }
  }
}
