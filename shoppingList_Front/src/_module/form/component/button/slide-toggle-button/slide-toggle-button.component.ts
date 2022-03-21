//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Component, Model, Service
import { FieldComponent } from '@form/component';
//#endregion


/**
 * CheckBox Field Component
 */
@Component({
  selector: 'k-button-slide-toggle[formId][ctrlName]',
  templateUrl: 'slide-toggle-button.component.html'
})
export class SlideToggleButtonComponent extends FieldComponent {}
