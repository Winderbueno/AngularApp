//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { requiredTrue } from 'ngrx-forms/validation';
//#endregion

//#region Component, Model, Service
import { FieldComponent } from '../field.component';
//#endregion


/**
 * CheckBox Field Component
 */
@Component({
  selector: 'app-checkbox-field',
  templateUrl: 'checkbox-field.component.html' })
export class CheckBoxFieldComponent extends FieldComponent {

  ngOnInit() {
    if(this.required === true) { super.validators.push(requiredTrue); }
    super.ngOnInit();
  }
}
