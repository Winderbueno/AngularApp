//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { requiredTrue } from 'ngrx-forms/validation';
//#endregion

//#region Component, Model, Service
import { FieldComponent } from '@form/component/';
//#endregion


/**
 * CheckBox Field Component
 */
@Component({
  selector: 'app-slide-toggle-field',
  templateUrl: 'slide-toggle-field.component.html' })
export class SlideToggleFieldComponent extends FieldComponent {

  ngOnInit() {
    if(this.required === true) { super.validationFns.push(requiredTrue); }
    super.ngOnInit();
  }
}
