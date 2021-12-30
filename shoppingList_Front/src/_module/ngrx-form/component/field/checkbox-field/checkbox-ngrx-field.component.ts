//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
//#endregion

//#region Component, Model, Service
import { NgrxFieldComponent } from '@module/ngrx-form/component/field/ngrx-field.component';
//#endregion


/**
 * CheckBox Field Component
 */
@Component({
  selector: 'app-checkbox-ngrx-field',
  templateUrl: 'checkbox-ngrx-field.component.html' })
export class CheckBoxNgrxFieldComponent extends NgrxFieldComponent {

  @Input() isFormSubmitted!: boolean;

  ngOnInit() {
    if(this.required === true) { super.validators.push(Validators.requiredTrue); }
    super.ngOnInit();
  }
}
