//#region Angular, Material, RxJS
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
//#endregion

//#region App Component, Model, Service
import { FieldComponent } from '../field.component';
//#endregion


/**
 * Input Field Component
 */
@Component({
  selector: 'app-input-field',
  templateUrl: 'input-field.component.html' })
export class InputFieldComponent extends FieldComponent {

  ngOnInit() {
    if(this.ctrlName === 'Email') { super.validators.push(Validators.email); }
    super.ngOnInit();
  }
}
