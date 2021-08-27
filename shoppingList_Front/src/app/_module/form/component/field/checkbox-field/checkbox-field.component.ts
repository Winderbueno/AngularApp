﻿//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
//#endregion

//#region App Component, Model
import { FieldComponent } from '../field.component';
//#endregion


/**
 * CheckBox Field Component
 */
@Component({
  selector: 'app-checkbox-field',
  templateUrl: 'checkbox-field.component.html' })
export class CheckBoxFieldComponent extends FieldComponent {

  @Input() isFormSubmitted!: boolean;

  ngOnInit() {
    if(this.required === true) { super.validators.push(Validators.requiredTrue); }
    super.ngOnInit();
  }
}
