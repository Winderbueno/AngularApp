//#region Angular, Material, NgRx
import { Directive } from '@angular/core';
import { FormComponent } from '../../component';
//#endregion

/**
 * No Persist Form Directive
 *    Applicable on a <k-form> element
 *    Deactivate all kind of form state persistance ('globalState' & 'browserStorage')
 */
@Directive({ selector: '[no-persist]' })
export class NoPersistFormDirective {
  constructor(public component: FormComponent) {
    component.browserPersist = false;
    component.statePersist = false;
  }
}
