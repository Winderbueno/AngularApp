//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Component, Model, Service
import { MultipleOptionFieldComponent } from '../multiple-option-field.component';
//#endregion


/**
 * Button Toggle Field Component
 */
@Component({
  selector: 'k-form-field-button-toggle[ctrlName]',
  templateUrl: 'button-toggle-field.component.html'
})
export class ButtonToggleFieldComponent extends MultipleOptionFieldComponent {
  ngOnInit() {
    this.required = false;
    super.ngOnInit();
  }
}
