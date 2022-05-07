//#region Angular, Material, NgRx
import { Directive } from '@angular/core';
import { FormComponent } from '../../component';
//#endregion

/**
 * No Browser Persist Form Directive
 *    Applicable on a <k-form> element,
 *    Deactivate form browser persistance
 *    (If browser persist mecanism is well configured)
 */
@Directive({ selector: '[no-browser-persist]' })
export class NoBrowserPersistFormDirective {
  constructor(public component: FormComponent) {
    component.browserPersist = false;
  }
}
