//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { requiredTrue } from 'ngrx-forms/validation';
//#endregion

//#region Component, Model, Service
import { NgrxFieldComponent } from '../ngrx-field.component';
//#endregion


/**
 * CheckBox Field Component
 */
@Component({
  selector: 'app-checkbox-ngrx-field',
  templateUrl: 'ngrx-checkbox-field.component.html' })
export class CheckBoxNgrxFieldComponent extends NgrxFieldComponent {

  ngOnInit() {
    if(this.required === true) { super.validators.push(requiredTrue); }
    super.ngOnInit();
  }
}
