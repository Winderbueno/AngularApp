//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
//#endregion

//#region Component, Model, Service
import { NgrxFieldComponent } from '@module/ngrx-form/component/field/ngrx-field.component';
//#endregion


/**
 * Input Field Component
 */
@Component({
  selector: 'app-input-ngrx-field',
  templateUrl: 'input-ngrx-field.component.html' })
export class InputNgrxFieldComponent extends NgrxFieldComponent {

  @Input() withFeature: string = '';

  inputHide: boolean = false;

  ngOnInit() {

    // By default, if withFeature 'Visibilitity', we hide the input
    if(this.withFeature === 'visibility') { this.inputHide = true; }

    if(this.ctrlName === 'Email') { super.validators.push(Validators.email); }

    // TODO - Change Password Format Policy
    if(this.ctrlName === 'Password') { super.validators.push(Validators.minLength(6)); }

    super.ngOnInit();
  }
}
