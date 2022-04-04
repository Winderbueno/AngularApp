//#region Angular, Material, NgRx
import { Directive } from '@angular/core';
import { FormComponent } from '../component';
//#endregion

/**
 * No Validate Form Directive
 *  Put this directive on a <k-form> element
 *  Deactivate field validation on the form 
 */
@Directive({ selector: '[no-persist]' })
export class NoPersistFormDirective {
  constructor(public component: FormComponent) {
    component.unpersist = true;
  }
}
