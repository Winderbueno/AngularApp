﻿//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
import { NgrxValueConverter } from 'ngrx-forms';
import { email, minLength } from 'ngrx-forms/validation';
//#endregion

//#region Component, Model, Service
import { FieldComponent } from '@form/component/';
//#endregion


/**
 * Input Field Component
 */
@Component({
  selector: 'app-input-field',
  templateUrl: 'input-field.component.html' })
export class InputFieldComponent extends FieldComponent {

  @Input() visibilityToggle: boolean = false;

  inputHide: boolean = false;

  ngOnInit() {

    // By default, if withFeature 'Visibility', we hide the input
    if(this.visibilityToggle === true) { this.inputHide = true; }
    
    if(this.format === 'email') { super.validationFns.push(email); }

    // TODO - Change Password Format Policy
    if(this.format === 'password') { super.validationFns.push(minLength(6)); }

    super.ngOnInit();
  }

  // TODO - Value converter // Check that number is well handled
  valueConverter: NgrxValueConverter<string | null, string | number | null> = {
    convertViewToStateValue(valueInView:string) {
      return !isNaN(Number(valueInView)) ? 
        Number(valueInView) :
        valueInView;
    },
    convertStateToViewValue(valueInState:string | number | null) {
      return valueInState as string;
    }
  };
}
