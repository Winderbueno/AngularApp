//#region Angular, Material, NgRx
import { Directive } from '@angular/core';
import { FormComponent } from '../../component';
//#endregion

/**
 * No Validate Form Directive
 *    Applicable on a <k-form> element
 *    Deactivate field validation 
 */
@Directive({ selector: '[no-validate]' })
export class NoValidateFormDirective {
  constructor(public component: FormComponent) {
    component.validate = false;
  }
}
