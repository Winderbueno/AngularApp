//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region This
import { MultipleOptionFieldComponent } from '../multiple-option-field.component';
//#endregion


/**
 * Select Field Component
 */
@Component({
  selector: 'k-form-field-radio-button[ctrlName]',
  templateUrl: 'radio-button-field.component.html'
})
export class RadioButtonFieldComponent extends MultipleOptionFieldComponent {}
