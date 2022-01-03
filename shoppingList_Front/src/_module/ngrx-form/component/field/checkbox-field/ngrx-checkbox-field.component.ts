//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
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

  @Input() isFormSubmitted!: boolean;

  ngOnInit() {
    //if(this.required === true) { super.validators.push(Validators.requiredTrue); }
    super.ngOnInit();
  }
}
