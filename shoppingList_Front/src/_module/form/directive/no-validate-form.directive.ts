//#region Angular, Material, NgRx
import { Directive } from '@angular/core';
import { FormComponent } from '../component/form/form.component';
//#endregion

/**
 * No Validate Form Directive
 *  Put this directive on a <k-form> element
 *  Deactivate field validation on the form 
 */
@Directive({ selector: '[no-validate]' })
export class NoValidateFormDirective {
  constructor(public component: FormComponent) {
    component.validate = false;
  }
}
