//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import { requiredTrue } from 'ngrx-forms/validation';
//#endregion

//#region This
import { FieldComponent } from '../field.component';
//#endregion


/**
 * CheckBox Field Component
 */
@Component({
  selector: 'k-form-field-slide-toggle[ctrlName]',
  templateUrl: 'slide-toggle-field.component.html'
})
export class SlideToggleFieldComponent extends FieldComponent {

  ngOnInit() {
    if(this.required === true) { super.validationFns.push(requiredTrue); }
    super.ngOnInit();
  }
}
