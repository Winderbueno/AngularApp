//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region This (TODO - Should not be a field ?)
import { FieldComponent } from '../../field/field.component';
//#endregion


/**
 * CheckBox Field Component
 */
@Component({
  selector: 'k-button-slide-toggle[ctrlName]',
  templateUrl: 'slide-toggle-button.component.html'
})
export class SlideToggleButtonComponent extends FieldComponent {}
