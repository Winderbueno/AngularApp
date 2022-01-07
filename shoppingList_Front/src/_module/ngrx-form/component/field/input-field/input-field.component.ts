//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
import { email, minLength } from 'ngrx-forms/validation';
//#endregion

//#region Component, Model, Service
import { FieldComponent } from '@module/ngrx-form/component/field/field.component';
//#endregion


/**
 * Input Field Component
 */
@Component({
  selector: 'app-input-field',
  templateUrl: 'input-field.component.html' })
export class InputFieldComponent extends FieldComponent {

  @Input() withFeature: string = '';

  inputHide: boolean = false;

  ngOnInit() {

    // By default, if withFeature 'Visibility', we hide the input
    if(this.withFeature === 'Visibility') { this.inputHide = true; }
    
    if(this.ctrlName === 'Email') { super.validators.push(email); }

    // TODO - Change Password Format Policy
    if(this.ctrlName === 'Password') { super.validators.push(minLength(6)); }

    super.ngOnInit();
  }
}
