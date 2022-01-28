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
  selector: 'k-form-field-select',
  templateUrl: 'select-field.component.html'
})
export class SelectFieldComponent extends MultipleOptionFieldComponent {}
