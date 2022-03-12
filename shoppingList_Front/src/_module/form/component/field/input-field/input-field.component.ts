//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
import { NgrxValueConverter } from 'ngrx-forms';
import { email, number, minLength } from 'ngrx-forms/validation';
//#endregion

//#region Component, Model, Service
import { FieldComponent } from '@form/component';
import { FieldFormatEnum } from '@form/model/field-format.enum';
//#endregion


/**
 * Input Field Component
 */
@Component({
  selector: 'k-form-field-input',
  templateUrl: 'input-field.component.html' })
export class InputFieldComponent extends FieldComponent {

  // Accessibility for template
  FieldFormatEnum = FieldFormatEnum;

  visibility: boolean = true;
  _visibilityToggle: boolean | undefined;

  @Input()
  get visibilityToggle() { return this._visibilityToggle; }
  set visibilityToggle(input: boolean | undefined) { this._visibilityToggle = input; }  

  ngOnInit() {
    // According to format, add specific rules (validationFns, visibility...) 
    switch (this.format) {
      case FieldFormatEnum.Email: { super.validationFns.push(email); break; }
      case FieldFormatEnum.Number: { super.validationFns.push(number); break; }
      case FieldFormatEnum.Password: {
        // Activate visibilityToggle
        if(this._visibilityToggle === undefined) this._visibilityToggle = true;
        // Hide field value
        this.visibility = false;
        // Apply password format policy - TODO - Change policy
        super.validationFns.push(minLength(6));
        break;
      }
    }
    super.ngOnInit();
  }

  getConverter():any{
    switch (this.format) {
      case FieldFormatEnum.Email: { return this.trimConverter; }
      case FieldFormatEnum.Number: { return this.numberConverter; }
      default: { return this.defaultConverter; }
    }
  }

  /* Value Converter */
  // Default
  defaultConverter: NgrxValueConverter<string | number | boolean | null, string | number | boolean | null> = {
    convertViewToStateValue(valueInView) { return valueInView; },
    convertStateToViewValue(valueInState) { return valueInState ; }
  };

  // Trim
  trimConverter: NgrxValueConverter<string | number | boolean | null, string | number | boolean | null> = {
    convertViewToStateValue(valueInView) { return valueInView !== null ? valueInView.toString().trim() : null; },
    convertStateToViewValue(valueInState) { return valueInState ; }
  };

  // Number
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