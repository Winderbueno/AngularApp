//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
//#endregion

//#region Component, Model, Service
import { NgrxFieldComponent } from '@module/ngrx-form/component/field/ngrx-field.component';
import { Enum } from '@enum/model/enum.model'; // TODO - we use an external tech base
//#endregion


/**
 * Select Field Component
 *  @param enum - Values proposed in the select field
 */
@Component({
  selector: 'app-select-ngrx-field',
  templateUrl: 'select-ngrx-field.component.html' })
export class SelectNgrxFieldComponent extends NgrxFieldComponent {

  @Input() enum!: Enum;
}
