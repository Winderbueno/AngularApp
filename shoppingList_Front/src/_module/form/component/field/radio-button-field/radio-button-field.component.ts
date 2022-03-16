//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Component, Model, Service
import { MultipleOptionFieldComponent } from '@form/component';
//#endregion


/**
 * Select Field Component
 */
@Component({
  selector: 'k-form-field-radio-button[formId][ctrlName]',
  templateUrl: 'radio-button-field.component.html'
})
export class RadioButtonFieldComponent extends MultipleOptionFieldComponent {}
