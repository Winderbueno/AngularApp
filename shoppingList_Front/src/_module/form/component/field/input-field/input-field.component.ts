//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
import { NgrxValueConverter } from 'ngrx-forms';
import { email, number, minLength } from 'ngrx-forms/validation';
//#endregion

//#region Component, Model, Service
import { FieldComponent } from '@form/component';
//#endregion


/**
 * Input Field Component
 */
@Component({
  selector: 'k-form-field-input',
  templateUrl: 'input-field.component.html' })
export class InputFieldComponent extends FieldComponent {

  visibility: boolean = true;
  _visibilityToggle: boolean | undefined;

  @Input()
  get visibilityToggle() { return this._visibilityToggle; }
  set visibilityToggle(input: boolean | undefined) { this._visibilityToggle = input; }  

  ngOnInit() {
    
    switch (this.format) {
      case 'email': { super.validationFns.push(email); break; }
      case 'number': { super.validationFns.push(number); break; }
      case 'password': {
        // Activate VisibilityToggle
        if(this._visibilityToggle === undefined) this._visibilityToggle = true;
        // Hide text
        this.visibility = false;
        // Format Policy - TODO - Change
        super.validationFns.push(minLength(6));
        break;
      }
    }

    super.ngOnInit();
  }

  // Default value converter
  defaultConverter: NgrxValueConverter<string | number | boolean | null, string | number | boolean | null> = {
    convertViewToStateValue(valueInView) { return valueInView; },
    convertStateToViewValue(valueInState) { return valueInState ; }
  };

  // Number value converter
  numberConverter: NgrxValueConverter<string | null, string | number | null> = {
    convertViewToStateValue(valueInView:string) {
      return valueInView !== '' && !isNaN(Number(valueInView)) ? 
        Number(valueInView) :
        valueInView;
    },
    convertStateToViewValue(valueInState:string | number | null) {
      return valueInState as string;
    }
  };
}